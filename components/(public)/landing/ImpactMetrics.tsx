"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const METRICS = [
  {
    prefix: "+",
    value: 98,
    suffix: "%",
    label: "Augmentation des conversions d'entreprises",
  },
  {
    prefix: "-",
    value: 10,
    suffix: " M",
    label: "Dépenses moyennes de nos utilisateurs",
  },
  {
    prefix: "+",
    value: 100,
    suffix: "%",
    label: "Efficace dans la croissance des affaires",
  },
];

function Counter({
  prefix,
  value,
  suffix,
}: {
  prefix: string;
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1400;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function ImpactMetrics() {
  return (
    <section className="relative border-y border-white/5 bg-[#050505] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
            Notre impact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Des résultats qui transforment les entreprises
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.1}
              className="group rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-center transition-colors duration-300 hover:border-violet/50"
            >
              <p className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
                <Counter prefix={m.prefix} value={m.value} suffix={m.suffix} />
              </p>
              <p className="mx-auto mt-4 max-w-[14rem] text-sm text-zinc-400">
                {m.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
