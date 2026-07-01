"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] px-5 py-4 text-left backdrop-blur-sm transition-colors duration-300 hover:border-violet/50">
      <p className="text-2xl font-extrabold text-white sm:text-3xl">{value}</p>
      <p className="mt-0.5 text-xs text-zinc-400 sm:text-sm">{label}</p>
    </div>
  );
}

export function LandingHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Fond abstrait animé */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-violet [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
        <motion.div
          className="absolute -top-32 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-violet/30 blur-[120px] animate-glow-pulse"
          aria-hidden
        />
        <div className="absolute right-[8%] top-1/3 h-64 w-64 rounded-full bg-violet-deep/30 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-px w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm sm:text-sm"
        >
          <span>🚀</span>
          Start-up innovante basée en Côte d&apos;Ivoire
          <span className="h-1 w-1 rounded-full bg-violet-bright" />
          Depuis 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Une grande technologie repose toujours sur des{" "}
          <span className="bg-gradient-to-r from-violet-bright via-violet to-violet-deep bg-clip-text text-transparent">
            relations parfaites
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg"
        >
          Nous concevons des solutions web & mobiles sur-mesure qui accélèrent la
          transformation digitale des entreprises africaines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-bright hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
          >
            Démarrer un projet
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
          >
            <PlayCircle className="h-4 w-4 text-violet-bright" />
            Voir nos réalisations
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          className="mx-auto mt-12 flex max-w-md items-center justify-center gap-4"
        >
          <StatCard value="+10" label="Projets livrés" />
          <StatCard value="+10" label="Projets maison" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-[0_0_90px_-25px_rgba(139,92,246,0.7)]">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/assets/images/produits/moockup.png"
              alt="Aperçu des produits LUNION-LAB"
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
