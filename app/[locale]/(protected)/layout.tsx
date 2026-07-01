import "@/styles/globals.css";

import Main from "@/components/primitives/Main";

// Espace protégé (session/headers) : rendu dynamique, jamais pré-généré.
export const dynamic = "force-dynamic";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Main>{children}</Main>;
}
