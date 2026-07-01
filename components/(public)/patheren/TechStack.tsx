"use client";

import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { Star } from "@/components/(public)/patheren/icons";

/**
 * "Our tech stack" — grille de logos + noms (style distinct du marquee).
 * Réutilisée sur la Home et la page About.
 */

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

export function TechStack() {
  return (
    <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#f3eefc] px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
          <Star className="size-3.5" />
          Our tech stack
        </div>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          The modern tools we build with
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
          A battle-tested stack to ship fast, scalable and reliable products.
        </p>
      </Reveal>

      <Stagger className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {TECHNOLOGIES.map((t) => (
          <StaggerItem
            key={t.name}
            className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#fafafa] px-4 py-3 transition hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:bg-white"
          >
            <span className="relative size-8 shrink-0">
              <Image src={t.src} alt={t.name} fill sizes="32px" className="object-contain" />
            </span>
            <span className="text-sm font-semibold text-[#101010]">{t.name}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
