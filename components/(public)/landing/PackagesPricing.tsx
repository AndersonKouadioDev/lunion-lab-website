"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

const PACKAGES = [
  {
    id: "starter",
    name: "STARTER",
    price: "162.000",
    tagline: "Pour lancer votre présence digitale",
    features: [
      "Site vitrine responsive (jusqu'à 5 pages)",
      "Design sur-mesure",
      "Optimisation SEO de base",
      "Hébergement & nom de domaine 1 an",
      "Support par email",
    ],
  },
  {
    id: "business",
    name: "BUSINESS",
    price: "375.000",
    tagline: "Pour les entreprises en croissance",
    popular: true,
    features: [
      "Tout du plan STARTER",
      "Application web sur-mesure",
      "Tableau de bord d'administration",
      "Intégrations API & paiements",
      "SEO avancé & analytics",
      "Support prioritaire 7j/7",
    ],
  },
  {
    id: "corporate",
    name: "CORPORATE",
    price: "597.000",
    tagline: "Pour les besoins à grande échelle",
    features: [
      "Tout du plan BUSINESS",
      "Application web + mobile",
      "Architecture scalable dédiée",
      "Sécurité & conformité renforcées",
      "Accompagnement & formation équipe",
      "Account manager dédié",
    ],
  },
];

export function PackagesPricing() {
  const [active, setActive] = useState("business");
  const current = PACKAGES.find((p) => p.id === active)!;

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
            Tarification
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Choisissez nos packages
          </h2>
          <p className="mt-4 text-zinc-400">
            Des offres claires, sans coûts cachés. Payez pour ce dont vous avez
            besoin.
          </p>
        </Reveal>

        {/* Sélecteur d'onglets */}
        <Reveal className="mx-auto mt-10 flex max-w-md rounded-full border border-white/10 bg-white/5 p-1.5">
          {PACKAGES.map((p) => {
            const isActive = p.id === active;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p.id)}
                className={`relative flex-1 rounded-full px-3 py-2 text-xs font-bold tracking-wide transition-colors duration-300 sm:text-sm ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="pkg-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-violet shadow-[0_0_30px_-8px_rgba(139,92,246,0.9)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {p.name}
              </button>
            );
          })}
        </Reveal>

        {/* Panneau */}
        <div className="mx-auto mt-10 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-[1.3fr_1fr]"
            >
              {/* Fonctionnalités */}
              <div className="bg-[#0A0A0A] p-8 sm:p-10">
                <h3 className="text-xl font-extrabold text-white">
                  Plan {current.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{current.tagline}</p>
                <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                  {current.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-200">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet/20 text-violet-bright">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prix & achat */}
              <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-violet/15 via-[#0A0A0A] to-[#0A0A0A] p-8 sm:p-10">
                {current.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-violet px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Populaire
                  </span>
                )}
                <p className="text-sm text-zinc-400">À partir de</p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white sm:text-5xl">
                    {current.price}
                  </span>
                  <span className="text-sm font-medium text-zinc-400">
                    XOF/mois
                  </span>
                </p>
                <a
                  href="#contact"
                  className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-bright hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
                >
                  Choisir {current.name}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <p className="mt-4 text-xs text-zinc-500">
                  Sans engagement • Devis personnalisé sur demande
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
