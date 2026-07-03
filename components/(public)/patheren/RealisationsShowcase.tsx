"use client";

// Section « Nos réalisations » — carrousel de navigateurs Safari (projets web),
// navigable avec deux boutons prev / next dans le coin haut-droite.
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Safari } from "@/components/magicui/safari";

const projects = [
  {
    name: "Wacanda Store",
    category: "E-commerce",
    url: "wacanda-store.com",
    img: "/assets/images/portfolio/store.png",
  },
  {
    name: "Ambassade du Tchad",
    category: "Institutionnel",
    url: "ambassade-tchad.ci",
    img: "/assets/images/portfolio/ambassade.png",
  },
  {
    name: "Catholikia",
    category: "Média",
    url: "catholikia.org",
    img: "/assets/images/portfolio/catholikia.png",
  },
  {
    name: "Fernand Dedeh",
    category: "Presse",
    url: "fernanddedeh.info",
    img: "/assets/images/portfolio/fdedeh_info.png",
  },
  {
    name: "Luxury Home Abidjan",
    category: "Immobilier",
    url: "luxuryhomeabidjan.com",
    img: "/assets/images/portfolio/luxury.png",
  },
  {
    name: "Holding",
    category: "Corporate",
    url: "holding.ci",
    img: "/assets/images/portolios/holding.png",
  },
];

export function RealisationsShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.5;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Des idées devenues produits
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[#9a9a9a]">
            Des sites et des applications livrés pour des marques d&apos;ici, du
            web au mobile.
          </p>
        </div>

        {/* prev / next dans le coin haut-droite */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Précédent"
            onClick={() => scrollByCard(-1)}
            className="grid size-11 place-items-center rounded-full border border-black/10 text-[#101010] transition hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Suivant"
            onClick={() => scrollByCard(1)}
            className="grid size-11 place-items-center rounded-full border border-black/10 text-[#101010] transition hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-visible-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {projects.map((p) => (
          <Link
            key={p.name}
            data-card
            href="/portfolio"
            className="group w-[78%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
          >
            <div className="dark overflow-hidden rounded-2xl bg-[#f2f2f5] p-3 ring-1 ring-black/5 transition duration-300 group-hover:ring-[color-mix(in_srgb,var(--primary)_35%,transparent)]">
              <Safari
                url={p.url}
                imageSrc={p.img}
                className="w-full drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-1"
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between px-1">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-[#101010]">
                  {p.name}
                </h3>
                <p className="text-[11px] text-[#9a9a9a]">{p.category}</p>
              </div>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#f2f2f2] text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-45" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
