"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
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

const SOON = (t: string) => `/soon?title=${encodeURIComponent(t)}`;

const productsMega: Mega = {
  featured: {
    title: "Nos produits",
    desc: "Quatre plateformes prêtes à l'emploi pour digitaliser vos métiers, de la visioconférence à l'éducation.",
    primary: { label: "Découvrir les produits", href: "/products" },
    secondary: { label: "Demander une démo", href: "/contact" },
  },
  cards: products.map((p) => ({
    title: p.name,
    desc: p.tagline,
    href: `/products/${p.slug}`,
  })),
  start: [
    { over: "Commencer", label: "Comment ça marche", href: "/products" },
    { over: "Tarifs", label: "Nos tarifs", href: SOON("Nos tarifs"), ext: true },
    { over: "Démos", label: "Voir les démos", href: "/contact" },
  ],
  general: [
    { label: "Cas d'usage", href: "/portfolio" },
    { label: "Sécurité des données", href: "/about" },
    { label: "Questions fréquentes", href: SOON("Questions fréquentes") },
  ],
};

const servicesMega: Mega = {
  featured: {
    title: "Nos services",
    desc: "De la première idée au produit livré, portée par une équipe experte.",
    primary: { label: "Voir nos services", href: "/services" },
    secondary: { label: "Nous contacter", href: "/contact" },
  },
  cards: services.map((s) => ({
    title: s.name,
    desc: s.tagline,
    href: `/services/${s.slug}`,
  })),
  start: [
    { over: "Commencer", label: "Notre méthode", href: "/services" },
    { over: "Devis", label: "Demander un devis", href: "/contact", ext: true },
  ],
  general: [
    { label: "Nos technologies", href: SOON("Nos technologies") },
    { label: "Nos garanties", href: "/about" },
  ],
};

const resourcesMega: Mega = {
  featured: {
    title: "La communauté",
    desc: "Rejoignez la communauté Lunion Lab et gardez le lien avec nos équipes.",
    primary: { label: "LinkedIn", href: "https://www.linkedin.com/company/lunion-lab/?viewAsMember=true" },
    secondary: { label: "Instagram", href: "https://www.instagram.com/lunionlab" },
  },
  cards: [
    { title: "Blog", desc: "Articles et actualités tech", href: SOON("Blog") },
    { title: "Carrières", desc: "Rejoignez l'équipe", href: "/contact" },
    { title: "Partenaires", desc: "Construisons ensemble", href: "/contact" },
    { title: "Événements", desc: "Retrouvez-nous près de chez vous", href: "/contact" },
  ],
  start: [
    { over: "Société", label: "À propos", href: "/about" },
    { over: "Équipe", label: "Notre équipe", href: "/about#equipe" },
    { over: "Contact", label: "Contact", href: "/contact" },
  ],
  general: [
    { label: "Instagram", href: "https://www.instagram.com/lunionlab" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/lunion-lab/?viewAsMember=true" },
    { label: "Facebook", href: "https://www.facebook.com/share/1Cqq9P2ktD/?mibextid=wwXIfr" },
    { label: "TikTok", href: "https://www.tiktok.com/@lunion.lab" },
  ],
};

type NavItem =
  | { key: string; label: string; href: string; mega?: undefined }
  | { key: string; label: string; mega: Mega; href?: undefined };

const NAV: NavItem[] = [
  { key: "products", label: "Produits", mega: productsMega },
  { key: "services", label: "Services", mega: servicesMega },
  { key: "portfolio", label: "Portfolio", href: "/portfolio" },
  { key: "about", label: "À propos", href: "/about" },
  { key: "resources", label: "Plus", mega: resourcesMega },
];

const SOCIALS = [
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/images/all-img/logo.png"
        alt="Lunion Lab"
        width={392}
        height={100}
        priority
        className="h-8 w-auto"
      />
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
  const pathname = usePathname() ?? "/";
  const sub = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [lang, setLang] = useState("FR");

  const isActive = (item: NavItem) =>
    item.href
      ? item.href === "/"
        ? sub === "/"
        : sub.startsWith(item.href)
      : item.key === "products"
        ? sub.startsWith("/products")
        : item.key === "services"
          ? sub.startsWith("/services")
          : false;

  return (
    <header className="relative z-40" style={{ fontFamily: "var(--font-figtree)" }}>
      <div className="mx-auto max-w-[1680px] px-4">
        {/* Barre d'annonce (rattachée en haut du bloc) */}
        <div className="mt-3 flex items-center justify-center gap-2 rounded-t-[28px] bg-[var(--primary)] px-4 py-2.5 text-sm text-white">
          <span className="font-semibold">Transformez votre idée en produit digital, consultation offerte</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold">
            Nouveau
          </span>
        </div>

        {/* Barre de nav (blanche, rattachée à la première section) */}
        <div
          className="relative bg-white px-5 py-3.5"
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
              href="/contact"
              className="rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-600)]"
            >
              Contact
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
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white"
              >
                Contact
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
