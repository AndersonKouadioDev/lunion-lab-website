"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Pile de cartes empilées au scroll (version claire, inspirée du WorkMethod V2).
 * Chaque carte recule (scale + rotation + remontée) quand la suivante arrive.
 */

type Step = { n: string; title: string; desc: string };

function StepCard({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - index) * 0.04]);
  const rotate = useTransform(progress, [start, 1], [0, index % 2 === 0 ? -2 : 2]);
  const y = useTransform(progress, [start, 1], [0, -(total - index) * 12]);
  const opacity = useTransform(
    progress,
    [Math.max(start - 0.12, 0), start],
    [0.4, 1]
  );

  return (
    <div className="sticky top-24 sm:top-28">
      <motion.article
        style={{ scale, rotate, y, opacity }}
        className="group flex min-h-[52vh] flex-col overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.4)] transition-colors hover:border-[var(--primary)]/40 sm:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[var(--primary)]/10 blur-3xl" />
        <div className="relative flex items-start justify-between gap-6">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[var(--primary)] text-lg font-extrabold text-white">
            {step.n}
          </span>
          <span className="text-6xl font-extrabold tracking-tight text-[var(--primary)]/15 sm:text-7xl">
            {step.n}
          </span>
        </div>
        <div className="relative mt-auto pt-10">
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {step.title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[#8a8a8a]">
            {step.desc}
          </p>
        </div>
        <div className="relative mt-8 h-px w-full bg-black/10">
          <div
            className="absolute inset-y-0 left-0 bg-[var(--primary)]"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </motion.article>
    </div>
  );
}

export function ProcessStack({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className="relative mt-10">
      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <StepCard
            key={step.n}
            step={step}
            index={index}
            total={steps.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
