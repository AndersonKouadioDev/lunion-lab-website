"use client";

import { toast } from "@heroui/react";
import {
    useMutation,
} from '@tanstack/react-query';
import {
    supprimerUtilisateurAction
} from '../actions/utilisateur.action';
import { useInvalidateUtilisateurQuery } from './index.query';

export const useSupprimerUtilisateurMutation = () => {
    const invalidateUtilisateurQuery = useInvalidateUtilisateurQuery()
    return useMutation({
        mutationFn: async ({ id }: { id: string }) => {
            if (!id) {
                throw new Error("L'identifiant de l'utilisateur est requis.");
            }
            const result = await supprimerUtilisateurAction(id)
            if (!result.success) {
                throw new Error(result.error || "Erreur lors de la suppression de l'utilisateur");
            }
            return result.data!;
        },
        onSuccess: async () => {
            invalidateUtilisateurQuery();
            toast.success("Utilisateur supprimé avec succès", {
                description: "Utilisateur supprimé avec succès",
            });
        },
        onError: async (error) => {
            toast.danger("Erreur suppression utilisateur:", {
                description: error.message,
            });
        },
    });
};