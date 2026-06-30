"use client";

import {
  Button,
  FieldError,
  Input,
  ListBox,
  Modal,
  Select,
  TextField,
} from "@heroui/react";
import { useCallback, useMemo } from "react";

import { useAjouterUtilisateurMutation } from "@/features/utilisateur/queries/utilisateur-add.mutation";
import {
  UtilisateurAddDTO,
  UtilisateurAddSchema,
} from "@/features/utilisateur/schema/utilisateur.schema";
import { UtilisateurRole } from "@/features/utilisateur/types/utilisateur.type";
import { getUtilisateurRole } from "@/features/utilisateur/utils/getUtilisateurRole";
import { getEnumValues } from "@/utils/getEnumValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export function UtilisateurAddModal({ isOpen, setIsOpen }: Props) {
  const roleOptions = useMemo(() => getEnumValues(UtilisateurRole), []);

  const { mutateAsync: ajouterUtilisateurMutation, isPending } =
    useAjouterUtilisateurMutation();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<UtilisateurAddDTO>({
    resolver: zodResolver(UtilisateurAddSchema),
    mode: "onChange",
  });

  const handleClose = useCallback(() => {
    if (!isPending) {
      setIsOpen(false);
      setTimeout(() => reset({ role: undefined }), 200);
    }
  }, [isPending, setIsOpen, reset]);

  const onSubmit = useCallback(
    async (formdata: UtilisateurAddDTO) => {
      await ajouterUtilisateurMutation({ data: formdata });
      handleClose();
    },
    [ajouterUtilisateurMutation, handleClose]
  );

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
                  Ajouter un utilisateur
                </Modal.Heading>
                <p className="text-sm text-gray-500">
                  Formulaire pour ajouter un nouvel utilisateur.
                </p>
              </Modal.Header>
              <Modal.Body className="flex flex-col gap-3">
                <TextField isInvalid={!!errors.firstName} isDisabled={isPending}>
                  <Input
                    {...register("firstName")}
                    placeholder="Entrer le prénom"
                    type="text"
                  />
                  <FieldError>{errors.firstName?.message}</FieldError>
                </TextField>
                <TextField isInvalid={!!errors.lastName} isDisabled={isPending}>
                  <Input
                    {...register("lastName")}
                    placeholder="Entrer le nom"
                    type="text"
                  />
                  <FieldError>{errors.lastName?.message}</FieldError>
                </TextField>
                <TextField isInvalid={!!errors.email} isDisabled={isPending}>
                  <Input
                    {...register("email")}
                    placeholder="Entrer l'email"
                    type="email"
                  />
                  <FieldError>{errors.email?.message}</FieldError>
                </TextField>
                <TextField
                  isInvalid={!!errors.phoneNumber}
                  isDisabled={isPending}
                >
                  <Input
                    {...register("phoneNumber")}
                    placeholder="Entrer le téléphone"
                    type="tel"
                  />
                  <FieldError>{errors.phoneNumber?.message}</FieldError>
                </TextField>
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
                  Ajouter
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
