"use client";

import { addToast } from "@heroui/toast";
import {
    useMutation,
} from '@tanstack/react-query';
import { processAndValidateFormData } from "ak-zod-form-kit";
import { CheckCircle2, X } from "lucide-react";
import {
    ajouterUtilisateurAction
} from '../actions/utilisateur.action';
import { UtilisateurAddDTO, UtilisateurAddSchema } from '../schema/utilisateur.schema';
import { useInvalidateUtilisateurQuery } from './index.query';

export const useAjouterUtilisateurMutation = () => {
    const invalidateUtilisateurQuery = useInvalidateUtilisateurQuery()

    return useMutation({
        mutationFn: async ({ data }: { data: UtilisateurAddDTO }) => {
            // Validation des données
            const validation = processAndValidateFormData(UtilisateurAddSchema, data,
                {
                    outputFormat: "object",
                    transformations: {
                        firstName: (value: string) => value.trim(),
                        lastName: (value: string) => value.trim(),
                        email: (value: string) => value.trim().toLowerCase(),
                        phoneNumber: (value: string) => value.trim(),
                    },
                })

            if (!validation.success) {
                throw new Error(validation.errorsInString || "Une erreur est survenue lors de la validation des données.");
            }

            // Appel de l'API avec l'action
            const result = await ajouterUtilisateurAction(validation.data as UtilisateurAddDTO);

            if (!result.success) {
                throw new Error(result.error || "Erreur lors de l'ajout de l'utilisateur");
            }

            return result.data!;
        },
        onSuccess: async () => {
            addToast({
                title: "Utilisateur ajouté avec succès",
                description: "Utilisateur ajouté avec succès",
                promise: invalidateUtilisateurQuery(),
                icon: <CheckCircle2 />,
                color: "success",
            });
        },

        onError: async (error) => {
            console.log("error query", error)
            addToast({
                title: "Erreur lors de l'ajout de l'utilisateur:",
                description: error.message,
                promise: Promise.reject(error),
                icon: <X />,
                color: "danger",
            });
        },
    });
};
