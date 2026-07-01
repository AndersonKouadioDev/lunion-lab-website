import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Hammer } from "lucide-react";
import { PatherenFooter } from "@/components/(public)/patheren/ui";
import { Star } from "@/components/(public)/patheren/icons";
import { SoonTitle } from "@/components/(public)/patheren/SoonTitle";

export const metadata = {
  title: "Bientôt disponible, Lunion Lab",
  description: "Cette page est en préparation.",
};

export default function SoonPage() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-3 pb-3 text-[#101010] sm:px-4 sm:pb-4"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      <section className="grid min-h-[68vh] place-items-center overflow-hidden rounded-b-[36px] bg-white p-6 text-center sm:p-12">
        <div className="relative mx-auto max-w-xl">
          <Star className="absolute -left-4 -top-6 hidden size-10 text-[var(--primary)]/20 sm:block" />
          <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#f3eefc] text-[var(--primary)]">
            <Hammer className="size-8" strokeWidth={1.8} />
          </div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f3eefc] px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
            <Star className="size-3.5" />
            Travail en cours
          </div>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            <Suspense fallback="Cette page est en préparation">
              <SoonTitle />
            </Suspense>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Cette page arrive très bientôt. Nos équipes y travaillent pour vous
            offrir la meilleure expérience possible. En attendant, revenez à
            l&apos;accueil ou contactez-nous directement.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/premium-light"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(112,74,155,0.45)] transition hover:bg-[var(--primary-600)]"
            >
              Retour à l&apos;accueil
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/premium-light/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <PatherenFooter />
    </main>
  );
}
