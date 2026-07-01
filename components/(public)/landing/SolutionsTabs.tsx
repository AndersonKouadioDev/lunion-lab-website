"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, Check, GraduationCap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";

const SOLUTIONS = [
  {
    id: "booking",
    name: "Lunion-Booking",
    domain: "Gestion immobilière",
    icon: Building2,
    image: "/assets/images/solution/lunion_booking.jpg",
    description:
      "Plateforme complète de gestion locative et immobilière : réservations, baux, paiements et suivi des biens en temps réel.",
    features: [
      "Gestion des biens & des locataires",
      "Paiements de loyers automatisés",
      "Tableau de bord propriétaire",
      "Notifications & rappels intelligents",
    ],
  },
  {
    id: "educ",
    name: "Lunion-Educ",
    domain: "Gestion éducative",
    icon: GraduationCap,
    image: "/assets/images/solution/solution_educ.png",
    description:
      "Système de gestion scolaire et universitaire : inscriptions, notes, emplois du temps et communication écoles-parents.",
    features: [
      "Inscriptions & dossiers élèves",
      "Bulletins & notes en ligne",
      "Emplois du temps dynamiques",
      "Espace parents & enseignants",
    ],
  },
  {
    id: "secure",
    name: "Lunion-Secure",
    domain: "Ressources Humaines",
    icon: ShieldCheck,
    image: "/assets/images/solution/lunion_secu.png",
    description:
      "Solution RH sécurisée : gestion des employés, congés, paie et contrôle d'accès pour des équipes sereines.",
    features: [
      "Gestion des employés & contrats",
      "Congés & présences",
      "Paie & bulletins sécurisés",
      "Contrôle d'accès & permissions",
    ],
  },
];

export function SolutionsTabs() {
  const [active, setActive] = useState(SOLUTIONS[0].id);
  const current = SOLUTIONS.find((s) => s.id === active)!;

  return (
    <section id="solutions" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
            Nos solutions
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Des produits pensés pour vos métiers
          </h2>
        </Reveal>

        {/* Onglets */}
        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          {SOLUTIONS.map((s) => {
            const TabIcon = s.icon;
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-violet bg-violet/15 text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.8)]"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:border-violet/40 hover:text-white"
                }`}
              >
                <TabIcon
                  className={`h-4 w-4 ${isActive ? "text-violet-bright" : ""}`}
                />
                {s.name}
              </button>
            );
          })}
        </Reveal>

        {/* Contenu */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-10 lg:grid-cols-2"
            >
              <div className="flex flex-col justify-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-violet/10 px-3 py-1 text-xs font-medium text-violet-bright">
                  {current.domain}
                </div>
                <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                  {current.name}
                </h3>
                <p className="mt-3 max-w-md text-zinc-400">
                  {current.description}
                </p>
                <ul className="mt-6 grid gap-3">
                  {current.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-zinc-200">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet/20 text-violet-bright">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet/15 via-black to-black">
                <div className="pointer-events-none absolute -right-10 -top-10 z-10 h-48 w-48 rounded-full bg-violet/30 blur-3xl" />
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
