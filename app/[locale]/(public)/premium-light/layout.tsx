import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patheren — Powerful Digital Branding Agency",
  description:
    "Provide the best service, with ideas that are out of the box. We are ready to help your business grow with attractive and useful visuals.",
};

export default function PremiumLightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Route autonome (navbar + footer propres à la maquette), fond clair premium.
  return <div className="min-h-screen bg-[#e9e9e9]">{children}</div>;
}
