"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal, staggerContainer, staggerItem } from "@/components/(public)/landing/Reveal";
import { groupProject, type Project } from "@/data/projet";

const FALLBACK_IMAGE = "/assets/images/portolios/logo.png";

// Aplatit les listes de projets et ne garde que ceux disposant d'un nom.
const PROJECTS: Project[] = groupProject.flat().filter((project) => Boolean(project.name));

function getCover(project: Project): string {
  const cover = project.imageMain || project.img;
  return cover && cover.trim().length > 0 ? cover : FALLBACK_IMAGE;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] transition-colors duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={getCover(project)}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Badges Web / Mobile */}
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
          {project.isWeb && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-violet/15 px-2.5 py-1 text-xs font-semibold text-violet-bright backdrop-blur-sm">
              <Globe className="h-3.5 w-3.5" strokeWidth={1.8} />
              Web
            </span>
          )}
          {project.isMobile && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-violet/15 px-2.5 py-1 text-xs font-semibold text-violet-bright backdrop-blur-sm">
              <Smartphone className="h-3.5 w-3.5" strokeWidth={1.8} />
              Mobile
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-extrabold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <Link
          href="/v2/portfolio"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-bright transition-colors hover:text-white"
        >
          Voir le projet
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function PortfolioPage() {
  return (
    <>
      {/* PAGE-HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
        <div className="bg-grid-violet pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Nos Réalisations
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Des plateformes web et applications mobiles conçues sur-mesure pour
              des entreprises et institutions ambitieuses. Découvrez les projets
              que nous avons imaginés, développés et déployés.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRILLE PROJETS */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-90px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* BANDE CTA FINALE */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-violet/15 blur-[100px]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Vous avez un projet en tête&nbsp;?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Parlons-en. Notre équipe transforme vos idées en produits
                digitaux performants, du concept au déploiement.
              </p>
              <Link
                href="/v2/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
              >
                Démarrer un projet
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
