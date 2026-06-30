"use client";

import { toast } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { processAndValidateFormData } from "ak-zod-form-kit";
import { modifierProfilAction } from "../actions/utilisateur.action";
import {
  UtilisateurUpdateDTO,
  UtilisateurUpdateSchema,
} from "../schema/utilisateur.schema";
import { useInvalidateUtilisateurQuery } from "./index.query";

export const useModifierProfilMutation = () => {
  const invalidateUtilisateurQuery = useInvalidateUtilisateurQuery();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: UtilisateurUpdateDTO;
    }) => {
      // Validation des données
      const validation = processAndValidateFormData(
        UtilisateurUpdateSchema,
        data,
        {
          outputFormat: "object",
        }
      );
      if (!validation.success) {
        throw new Error(
          validation.errorsInString ||
            "Une erreur est survenue lors de la validation des données."
        );
      }

      const result = await modifierProfilAction(
        id,
        validation.data as UtilisateurUpdateDTO
      );

      if (!result.success) {
        throw new Error(
          result.error || "Erreur lors de la modification de l'utilisateur"
        );
      }

      return result.data!;
    },
    onSuccess: async () => {
      invalidateUtilisateurQuery();
      toast.success("Utilisateur modifié avec succès", {
        description: "Utilisateur modifié avec succès",
      });
    },
    onError: async (error) => {
      toast.danger("Erreur modification utilisateur:", {
        description: error.message,
      });
    },
  });
};
