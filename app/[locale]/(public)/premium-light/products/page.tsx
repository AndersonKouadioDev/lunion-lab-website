import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  PatherenFooter,
  ProjectCta,
  Photo,
} from "@/components/(public)/patheren/ui";
import { products, statusLabel } from "@/components/(public)/patheren/catalog";

export const metadata = {
  title: "Produits, Lunion Lab",
  description:
    "Découvrez la suite de produits Lunion Lab : Meet, Booking, Secu et Educ.",
};

export default function ProductsIndex() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* HERO */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-12">
        <div className="mx-auto max-w-2xl px-6 pt-8 text-center sm:pt-14">
          <div className="text-xs font-semibold tracking-widest text-[var(--primary)]">
            Nos produits
          </div>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Des produits pensés
            <br />
            pour vos métiers
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Quatre plateformes prêtes à digitaliser vos opérations, de la
            visioconférence à la gestion immobilière, de l&apos;éducation aux
            ressources humaines.
          </p>
        </div>
      </section>

      {/* GRID PRODUITS */}
      <section className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/premium-light/products/${p.slug}`}
            className="group flex flex-col rounded-[28px] bg-white p-7 transition hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]"
          >
            <div className="relative">
              <Photo tone="team" className="h-44 rounded-2xl grayscale" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
                <span
                  className={`size-1.5 rounded-full ${
                    p.status === "prod" ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
                {statusLabel[p.status ?? "dev"]}
              </span>
              <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white text-[#101010] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <div className="mt-5 flex flex-1 flex-col">
              <div className="text-xs font-semibold tracking-widest text-[var(--primary)]">
                {p.category}
              </div>
              <h2 className="mt-1 text-2xl font-extrabold">{p.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#9a9a9a]">
                {p.tagline}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                <div>
                  <span className="text-lg font-extrabold text-[var(--primary)]">
                    {p.growth.value}
                  </span>
                  <span className="ml-2 text-xs text-[#9a9a9a]">{p.growth.label}</span>
                </div>
                <span className="text-sm font-semibold text-[#101010]">Découvrir →</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <ProjectCta />
      <PatherenFooter />
    </main>
  );
}
