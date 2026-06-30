"use client";

import { Button, Modal } from "@heroui/react";
import { useCallback } from "react";
import { IUtilisateur } from "@/features/utilisateur/types/utilisateur.type";
import { useSupprimerUtilisateurMutation } from "@/features/utilisateur/queries/utilisateur-delete.mutation";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  utilisateur: IUtilisateur | null;
};

export function UtilisateurDeleteModal({
  isOpen,
  setIsOpen,
  utilisateur,
}: Props) {
  const { mutateAsync: supprimerUtilisateurMutation, isPending } =
    useSupprimerUtilisateurMutation();

  const handleClose = useCallback(() => {
    if (!isPending) {
      setIsOpen(false);
    }
  }, [isPending, setIsOpen]);

  const handleDelete = useCallback(async () => {
    await supprimerUtilisateurMutation({ id: utilisateur?.id || "" });
    handleClose();
  }, [supprimerUtilisateurMutation, handleClose, utilisateur]);

  return (
    <Modal>
      <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.Header className="flex flex-col gap-1">
              <Modal.Heading className="text-lg font-medium text-primary">
                {`Supprimer ${utilisateur?.firstName} ${utilisateur?.lastName} ?`}
              </Modal.Heading>
              <p className="text-sm text-gray-500">
                Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cet
                utilisateur sera banni de l&apos;application.
              </p>
            </Modal.Header>
            <Modal.Body />
            <Modal.Footer>
              <Button
                variant="danger-soft"
                onPress={handleClose}
                isDisabled={isPending}
              >
                Annuler
              </Button>
              <Button
                variant="danger"
                onPress={handleDelete}
                isPending={isPending}
              >
                Supprimer
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
