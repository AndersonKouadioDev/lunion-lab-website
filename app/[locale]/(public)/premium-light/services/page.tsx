import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  PatherenFooter,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { services } from "@/components/(public)/patheren/catalog";

export const metadata = {
  title: "Services | Lunion Lab",
  description:
    "Conception, développement web et mobile, design et accompagnement par Lunion Lab.",
};

export default function ServicesIndex() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* HERO */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-12">
        <Reveal className="mx-auto max-w-2xl px-6 pt-8 text-center sm:pt-14">
          <div className="text-xs font-semibold tracking-widest text-[var(--primary)]">
            Nos domaines d&apos;expertise
          </div>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            De l&apos;idée
            <br />
            au produit livré
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Une équipe experte à chaque étape : conception, développement, design
            et accompagnement, pour des produits qui font la différence.
          </p>
        </Reveal>
      </section>

      {/* LISTE ÉDITORIALE (distincte de la grille produits) */}
      <section className="mt-4 rounded-[28px] bg-white p-6 sm:p-10">
        <Stagger className="divide-y divide-black/10">
          {services.map((s, i) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/premium-light/services/${s.slug}`}
                className="group flex flex-col gap-4 rounded-2xl py-8 transition-colors hover:bg-[#faf7ff] md:flex-row md:items-center md:gap-8 md:px-4"
              >
                <span className="w-16 text-4xl font-extrabold text-[#e2ddec] transition-colors group-hover:text-[var(--primary)]">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <div className="text-xs font-semibold tracking-widest text-[var(--primary)]">
                    {s.category}
                  </div>
                  <h2 className="mt-1 text-3xl font-extrabold transition-colors group-hover:text-[var(--primary)]">
                    {s.name}
                  </h2>
                  <p className="mt-1 max-w-md text-sm text-[#9a9a9a]">{s.tagline}</p>
                </div>
                <div className="md:text-right">
                  <div className="text-2xl font-extrabold text-[var(--primary)]">
                    {s.growth.value}
                  </div>
                  <div className="text-xs text-[#9a9a9a]">{s.growth.label}</div>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-black/10 transition group-hover:border-transparent group-hover:bg-[var(--primary)] group-hover:text-white">
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ProjectCta />
      <PatherenFooter />
    </main>
  );
}
