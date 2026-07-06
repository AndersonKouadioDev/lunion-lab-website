"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Safari } from "@/components/magicui/safari";
import { Iphone } from "@/components/magicui/iphone";

/**
 * Grille de projets filtrable (theme premium-light).
 * Chaque projet est presente dans son vrai support :
 *   - navigateur Safari pour le web
 *   - iPhone pour le mobile
 * posé sur une scène colorée. Filtres Tous / Web / Mobile.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type Device = "web" | "mobile";

interface Project {
  title: string;
  sector: string;
  device: Device;
  desc: string;
  img: string;
  tone: string;
  url?: string; // affiché dans la barre Safari + lien externe
  href?: string; // destination du clic
}

const FILTERS: { id: "all" | Device; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];

const PROJECTS: Project[] = [
  {
    title: "Ambassade du Tchad",
    sector: "Institutionnel",
    device: "web",
    desc: "Plateforme consulaire en ligne : prise de rendez-vous, suivi des demandes de visa et informations aux citoyens.",
    img: "/assets/images/portfolio/ambassade.png",
    url: "ambassade-tchad.ci",
    href: "https://ambassade-tchad.ci",
    tone: "linear-gradient(135deg,#2a52d6,#0c2185)",
  },
  {
    title: "Turbo Delivery",
    sector: "Livraison",
    device: "mobile",
    desc: "Application de livraison express : commande, paiement mobile et suivi des courses en temps réel.",
    img: "/assets/images/portfolio/app_wallet.png",
    href: "/contact",
    tone: "linear-gradient(135deg,#6d4aa0,#2f1e52)",
  },
  {
    title: "Luxury Home Abidjan",
    sector: "Immobilier",
    device: "web",
    desc: "Vitrine immobilière haut de gamme offrant une sélection exclusive de biens de prestige.",
    img: "/assets/images/portfolio/luxury.png",
    url: "luxuryhomeabidjan.com",
    href: "https://luxuryhomeabidjan.com",
    tone: "linear-gradient(135deg,#3a3a3a,#0d0d0d)",
  },
  {
    title: "Wacanda Store",
    sector: "E-commerce",
    device: "web",
    desc: "Boutique en ligne fluide et sécurisée pour vendre, gérer un catalogue et suivre les commandes.",
    img: "/assets/images/portfolio/store.png",
    url: "wacanda-store.com",
    href: "https://wacanda-store.com",
    tone: "linear-gradient(135deg,#7d5aa8,#43306e)",
  },
  {
    title: "Lunion Meet",
    sector: "Visioconférence",
    device: "mobile",
    desc: "Application d'appels audio et vidéo de groupe, prête à l'emploi et intégrable partout.",
    img: "/assets/images/portfolio/meet_mobile.png",
    href: "/contact",
    tone: "linear-gradient(135deg,#178a7a,#0e5049)",
  },
  {
    title: "Fernand Dedeh",
    sector: "Presse",
    device: "web",
    desc: "Média en ligne au service de l'accès à l'information et de la liberté d'expression en Côte d'Ivoire.",
    img: "/assets/images/portfolio/fdedeh_info.png",
    url: "fernanddedeh.info",
    href: "https://fernanddedeh.info",
    tone: "linear-gradient(135deg,#5a53c9,#2f2a80)",
  },
  {
    title: "Brin Service Clean",
    sector: "Services / Nettoyage",
    device: "web",
    desc: "Site vitrine et réservation en ligne pour une entreprise de nettoyage professionnel.",
    img: "/assets/images/portfolio/brin.png",
    url: "brinserviceclean.com",
    href: "https://brinserviceclean.com",
    tone: "linear-gradient(135deg,#d6336c,#8a1e46)",
  },
];

// Deux iPhones côte à côte, inclinés de part et d'autre, avec profondeur.
function MobileDuo({ img }: { img: string }) {
  return (
    <div className="relative flex w-full items-center justify-center gap-3 sm:gap-4">
      <Iphone
        src={img}
        className="w-[42%] max-w-[148px] translate-y-3 -rotate-[9deg] drop-shadow-2xl transition-transform duration-500 group-hover:-translate-x-1.5 group-hover:-rotate-[11deg]"
      />
      <Iphone
        src={img}
        className="relative z-10 w-[42%] max-w-[148px] -translate-y-2 rotate-[9deg] drop-shadow-2xl transition-transform duration-500 group-hover:translate-x-1.5 group-hover:rotate-[11deg]"
      />
    </div>
  );
}

function CardInner({ p }: { p: Project }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl ring-1 ring-black/5 transition duration-300 group-hover:ring-[color-mix(in_srgb,var(--primary)_35%,transparent)]">
      {/* Scène colorée avec le support (Safari / iPhone) */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-6 pt-8 sm:px-8"
        style={{ background: p.tone }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        {p.device === "web" ? (
          <Safari
            url={p.url}
            imageSrc={p.img}
            className="relative w-full translate-y-1 drop-shadow-2xl transition-transform duration-500 group-hover:-translate-y-1"
          />
        ) : (
          <MobileDuo img={p.img} />
        )}
      </div>

      {/* Légende */}
      <div className="flex items-start justify-between gap-3 bg-white p-5">
        <div className="min-w-0">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--primary)]">
            {p.sector}
          </span>
          <h3 className="mt-1 text-lg font-extrabold leading-tight text-[#101010]">
            {p.title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-[#8a8a8a] line-clamp-2">
            {p.desc}
          </p>
        </div>
        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[#f4f2f8] text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
          <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
        </span>
      </div>
    </div>
  );
}

export function PortfolioGrid() {
  const [filter, setFilter] = useState<"all" | Device>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.device === filter);

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={active}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                active
                  ? "border-transparent bg-[var(--primary)] text-white"
                  : "border-black/10 text-[#555] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -12 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="group"
            >
              {p.href?.startsWith("http") ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <CardInner p={p} />
                </a>
              ) : (
                <Link href={p.href ?? "/contact"} className="block h-full">
                  <CardInner p={p} />
                </Link>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
