import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PatherenMegaNav } from "@/components/(public)/patheren/PatherenMegaNav";

export const metadata: Metadata = {
  title: "Lunion Lab, studio de création numérique",
  description:
    "Lunion Lab conçoit des solutions web et mobiles sur-mesure pour accélérer la transformation digitale des entreprises et des institutions en Afrique.",
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
