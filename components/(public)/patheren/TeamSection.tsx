"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/(public)/patheren/motion";

/**
 * Section équipe — adaptée de DreamTeam (V2) au thème clair premium-light.
 * Filtres par département + grille animée, vraies photos /assets/images/membres.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type Dept = "leadership" | "engineering" | "design" | "business";

interface Member {
  name: string;
  role: string;
  dept: Dept;
  photo: string;
}

const FILTERS: { id: "all" | Dept; label: string }[] = [
  { id: "all", label: "All" },
  { id: "leadership", label: "Leadership" },
  { id: "engineering", label: "Engineering" },
  { id: "design", label: "Design" },
  { id: "business", label: "Business" },
];

const MEMBERS: Member[] = [
  { name: "Anderson Kouadio", role: "Founder & CEO", dept: "leadership", photo: "/assets/images/membres/membre1.jpg" },
  { name: "Marie-Claire Diabaté", role: "Head of Operations", dept: "leadership", photo: "/assets/images/membres/membre2.jpg" },
  { name: "Yann Koffi", role: "Lead Developer", dept: "engineering", photo: "/assets/images/membres/membre3.jpg" },
  { name: "Sékou Traoré", role: "DevOps Engineer", dept: "engineering", photo: "/assets/images/membres/membre4.png" },
  { name: "Léa N'Guessan", role: "Lead Product Designer", dept: "design", photo: "/assets/images/membres/membre5.jpg" },
];

export function TeamSection() {
  const [filter, setFilter] = useState<"all" | Dept>("all");
  const visible = MEMBERS.filter((m) => filter === "all" || m.dept === filter);

  return (
    <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Our Team
        </p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
          The team behind your projects
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
          Complementary talents, united by the same standard: shipping products
          that make a difference.
        </p>
      </Reveal>

      {/* Filtres */}
      <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
        {FILTERS.map((f) => {
          const isActive = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? "border-transparent bg-[var(--primary)] text-white"
                  : "border-black/10 text-[#555] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </Reveal>

      {/* Grille de membres */}
      <motion.div
        layout
        className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((member) => (
            <motion.div
              key={member.name}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -12 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_20px_40px_-30px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-[var(--primary)]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
