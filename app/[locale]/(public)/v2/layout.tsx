import { AnnouncementBar } from "@/components/(public)/landing/AnnouncementBar";
import { ContactFooter } from "@/components/(public)/landing/ContactFooter";
import { MegaNavbar } from "@/components/(public)/landing/MegaNavbar";

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white antialiased [color-scheme:dark]">
      <AnnouncementBar />
      <MegaNavbar />
      <main>{children}</main>
      <ContactFooter />
    </div>
  );
}
