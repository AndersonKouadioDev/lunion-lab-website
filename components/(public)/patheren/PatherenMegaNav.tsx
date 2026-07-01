"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  Plus,
  X,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { products, services } from "@/components/(public)/patheren/catalog";

/**
 * Navbar méga-menu premium-light, redesignée d'après les références FundedNext :
 * barre d'annonce + navbar blanche pleine largeur + méga-panneaux pleine largeur
 * (carte sombre featured à gauche, grille de cartes au centre, colonnes à droite).
 * Accent violet du projet, câblée sur le catalogue réel.
 */

type Card = { title: string; desc: string; href: string };
type Mega = {
  featured: {
    title: string;
    desc: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  cards: Card[];
  start: { over: string; label: string; href: string; ext?: boolean }[];
  general: { label: string; href: string }[];
};

const SOON = (t: string) => `/premium-light/soon?title=${encodeURIComponent(t)}`;

const productsMega: Mega = {
  featured: {
    title: "Products",
    desc: "One platform to book, protect and teach.",
    primary: { label: "Explore products", href: "/premium-light/products" },
    secondary: { label: "Free trial", href: SOON("Free trial") },
  },
  cards: products.map((p) => ({
    title: p.name,
    desc: p.tagline,
    href: `/premium-light/products/${p.slug}`,
  })),
  start: [
    { over: "Get started", label: "How Lunion works", href: SOON("How Lunion works") },
    { over: "Plans", label: "See pricing", href: SOON("Pricing"), ext: true },
  ],
  general: [
    { label: "Features", href: SOON("Features") },
    { label: "Integrations", href: SOON("Integrations") },
    { label: "Security", href: SOON("Security") },
    { label: "What's allowed", href: SOON("What's allowed") },
    { label: "FAQs", href: SOON("FAQs") },
  ],
};

const servicesMega: Mega = {
  featured: {
    title: "Services",
    desc: "From idea to launch, the full craft.",
    primary: { label: "Explore services", href: "/premium-light/services" },
    secondary: { label: "Get a quote", href: "/premium-light/contact" },
  },
  cards: services.map((s) => ({
    title: s.name,
    desc: s.tagline,
    href: `/premium-light/services/${s.slug}`,
  })),
  start: [
    { over: "Start a project", label: "Our process", href: SOON("Our process") },
    { over: "Work with us", label: "Book a call", href: "/premium-light/contact", ext: true },
  ],
  general: [
    { label: "Process", href: SOON("Process") },
    { label: "Technologies", href: SOON("Technologies") },
    { label: "Case studies", href: "/premium-light/portfolio" },
    { label: "Pricing", href: SOON("Pricing") },
    { label: "FAQs", href: SOON("FAQs") },
  ],
};

const resourcesMega: Mega = {
  featured: {
    title: "Community",
    desc: "Join the Lunion community and stay connected.",
    primary: { label: "Discord", href: SOON("Discord") },
    secondary: { label: "Telegram", href: SOON("Telegram") },
  },
  cards: [
    { title: "Blog", desc: "Articles & product news", href: SOON("Blog") },
    { title: "Careers", desc: "Join the team", href: SOON("Careers") },
    { title: "Partners", desc: "Let's build together", href: SOON("Partners") },
    { title: "Events", desc: "Meet us near you", href: SOON("Events") },
  ],
  start: [
    { over: "Get in touch", label: "Contact", href: "/premium-light/contact" },
    { over: "Help", label: "Help center", href: SOON("Help center") },
  ],
  general: [
    { label: "Documentation", href: SOON("Documentation") },
    { label: "Support", href: SOON("Support") },
    { label: "Status", href: SOON("Status") },
    { label: "Changelog", href: SOON("Changelog") },
  ],
};

type NavItem =
  | { key: string; label: string; href: string; mega?: undefined }
  | { key: string; label: string; mega: Mega; href?: undefined };

const NAV: NavItem[] = [
  { key: "products", label: "Products", mega: productsMega },
  { key: "services", label: "Services", mega: servicesMega },
  { key: "portfolio", label: "Portfolio", href: "/premium-light/portfolio" },
  { key: "about", label: "About Us", href: "/premium-light/about" },
  { key: "resources", label: "More", mega: resourcesMega },
];

const SOCIALS = [
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
];

function Logo() {
  return (
    <Link href="/premium-light" className="flex items-center gap-2 text-lg font-extrabold text-[#101010]">
      <span className="grid size-7 place-items-center rounded-md bg-[var(--primary)] text-white">
        <Plus className="size-4" />
      </span>
      patheren
    </Link>
  );
}

function MegaPanel({ mega }: { mega: Mega }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr_280px]">
      {/* Carte featured sombre */}
      <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[#2a2340] to-[#171225] p-6 text-white">
        <div className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-[var(--primary)]/30 blur-3xl" />
        <h3 className="relative text-2xl font-extrabold">{mega.featured.title}</h3>
        <p className="relative mt-2 text-sm text-white/60">{mega.featured.desc}</p>
        {/* Décor "chandeliers" */}
        <div className="relative mt-6 flex items-end gap-1.5 opacity-50">
          {[38, 64, 30, 84, 52, 70, 44].map((h, i) => (
            <div key={i} className="w-3 rounded-sm bg-white/40" style={{ height: h }} />
          ))}
        </div>
        <div className="relative mt-auto space-y-2 pt-8">
          <Link
            href={mega.featured.primary.href}
            className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-600)]"
          >
            {mega.featured.primary.label}
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href={mega.featured.secondary.href}
            className="flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {mega.featured.secondary.label}
          </Link>
        </div>
      </div>

      {/* Grille de cartes (catalogue) */}
      <div className="grid grid-cols-1 content-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {mega.cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group flex flex-col rounded-2xl bg-[#f5f5f7] p-5 transition hover:bg-[#efeafb]"
          >
            <h4 className="text-lg font-extrabold text-[#101010]">{c.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-[#8a8a8a]">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#101010]">
              Découvrez
              <ArrowRight className="size-4 text-[var(--primary)] transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      {/* Colonnes de droite : Commencer + Général */}
      <div className="space-y-7">
        <div>
          <h4 className="text-sm font-bold text-[#101010]">Commencer</h4>
          <div className="mt-4 space-y-4">
            {mega.start.map((s) => (
              <div key={s.label}>
                <div className="text-xs text-[#9a9a9a]">{s.over}</div>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1 text-[15px] font-bold text-[#101010] transition hover:text-[var(--primary)]"
                >
                  {s.label}
                  {s.ext && <ArrowUpRight className="size-4" />}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#101010]">Général</h4>
          <ul className="mt-4 space-y-2.5">
            {mega.general.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[15px] font-semibold text-[#555] transition hover:text-[var(--primary)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function PatherenMegaNav() {
  const pathname = usePathname() ?? "/premium-light";
  const sub = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/premium-light";
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [lang, setLang] = useState("FR");

  const isActive = (item: NavItem) =>
    item.href
      ? item.href === "/premium-light"
        ? sub === "/premium-light"
        : sub.startsWith(item.href)
      : item.key === "products"
        ? sub.startsWith("/premium-light/products")
        : item.key === "services"
          ? sub.startsWith("/premium-light/services")
          : false;

  return (
    <header className="relative z-40" style={{ fontFamily: "var(--font-figtree)" }}>
      <div className="mx-auto max-w-[1680px] px-4">
        {/* Barre d'annonce (arrondie, dans le cadre) */}
        <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2 text-sm text-white">
          <span className="font-semibold">The Lunion product suite is live</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
            New
          </span>
        </div>

        {/* Barre de nav flottante arrondie */}
        <div
          className="relative my-3 rounded-2xl border border-black/5 bg-white/90 px-5 py-3 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          onMouseLeave={() => setOpen(null)}
        >
          <div className="relative flex h-11 items-center justify-between gap-4">
            <Logo />

            {/* Nav desktop (centrée) */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
            {NAV.map((item) =>
              item.mega ? (
                <button
                  key={item.key}
                  type="button"
                  onMouseEnter={() => setOpen(item.key)}
                  className={`inline-flex items-center gap-1 text-[15px] font-medium transition ${
                    open === item.key || isActive(item)
                      ? "text-[var(--primary)]"
                      : "text-[#333] hover:text-[#101010]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      open === item.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  key={item.key}
                  href={item.href}
                  onMouseEnter={() => setOpen(null)}
                  className={`text-[15px] font-medium transition ${
                    isActive(item) ? "text-[var(--primary)]" : "text-[#333] hover:text-[#101010]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions droite */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
              className="hidden items-center gap-1 text-sm font-medium text-[#333] transition hover:text-[#101010] sm:inline-flex"
            >
              {lang}
              <ChevronDown className="size-4" />
            </button>
            <Link
              href={SOON("Login")}
              className="rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-600)]"
            >
              Connexion
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              className="grid size-10 place-items-center rounded-lg border border-black/10 text-[#101010] md:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

          {/* Méga-panneau (arrondi, dans le cadre) */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-full hidden pt-3 md:block"
              >
                <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
                  <MegaPanel mega={(NAV.find((n) => n.key === open) as { mega: Mega }).mega} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mb-3 space-y-1 rounded-2xl border border-black/5 bg-white p-3 shadow-lg">
              {NAV.map((item) =>
                item.mega ? (
                  <div key={item.key}>
                    <button
                      type="button"
                      onClick={() => setMobileSub(mobileSub === item.key ? null : item.key)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#101010] hover:bg-[#f6f2fc]"
                    >
                      {item.label}
                      <ChevronDown
                        className={`size-4 transition-transform ${
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
                          className="overflow-hidden pl-2"
                        >
                          {item.mega.cards.map((c) => (
                            <Link
                              key={c.title}
                              href={c.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-xl px-4 py-2.5 text-sm text-[#333] hover:bg-[#f6f2fc] hover:text-[var(--primary)]"
                            >
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
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#101010] hover:bg-[#f6f2fc]"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="flex items-center gap-4 px-4 pt-3">
                {SOCIALS.map((s) => (
                  <s.icon key={s.label} className="size-5 text-[#555]" />
                ))}
              </div>
              <Link
                href={SOON("Login")}
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white"
              >
                Connexion
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
