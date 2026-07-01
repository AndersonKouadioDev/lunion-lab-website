"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  Factory,
  HeartPulse,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

interface Sector {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  span: string;
}

const SECTORS: Sector[] = [
  {
    id: "public",
    title: "Secteur Public",
    description:
      "Digitalisation des services administratifs, plateformes citoyennes et outils de gestion pour les institutions.",
    icon: Landmark,
    image: "/assets/images/secteurs/secteur1.png",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "industriel",
    title: "Industriel",
    description: "Supervision d'usines, IoT et automatisation des chaînes de production.",
    icon: Factory,
    image: "/assets/images/secteurs/secteur2.png",
    span: "lg:col-span-2",
  },
  {
    id: "banque",
    title: "Banque & Finance",
    description: "Solutions fintech sécurisées, paiements et tableaux de bord conformes.",
    icon: Banknote,
    image: "/assets/images/secteurs/secteur3.png",
    span: "lg:col-span-1",
  },
  {
    id: "sante",
    title: "Santé",
    description: "Dossiers patients, télémédecine et gestion hospitalière fiable.",
    icon: HeartPulse,
    image: "/assets/images/secteurs/secteur4.png",
    span: "lg:col-span-1",
  },
];

const TECHNOLOGIES = [
  { name: "Next.js", src: "/assets/images/techno/next_logo.jpeg" },
  { name: "Nest.js", src: "/assets/images/techno/nest_logo.jpeg" },
  { name: "React", src: "/assets/images/techno/reactjs.jpeg" },
  { name: "React Native", src: "/assets/images/techno/reactnative.png" },
  { name: "Flutter", src: "/assets/images/techno/flutter.png" },
  { name: "Node.js", src: "/assets/images/techno/node_logo.jpeg" },
  { name: "Tailwind CSS", src: "/assets/images/techno/tailwindcss.jpeg" },
  { name: "Android", src: "/assets/images/techno/android.png" },
  { name: "Apple", src: "/assets/images/techno/apple.svg.png" },
  { name: "Swift", src: "/assets/images/techno/swift.png" },
];

function SectorCard({ sector }: { sector: Sector }) {
  const Icon = sector.icon;
  return (
    <motion.article
      variants={staggerItem}
      className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] transition-colors duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)] ${sector.span}`}
    >
      <Image
        src={sector.image}
        alt={sector.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover opacity-35 transition-all duration-500 group-hover:scale-105 group-hover:opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet/15 blur-3xl transition-opacity duration-300 group-hover:bg-violet/30" />

      <div className="relative z-10 p-6 sm:p-7">
        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-violet/15 text-violet-bright backdrop-blur-sm transition-colors duration-300 group-hover:bg-violet/25">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <h3 className="mt-4 text-lg font-extrabold tracking-tight text-white sm:text-xl">
          {sector.title}
        </h3>
        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-zinc-300">
          {sector.description}
        </p>
      </div>
    </motion.article>
  );
}

export function BentoSectors() {
  return (
    <section id="secteurs" className="relative border-y border-white/5 bg-[#050505] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
            Secteurs d&apos;activité
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Une expertise au service de chaque métier
          </h2>
          <p className="mt-4 text-zinc-400">
            Des solutions sur-mesure adaptées aux enjeux spécifiques de votre
            industrie.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-90px" }}
          className="mt-14 grid auto-rows-[minmax(200px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SECTORS.map((sector) => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
        </motion.div>

        {/* Marquee technologies (vrais logos) */}
        <Reveal delay={0.1} className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Notre stack technologique
          </p>
          <div
            className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
            aria-hidden="true"
          >
            <div className="flex w-max items-center gap-4 animate-marquee">
              {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="relative flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm"
                  title={tech.name}
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    fill
                    sizes="144px"
                    className="object-contain p-3"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
