"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Grille de projets filtrable (thème premium-light) — inspirée des cartes
 * projets Atacama / creatiwise. Placeholders en dégradé (offline-friendly).
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type Cat = "product" | "web" | "mobile" | "branding";

interface Project {
  title: string;
  category: string;
  cat: Cat;
  desc: string;
  tone: string;
  span?: string;
}

const FILTERS: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "branding", label: "Branding" },
];

const PROJECTS: Project[] = [
  { title: "Lunion-Booking", category: "Product · SaaS", cat: "product", desc: "Reservation platform with real-time availability & payments.", tone: "linear-gradient(135deg,#7d5aa8,#43306e)", span: "lg:col-span-2" },
  { title: "Fintech Dashboard", category: "Web App", cat: "web", desc: "Compliant analytics dashboard for a digital bank.", tone: "linear-gradient(135deg,#2447c9,#0c2185)" },
  { title: "Health Companion", category: "Mobile · iOS/Android", cat: "mobile", desc: "Telemedicine app with appointments and records.", tone: "linear-gradient(135deg,#178a7a,#0f5a50)" },
  { title: "Café Fugaz", category: "Branding · Identity", cat: "branding", desc: "Full brand identity for a specialty coffee roaster.", tone: "linear-gradient(135deg,#c96a3a,#8a3f1e)" },
  { title: "Lunion-Educ", category: "Product · EdTech", cat: "product", desc: "Courses, live classes and assessments in one place.", tone: "linear-gradient(135deg,#5a53c9,#2f2a80)" },
  { title: "Retail Storefront", category: "Web · E-commerce", cat: "web", desc: "Fast, conversion-focused storefront and checkout.", tone: "linear-gradient(135deg,#3a3a3a,#101010)", span: "lg:col-span-2" },
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<"all" | Cat>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.cat === filter);

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
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition sm:px-5 ${
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
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
              className={`group relative flex h-64 flex-col justify-end overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:h-72 ${p.span ?? ""}`}
              style={{ background: p.tone }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#101010] backdrop-blur">
                {p.category}
              </span>
              <button className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-white/95 text-[#101010] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </button>
              <div className="relative">
                <h3 className="text-2xl font-extrabold tracking-tight text-white">{p.title}</h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-white/75">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  View project
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
