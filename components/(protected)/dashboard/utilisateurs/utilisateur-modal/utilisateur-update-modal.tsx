"use client";

import {
  Button,
  FieldError,
  ListBox,
  Modal,
  Select,
} from "@heroui/react";
import { useEffect, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UtilisateurRoleSchema,
  UtilisateurRoleDTO,
} from "@/features/utilisateur/schema/utilisateur.schema";
import {
  IUtilisateur,
  UtilisateurRole,
} from "@/features/utilisateur/types/utilisateur.type";
import { getEnumValues } from "@/utils/getEnumValues";
import { useModifierProfilMutation } from "@/features/utilisateur/queries/utilisateur-update.mutation";
import { getUtilisateurRole } from "@/features/utilisateur/utils/getUtilisateurRole";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  utilisateur: IUtilisateur | null;
};

export function UtilisateurUpdateModal({
  isOpen,
  setIsOpen,
  utilisateur,
}: Props) {
  const { mutateAsync: modifierProfilMutation, isPending } =
    useModifierProfilMutation();

  const roleOptions = useMemo(() => getEnumValues(UtilisateurRole), []);

  const {
    setValue,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<UtilisateurRoleDTO>({
    resolver: zodResolver(UtilisateurRoleSchema),
    mode: "onChange",
  });

  const handleClose = useCallback(() => {
    if (!isPending) {
      setIsOpen(false);
      setTimeout(() => reset({ role: undefined }), 200);
    }
  }, [isPending, setIsOpen, reset]);

  const onSubmit = useCallback(
    async (data: UtilisateurRoleDTO) => {
      await modifierProfilMutation({ id: utilisateur?.id || "", data });
      handleClose();
    },
    [modifierProfilMutation, handleClose, utilisateur]
  );

  useEffect(() => {
    if (!isOpen) return;

    const formValues = utilisateur
      ? { role: utilisateur.role }
      : { role: undefined };

    reset(formValues);
  }, [isOpen, utilisateur, reset]);

  const handleRoleChange = useCallback(
    (value: string) => {
      setValue("role", value as UtilisateurRole, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [setValue]
  );

  return (
    <Modal>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container>
          <Modal.Dialog>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Modal.Header className="flex flex-col gap-1">
                <Modal.Heading className="text-lg font-medium text-primary">
                  {`Modifier ${utilisateur?.firstName} ${utilisateur?.lastName}`}
                </Modal.Heading>
                <p className="text-sm text-gray-500">
                  Formulaire pour modifier le rôle d&apos;un utilisateur.
                </p>
              </Modal.Header>

              <Modal.Body>
                <Select
                  placeholder="Choisir un rôle"
                  value={watch("role") ?? null}
                  onChange={(value) => handleRoleChange(value as string)}
                  isInvalid={!!errors.role}
                  isDisabled={isPending}
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {roleOptions.map((role) => (
                        <ListBox.Item
                          key={role}
                          id={role}
                          textValue={getUtilisateurRole(role)}
                        >
                          {getUtilisateurRole(role)}
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                  <FieldError>{errors.role?.message}</FieldError>
                </Select>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="tertiary" onPress={handleClose}>
                  Annuler
                </Button>
                <Button
                  type="submit"
                  isDisabled={isPending || !isValid}
                  isPending={isPending}
                >
                  Modifier
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
