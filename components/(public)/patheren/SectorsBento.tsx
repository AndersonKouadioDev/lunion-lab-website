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

/**
 * Secteurs d'activité en bento — adapté de BentoSectors (V2) au thème clair
 * premium-light. Réutilise les vrais visuels /assets/images/secteurs + le
 * marquee des technologies.
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
    description:
      "Digitalizing administrative services, citizen platforms and management tools for institutions.",
    icon: Landmark,
    image: "/assets/images/secteurs/secteur1.png",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "education",
    title: "Education",
    description: "Learning platforms, school and university management at scale.",
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
    description: "Patient records, telemedicine and reliable hospital management.",
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Sectors we serve
        </p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
          Expertise for every industry
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
          Tailored solutions adapted to the specific challenges of your field.
        </p>
      </Reveal>

      <Stagger className="mt-12 grid auto-rows-[minmax(200px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SECTORS.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem
              key={s.id}
              className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border border-black/5 bg-white transition-transform duration-300 hover:-translate-y-1 ${s.span}`}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/10" />
              <div className="relative z-10 p-6 sm:p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-[#f3eefc] text-[var(--primary)]">
                  <Icon className="size-5" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[#6f6f6f]">
                  {s.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Marquee des technologies (vrais logos) */}
      <Reveal delay={0.1} className="mt-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#a5a5a5]">
          Our tech stack
        </p>
        <div
          className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          aria-hidden="true"
        >
          <div className="flex w-max items-center gap-4 animate-marquee">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="relative flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white p-3 shadow-sm"
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
    </section>
  );
}
