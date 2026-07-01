import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woogency — We Build UIUX Digital Experiences",
  description:
    "Your trusted partner in digital service. We build UIUX digital experiences with a human-centered approach.",
};

export default function WoogencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-[#b8b2e6] px-4 py-8"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-white shadow-2xl">
        {children}
      </div>
    </div>
  );
}
