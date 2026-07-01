"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

type Dept = "doyens" | "it" | "design" | "business";

interface Member {
  name: string;
  role: string;
  dept: Dept;
  photo: string;
}

const FILTERS: { id: "all" | Dept; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "doyens", label: "Doyens" },
  { id: "it", label: "IT" },
  { id: "design", label: "Designers" },
  { id: "business", label: "Business Developers" },
];

const MEMBERS: Member[] = [
  {
    name: "Anderson Kouadio",
    role: "Founder & CEO",
    dept: "doyens",
    photo: "/assets/images/membres/membre1.jpg",
  },
  {
    name: "Marie-Claire Diabaté",
    role: "Directrice des opérations",
    dept: "doyens",
    photo: "/assets/images/membres/membre2.jpg",
  },
  {
    name: "Yann Koffi",
    role: "Lead Developer",
    dept: "it",
    photo: "/assets/images/membres/membre3.jpg",
  },
  {
    name: "Sékou Traoré",
    role: "Ingénieur DevOps",
    dept: "it",
    photo: "/assets/images/membres/membre4.png",
  },
  {
    name: "Léa N'Guessan",
    role: "Lead Product Designer",
    dept: "design",
    photo: "/assets/images/membres/membre5.jpg",
  },
];

export function DreamTeam() {
  const [filter, setFilter] = useState<"all" | Dept>("all");
  const visible = MEMBERS.filter((m) => filter === "all" || m.dept === filter);

  return (
    <section id="equipe" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
            Notre équipe
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            La Dream Team derrière vos projets
          </h2>
          <p className="mt-4 text-zinc-400">
            Des talents complémentaires, unis par la même exigence : livrer des
            produits qui font la différence.
          </p>
        </Reveal>

        {/* Filtres par département */}
        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => {
            const isActive = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-violet bg-violet/15 text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.8)]"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:border-violet/40 hover:text-white"
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
          className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-violet-bright">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
