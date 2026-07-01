"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "À Propos", href: "#a-propos" },
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet text-sm font-black text-white shadow-[0_0_24px_-4px_rgba(139,92,246,0.8)]">
        L
      </span>
      <span className="text-lg font-extrabold tracking-tight text-white">
        LUNION<span className="text-violet-bright">·</span>LAB
      </span>
    </Link>
  );
}

/** Navbar collante glassmorphism. */
export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "my-2 rounded-2xl border border-white/10 bg-black/60 py-2.5 backdrop-blur-xl"
            : "border-b border-transparent py-4"
        }`}
      >
        <Wordmark />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(139,92,246,0)] transition-all duration-300 hover:bg-violet-bright hover:shadow-[0_0_30px_-4px_rgba(139,92,246,0.8)] sm:flex"
          >
            Prendre un rendez-vous
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-1 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-2 backdrop-blur-xl lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-violet px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Prendre un rendez-vous
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
