"use client";

import Image from "next/image";
import {
  Banknote,
  GraduationCap,
  HeartPulse,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { Star } from "@/components/(public)/patheren/icons";

/**
 * Secteurs d'activité en bento — redessiné dans le langage premium-light :
 * images nettes + panneau blanc arrondi (chip icône violet + titre + desc),
 * pas de photo délavée. Réutilise les vrais visuels /assets/images/secteurs.
 */

type Sector = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  span: string;
};

const SECTORS: Sector[] = [
  {
    id: "public",
    title: "Public Sector",
    description: "Administrative services, citizen platforms and management tools.",
    icon: Landmark,
    image: "/assets/images/secteurs/secteur1.png",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "education",
    title: "Education",
    description: "Learning platforms, school & university management at scale.",
    icon: GraduationCap,
    image: "/assets/images/secteurs/secteur2.png",
    span: "lg:col-span-2",
  },
  {
    id: "finance",
    title: "Banking & Finance",
    description: "Secure fintech, payments and compliant dashboards.",
    icon: Banknote,
    image: "/assets/images/secteurs/secteur3.png",
    span: "lg:col-span-1",
  },
  {
    id: "health",
    title: "Healthcare",
    description: "Patient records, telemedicine and hospital management.",
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

export function SectorsBento() {
  return (
    <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#f3eefc] px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
          <Star className="size-3.5" />
          Sectors we serve
        </div>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Expertise for every industry
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
          Tailored solutions adapted to the specific challenges of your field.
        </p>
      </Reveal>

      <Stagger className="mt-12 grid auto-rows-[minmax(210px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SECTORS.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem
              key={s.id}
              className={`group relative overflow-hidden rounded-3xl border border-black/5 bg-[#f4f4f5] transition-transform duration-300 hover:-translate-y-1 ${s.span}`}
            >
              {/* Image nette */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* Panneau info blanc propre */}
              <div className="absolute inset-x-3 bottom-3">
                <div className="rounded-2xl bg-white/95 p-5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f3eefc] text-[var(--primary)]">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg font-extrabold tracking-tight">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#6f6f6f]">
                    {s.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Marquee des technologies */}
      <Reveal delay={0.1} className="mt-14 border-t border-black/5 pt-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#b5b5b5]">
          Our tech stack
        </p>
        <div
          className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          aria-hidden="true"
        >
          <div className="flex w-max items-center gap-3 animate-marquee">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="relative flex h-14 w-32 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-[#fafafa] p-3 grayscale transition hover:grayscale-0"
                title={tech.name}
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  fill
                  sizes="128px"
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
