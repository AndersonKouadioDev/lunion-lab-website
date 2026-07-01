"use client";

import { useSearchParams } from "next/navigation";

/**
 * Titre de la page "en construction" — lit ?title= côté client pour que la
 * page reste statiquement générée (SSG). Enveloppé dans un <Suspense>.
 */
export function SoonTitle() {
  const title = useSearchParams()?.get("title")?.trim() || "Cette page";
  return <>{title} est en préparation</>;
}
