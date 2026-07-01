import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PatherenMegaNav } from "@/components/(public)/patheren/PatherenMegaNav";

export const metadata: Metadata = {
  title: "Patheren — Powerful Digital Branding Agency",
  description:
    "Provide the best service, with ideas that are out of the box. We are ready to help your business grow with attractive and useful visuals.",
};

export default async function PremiumLightLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale); // rendu statique (SSG) des pages premium-light
  // Navbar méga-menu (redesignée premium-light) partagée par toutes les pages.
  return (
    <div className="min-h-screen bg-[#e9e9e9]">
      <PatherenMegaNav />
      {children}
    </div>
  );
}
