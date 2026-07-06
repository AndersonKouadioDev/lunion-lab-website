"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { Star } from "@/components/(public)/patheren/icons";

/**
 * "Our tech stack" — grille de logos + noms (style distinct du marquee).
 * Réutilisée sur la Home et la page About.
 */

const TECHNOLOGIES = [
  { name: "Next.js", src: "/assets/images/techno/dc-next.svg" },
  { name: "Nest.js", src: "/assets/images/techno/dc-nest.svg" },
  { name: "React", src: "/assets/images/techno/dc-react.svg" },
  { name: "React Native", src: "/assets/images/techno/dc-react.svg" },
  { name: "Flutter", src: "/assets/images/techno/dc-flutter.svg" },
  { name: "Node.js", src: "/assets/images/techno/dc-node.svg" },
  { name: "Tailwind CSS", src: "/assets/images/techno/dc-tailwind.svg" },
  { name: "Android", src: "/assets/images/techno/dc-android.svg" },
  { name: "Apple", src: "/assets/images/techno/dc-apple.svg" },
  { name: "Swift", src: "/assets/images/techno/dc-swift.svg" },
];

export function TechStack() {
  return (
    <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#f3eefc] px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
          <Star className="size-3.5" />
          Notre stack technique
        </div>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Les technologies que nous maîtrisons
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
          Un stack moderne et éprouvé pour des produits rapides, sécurisés et faciles à faire évoluer.
        </p>
      </Reveal>

      <Stagger className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {TECHNOLOGIES.map((t) => (
          <StaggerItem
            key={t.name}
            className="flex items-center gap-3 rounded-2xl border border-black/5 bg-[#fafafa] px-4 py-3 transition hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:bg-white"
          >
            <img
              src={t.src}
              alt={t.name}
              width={32}
              height={32}
              className="size-8 shrink-0 object-contain"
            />
            <span className="text-sm font-semibold text-[#101010]">{t.name}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
