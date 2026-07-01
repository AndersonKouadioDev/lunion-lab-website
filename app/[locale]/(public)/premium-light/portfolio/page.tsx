import {
  PatherenFooter,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { Star } from "@/components/(public)/patheren/icons";
import { PortfolioGrid } from "@/components/(public)/patheren/PortfolioGrid";

export const metadata = {
  title: "Portfolio | Lunion Lab",
  description:
    "Onze projets livrés pour des marques ambitieuses, du web au mobile, de la livraison à la finance.",
};

const stats = [
  ["+10", "Projets livrés"],
  ["11", "Marques accompagnées"],
  ["6", "Secteurs couverts"],
  ["100%", "Clients satisfaits"],
];

export default function PortfolioPage() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-3 pb-3 text-[#101010] sm:px-4 sm:pb-4"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* HERO */}
      <section className="overflow-hidden rounded-b-[36px] bg-white p-6 sm:p-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f3eefc] px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
            <Star className="size-3.5" />
            Portfolio
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl">
            Des réalisations qui
            <br />
            parlent d&apos;elles-mêmes
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Onze projets livrés pour des marques ambitieuses, du web au mobile,
            de la livraison à la finance.
          </p>
        </Reveal>

        <div className="mt-10">
          <PortfolioGrid />
        </div>
      </section>

      {/* STATS */}
      <section className="mt-4 rounded-[28px] bg-[#101010] p-6 text-white sm:p-12">
        <Stagger className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(([num, label]) => (
            <StaggerItem key={label}>
              <div className="text-3xl font-extrabold sm:text-5xl">{num}</div>
              <div className="mt-1 text-xs text-white/50 sm:text-sm">{label}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ProjectCta />
      <PatherenFooter />
    </main>
  );
}
