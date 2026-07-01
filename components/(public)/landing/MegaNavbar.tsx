"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  Cloud,
  Code2,
  GraduationCap,
  Instagram,
  Lightbulb,
  Linkedin,
  Menu,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  X,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

/* ─────────────────────────  Données du menu  ───────────────────────── */

type MegaCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
};
type MegaColumn = { heading: string; links: { label: string; href: string }[] };
type Mega = {
  featured: {
    title: string;
    desc: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  cards: MegaCard[];
  columns: MegaColumn[];
};
type NavItem =
  | { key: string; label: string; href: string; mega?: undefined }
  | { key: string; label: string; mega: Mega; href?: undefined };

const solutionsMega: Mega = {
  featured: {
    title: "Nos Solutions",
    desc: "Des produits sur-mesure pour digitaliser vos métiers.",
    primary: { label: "Découvrir", href: "/v2/solutions" },
    secondary: { label: "Demander une démo", href: "/v2/contact" },
  },
  cards: [
    { icon: Building2, title: "Lunion-Booking", desc: "Gestion immobilière & réservations", href: "/v2/solutions" },
    { icon: GraduationCap, title: "Lunion-Educ", desc: "Gestion scolaire & universitaire", href: "/v2/solutions" },
    { icon: ShieldCheck, title: "Lunion-Secure", desc: "RH, paie & contrôle d'accès", href: "/v2/solutions" },
    { icon: Sparkles, title: "Sur-mesure", desc: "Votre solution dédiée de A à Z", href: "/v2/contact" },
  ],
  columns: [
    {
      heading: "Commencer",
      links: [
        { label: "Comment ça marche", href: "#" },
        { label: "Tarifs", href: "/v2" },
        { label: "Démos produit", href: "#" },
      ],
    },
    {
      heading: "Général",
      links: [
        { label: "Cas d'usage", href: "#" },
        { label: "Sécurité", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ],
};

const servicesMega: Mega = {
  featured: {
    title: "Nos Services",
    desc: "De l'idée au produit livré, par une équipe experte.",
    primary: { label: "Voir nos services", href: "/v2/services" },
    secondary: { label: "Nous contacter", href: "/v2/contact" },
  },
  cards: [
    { icon: Code2, title: "Développement Web", desc: "Apps & sites performants", href: "/v2/services" },
    { icon: Smartphone, title: "Développement Mobile", desc: "iOS & Android, natif/cross", href: "/v2/services" },
    { icon: Palette, title: "UI/UX Design", desc: "Interfaces premium", href: "/v2/services" },
    { icon: Lightbulb, title: "Conseil & Stratégie", desc: "Cadrage & roadmap produit", href: "/v2/services" },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Infra scalable & CI/CD", href: "/v2/services" },
    { icon: Wrench, title: "Maintenance", desc: "Support & évolutions", href: "/v2/services" },
  ],
  columns: [
    {
      heading: "Commencer",
      links: [
        { label: "Notre process", href: "#" },
        { label: "Demander un devis", href: "/v2/contact" },
      ],
    },
    {
      heading: "Général",
      links: [
        { label: "Technologies", href: "#" },
        { label: "Garanties", href: "#" },
      ],
    },
  ],
};

const plusMega: Mega = {
  featured: {
    title: "Communauté",
    desc: "Rejoignez la communauté LUNION-LAB et restez connecté.",
    primary: { label: "Discord", href: "#" },
    secondary: { label: "Telegram", href: "#" },
  },
  cards: [
    { icon: Sparkles, title: "Blog", desc: "Articles & actualités tech", href: "/v2/blog" },
    { icon: Lightbulb, title: "Carrières", desc: "Rejoignez l'équipe", href: "#" },
    { icon: Building2, title: "Partenaires", desc: "Construisons ensemble", href: "#" },
    { icon: GraduationCap, title: "Événements", desc: "Près de chez vous", href: "#" },
  ],
  columns: [
    {
      heading: "Société",
      links: [
        { label: "À propos", href: "/v2/a-propos" },
        { label: "Notre équipe", href: "#" },
        { label: "Contact", href: "/v2/contact" },
      ],
    },
    {
      heading: "Réseaux sociaux",
      links: [
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "YouTube", href: "#" },
        { label: "TikTok", href: "#" },
      ],
    },
  ],
};

const NAV: NavItem[] = [
  { key: "solutions", label: "Solutions", mega: solutionsMega },
  { key: "services", label: "Services", mega: servicesMega },
  { key: "portfolio", label: "Portfolio", href: "/v2/portfolio" },
  { key: "plus", label: "Plus", mega: plusMega },
];

/* ─────────────────────────  Sous-composants  ───────────────────────── */

function Wordmark() {
  return (
    <Link href="/v2" className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet text-sm font-black text-white shadow-[0_0_24px_-4px_rgba(139,92,246,0.8)]">
        L
      </span>
      <span className="text-lg font-extrabold tracking-tight text-white">
        LUNION<span className="text-violet-bright">·</span>LAB
      </span>
    </Link>
  );
}

function MegaPanel({ mega }: { mega: Mega }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Carte mise en avant */}
      <div className="lg:col-span-3">
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet/30 bg-gradient-to-br from-violet/25 via-violet-deep/10 to-black p-5">
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet/40 blur-3xl" />
          <h3 className="text-lg font-extrabold text-white">{mega.featured.title}</h3>
          <p className="mt-2 text-sm text-zinc-400">{mega.featured.desc}</p>
          <div className="mt-auto flex flex-col gap-2 pt-6">
            <Link
              href={mega.featured.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-bright"
            >
              {mega.featured.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={mega.featured.secondary.href}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {mega.featured.secondary.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Grille de cartes */}
      <div className="lg:col-span-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {mega.cards.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                href={c.href}
                className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-white/10 hover:bg-white/5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-violet/15 text-violet-bright transition-colors group-hover:bg-violet/25">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-white">
                    {c.title}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="mt-0.5 block text-xs text-zinc-400">{c.desc}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Colonnes de liens */}
      <div className="grid grid-cols-2 gap-6 lg:col-span-3">
        {mega.columns.map((col) => (
          <div key={col.heading}>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {col.heading}
            </p>
            <ul className="mt-3 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-300 transition-colors hover:text-violet-bright"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────  Composant principal  ───────────────────────── */

export function MegaNavbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [lang, setLang] = useState("FR");

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl"
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Wordmark />

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.mega ? (
              <button
                key={item.key}
                type="button"
                onMouseEnter={() => setOpen(item.key)}
                onClick={() => setOpen(open === item.key ? null : item.key)}
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  open === item.key
                    ? "bg-white/5 text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    open === item.key ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                onMouseEnter={() => setOpen(null)}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Actions droite */}
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
              className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {lang}
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <Link
            href="/auth/login"
            className="rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-bright hover:shadow-[0_0_30px_-4px_rgba(139,92,246,0.8)]"
          >
            Connexion
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Méga-panneau desktop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-black/95 backdrop-blur-xl lg:block"
          >
            <div className="mx-auto max-w-7xl px-6 py-8">
              <MegaPanel mega={(NAV.find((n) => n.key === open) as { mega: Mega }).mega} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV.map((item) =>
                item.mega ? (
                  <div key={item.key} className="rounded-xl">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSub(mobileSub === item.key ? null : item.key)
                      }
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-white hover:bg-white/5"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileSub === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileSub === item.key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3"
                        >
                          {item.mega.cards.map((c) => (
                            <Link
                              key={c.title}
                              href={c.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                            >
                              <c.icon className="h-4 w-4 text-violet-bright" />
                              {c.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-white hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/auth/login"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet px-4 py-3 text-sm font-semibold text-white"
              >
                Connexion
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
