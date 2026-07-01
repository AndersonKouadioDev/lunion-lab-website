"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Plus, X, type LucideIcon } from "lucide-react";
import { icons, Star } from "@/components/(public)/patheren/icons";
import { products, services } from "@/components/(public)/patheren/catalog";

/**
 * Navbar méga-menu redesignée pour premium-light (thème clair, accent
 * primaire violet, étoile creatiwise, barre blanche arrondie flottante).
 * Reprend la mécanique du méga-menu V2 mais câblée sur le catalogue réel.
 */

type MegaCard = { icon: LucideIcon; title: string; desc: string; href: string };
type Mega = {
  featured: { title: string; desc: string; href: string; cta: string };
  cards: MegaCard[];
  columns: { heading: string; links: { label: string; href: string }[] }[];
};

const productsMega: Mega = {
  featured: {
    title: "Our Products",
    desc: "One platform to book, protect and teach — with more on the way.",
    href: "/premium-light/products",
    cta: "Explore all",
  },
  cards: products.map((p) => ({
    icon: icons[p.features[0].icon],
    title: p.name,
    desc: p.category,
    href: `/premium-light/products/${p.slug}`,
  })),
  columns: [
    {
      heading: "Start",
      links: [
        { label: "All products", href: "/premium-light/products" },
        { label: "Pricing", href: "#" },
        { label: "Demos", href: "#" },
      ],
    },
    {
      heading: "More",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
  ],
};

const servicesMega: Mega = {
  featured: {
    title: "Our Services",
    desc: "From idea to launch, the full craft to bring your product to life.",
    href: "/premium-light/services",
    cta: "See all services",
  },
  cards: services.map((s) => ({
    icon: icons[s.features[0].icon],
    title: s.name,
    desc: s.category,
    href: `/premium-light/services/${s.slug}`,
  })),
  columns: [
    {
      heading: "Start",
      links: [
        { label: "Our process", href: "#" },
        { label: "Get a quote", href: "#" },
      ],
    },
    {
      heading: "More",
      links: [
        { label: "Technologies", href: "#" },
        { label: "Guarantees", href: "#" },
      ],
    },
  ],
};

type NavItem =
  | { key: string; label: string; href: string; mega?: undefined }
  | { key: string; label: string; mega: Mega; href?: undefined };

const NAV: NavItem[] = [
  { key: "home", label: "Home", href: "/premium-light" },
  { key: "products", label: "Products", mega: productsMega },
  { key: "services", label: "Services", mega: servicesMega },
  { key: "about", label: "About Us", href: "/premium-light/about" },
];

function Logo() {
  return (
    <Link href="/premium-light" className="flex items-center gap-2 text-lg font-extrabold">
      <span className="grid size-6 place-items-center rounded-md bg-[var(--primary)] text-white">
        <Plus className="size-4" />
      </span>
      patheren
    </Link>
  );
}

function MegaPanel({ mega }: { mega: Mega }) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      {/* Carte mise en avant */}
      <div className="lg:col-span-3">
        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-600)] p-5 text-white">
          <Star className="absolute -right-3 -top-3 size-12 text-white/15" />
          <h3 className="text-lg font-extrabold">{mega.featured.title}</h3>
          <p className="mt-2 text-sm text-white/70">{mega.featured.desc}</p>
          <Link
            href={mega.featured.href}
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)] transition hover:bg-white/90"
          >
            {mega.featured.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Grille de cartes (catalogue) */}
      <div className="lg:col-span-6">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {mega.cards.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.title}
                href={c.href}
                className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition hover:border-black/5 hover:bg-[#f6f2fc]"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#f3eefc] text-[var(--primary)]">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-[#101010]">
                    {c.title}
                    <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="mt-0.5 block text-xs text-[#9a9a9a]">{c.desc}</span>
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
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a5a5a5]">
              {col.heading}
            </p>
            <ul className="mt-3 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6f6f6f] transition hover:text-[var(--primary)]"
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

export function PatherenMegaNav() {
  const pathname = usePathname() ?? "/premium-light";
  const sub = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/premium-light";
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  const isActive = (item: NavItem) =>
    item.href
      ? item.href === "/premium-light"
        ? sub === "/premium-light"
        : sub.startsWith(item.href)
      : sub.startsWith(`/premium-light/${item.key}`);

  return (
    <header
      className="sticky top-0 z-50"
      style={{ fontFamily: "var(--font-figtree)" }}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="relative my-3 rounded-2xl border border-black/5 bg-white/85 px-5 py-3 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Logo />

            {/* Nav desktop */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAV.map((item) =>
                item.mega ? (
                  <button
                    key={item.key}
                    type="button"
                    onMouseEnter={() => setOpen(item.key)}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                      open === item.key || isActive(item)
                        ? "bg-[#f3eefc] text-[var(--primary)]"
                        : "text-[#333] hover:text-[var(--primary)]"
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
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive(item)
                        ? "text-[var(--primary)]"
                        : "text-[#333] hover:text-[var(--primary)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="hidden rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-600)] sm:inline-block"
              >
                Contact Us
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Menu"
                className="grid size-10 place-items-center rounded-full border border-black/10 text-[#101010] md:hidden"
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
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
                className="absolute inset-x-0 top-full hidden pt-3 md:block"
              >
                <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]">
                  <MegaPanel mega={(NAV.find((n) => n.key === open) as { mega: Mega }).mega} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-auto max-w-[1240px] overflow-hidden px-4 md:hidden"
          >
            <div className="mt-2 space-y-1 rounded-2xl border border-black/5 bg-white p-3 shadow-lg">
              {NAV.map((item) =>
                item.mega ? (
                  <div key={item.key}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSub(mobileSub === item.key ? null : item.key)
                      }
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
                              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-[#333] hover:bg-[#f6f2fc] hover:text-[var(--primary)]"
                            >
                              <c.icon className="size-4 text-[var(--primary)]" />
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
              <Link
                href="#"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white"
              >
                Contact Us
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
