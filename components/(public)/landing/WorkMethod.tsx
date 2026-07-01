"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Compass, LineChart, Code2, LifeBuoy, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Conception",
    description:
      "On part de votre besoin réel : ateliers, cadrage et maquettes pour transformer votre idée en une vision produit claire et partagée.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Stratégie",
    description:
      "On définit la feuille de route : architecture technique, priorisation des fonctionnalités et choix des outils pour avancer vite et bien.",
    icon: LineChart,
  },
  {
    number: "03",
    title: "Développer",
    description:
      "On construit votre solution par itérations : code propre, tests réguliers et livraisons fréquentes pour garder le cap à chaque étape.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Accompagner",
    description:
      "On reste à vos côtés après le lancement : formation, maintenance et évolutions continues pour faire grandir votre produit dans la durée.",
    icon: LifeBuoy,
  },
];

interface StepCardProps {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function StepCard({ step, index, total, progress }: StepCardProps) {
  const Icon = step.icon;

  // Fenêtre de progression dédiée à cette carte dans la pile.
  const start = index / total;
  const end = (index + 1) / total;

  // À mesure que les cartes suivantes arrivent, celle-ci recule légèrement :
  // réduction d'échelle, léger basculement isométrique et remontée subtile.
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - index) * 0.045]);
  const rotate = useTransform(
    progress,
    [start, 1],
    [0, index % 2 === 0 ? -2.5 : 2.5]
  );
  const y = useTransform(progress, [start, 1], [0, -(total - index) * 14]);
  // Apparition fluide quand la carte entre dans sa fenêtre.
  const opacity = useTransform(
    progress,
    [Math.max(start - 0.12, 0), start],
    [0.35, 1]
  );

  return (
    <div className="sticky top-24 sm:top-28">
      <motion.article
        style={{ scale, rotate, y, opacity }}
        className="group relative flex min-h-[60vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-colors duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)] sm:p-10 lg:p-12"
      >
        {/* Halo violet décoratif */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

        <div className="relative flex items-start justify-between gap-6">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-violet/30 bg-violet/15 text-violet-bright shadow-[0_0_30px_-12px_rgba(139,92,246,0.9)]">
            <Icon className="h-8 w-8" strokeWidth={1.6} />
          </span>
          <span className="text-6xl font-extrabold tracking-tight text-violet-bright/30 sm:text-7xl">
            {step.number}
          </span>
        </div>

        <div className="relative mt-auto pt-10">
          <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {step.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {step.description}
          </p>
        </div>

        {/* Liseré de progression en bas de carte */}
        <div className="relative mt-10 h-px w-full bg-white/10">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet to-violet-bright"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </motion.article>
    </div>
  );
}

export function WorkMethod() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
            Notre méthode
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Notre manière de travailler
          </h2>
          <p className="mt-4 text-zinc-400">
            Un processus en quatre étapes, pensé pour livrer vite, bien et dans
            la durée — de la première idée à l'accompagnement continu.
          </p>
        </Reveal>

        {/* Pile de cartes empilées au scroll */}
        <div ref={containerRef} className="relative mt-16">
          <div className="flex flex-col gap-8">
            {STEPS.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                total={STEPS.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
