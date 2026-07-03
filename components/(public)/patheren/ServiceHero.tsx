import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { PrimaryButton } from "@/components/(public)/patheren/ui";
import { Breadcrumb, type Crumb } from "@/components/(public)/patheren/Breadcrumb";
import type { GrandService } from "@/components/(public)/patheren/grandServices";

const clientLogos = [
  "/assets/images/all-img/logo_turbo.png",
  "/assets/images/all-img/chiken_logo.png",
  "/assets/images/all-img/osa_logo.png",
  "/assets/images/all-img/clean_logo.png",
];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0c.6 6 3.4 9.4 12 12-8.6 2.6-11.4 6-12 12-.6-6-3.4-9.4-12-12C8.6 9.4 11.4 6 12 0Z" />
    </svg>
  );
}

function SocialProof({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {clientLogos.map((l) => (
          <span
            key={l}
            className={cn(
              "grid size-9 place-items-center overflow-hidden rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] ring-2",
              dark ? "ring-white/20" : "ring-white",
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l} alt="" aria-hidden className="size-6 object-contain" />
          </span>
        ))}
      </div>
      <div>
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className="size-3.5 fill-[var(--primary)] text-[var(--primary)]"
            />
          ))}
        </div>
        <div className={cn("text-xs", dark ? "text-white/70" : "text-[#8a8a8a]")}>
          11 marques nous font confiance
        </div>
      </div>
    </div>
  );
}

function Ctas({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <PrimaryButton>Démarrer un projet</PrimaryButton>
      <Link
        href="/portfolio"
        className={cn(
          "group inline-flex items-center gap-3 rounded-full border py-1.5 pl-6 pr-1.5 text-sm font-semibold transition",
          dark
            ? "border-white/25 text-white hover:border-white"
            : "border-black/15 hover:border-[var(--primary)]",
        )}
      >
        Voir nos réalisations
        <span className="grid size-9 place-items-center rounded-full bg-[var(--primary)] text-white transition-transform group-hover:translate-x-0.5">
          <ArrowRight className="size-4" />
        </span>
      </Link>
    </div>
  );
}

function GlassStat({ s, className }: { s: GrandService; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/90 px-5 py-3.5 shadow-[0_22px_44px_-18px_rgba(0,0,0,0.4)] ring-1 ring-black/5 backdrop-blur-md",
        className,
      )}
    >
      <div className="text-2xl font-extrabold text-[var(--primary)]">
        {s.stat.value}
      </div>
      <div className="text-[11px] leading-tight text-[#8a8a8a]">{s.stat.label}</div>
    </div>
  );
}

function GlassBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_22px_44px_-18px_rgba(0,0,0,0.4)] ring-1 ring-black/5 backdrop-blur-md",
        className,
      )}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600">
        <Check className="size-4" strokeWidth={3} />
      </span>
      <div>
        <div className="text-sm font-extrabold leading-none">Livré et suivi</div>
        <div className="mt-1 text-[11px] text-[#8a8a8a]">de A à Z</div>
      </div>
    </div>
  );
}

/* ============ Variante 1 — Image immersive + panneau verre ============ */
function HeroImmersive({ s, crumbs }: { s: GrandService; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden rounded-b-[36px] bg-[#101010]">
      <Image
        src={s.heroImage}
        alt={s.name}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      <div className="relative min-h-[600px] px-6 pb-12 sm:px-10">
        <Breadcrumb items={crumbs} tone="light" className="pt-6 sm:pt-7" />
        <div className="mt-10 max-w-xl rounded-[28px] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
          <SocialProof dark />
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.03] tracking-tight text-white sm:text-5xl">
            {s.heroTitle}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            {s.heroDesc}
          </p>
          <div className="mt-7">
            <Ctas dark />
          </div>
        </div>
      </div>
      <GlassStat s={s} className="absolute right-8 top-28 hidden lg:block" />
      <GlassBadge className="absolute bottom-16 right-14 hidden lg:flex" />
    </section>
  );
}

/* ============ Variante 2 — Hero centré + bande image ============ */
function HeroCentered({ s, crumbs }: { s: GrandService; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden rounded-b-[36px] bg-white pb-10">
      <GridPattern
        width={40}
        height={40}
        className="absolute inset-0 [mask-image:radial-gradient(680px_circle_at_50%_-10%,white,transparent)]"
        style={{
          fill: "color-mix(in srgb, var(--primary) 4%, transparent)",
          stroke: "color-mix(in srgb, var(--primary) 8%, transparent)",
        }}
      />
      <div className="relative">
        <Breadcrumb items={crumbs} />
        <div className="mx-auto max-w-3xl px-6 pt-8 text-center">
          <div className="flex justify-center">
            <SocialProof />
          </div>
          <h1 className="relative mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            {s.heroTitle}
            <Sparkle className="absolute -right-4 -top-6 hidden size-8 text-[var(--primary)] sm:block" />
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            {s.heroDesc}
          </p>
          <div className="mt-8 flex justify-center">
            <Ctas />
          </div>
        </div>

        <div className="mt-12 px-6 sm:px-10">
          <div className="relative h-72 overflow-hidden rounded-3xl bg-[#101010] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] ring-1 ring-black/10 sm:h-96">
            <Image
              src={s.heroImage}
              alt={s.name}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <GlassStat s={s} className="absolute bottom-5 left-5" />
            <GlassBadge className="absolute bottom-5 right-5 hidden sm:flex" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Variante 3 — Bento hero ============ */
function HeroBento({ s, crumbs }: { s: GrandService; crumbs: Crumb[] }) {
  return (
    <section className="rounded-b-[36px] bg-white px-6 pb-10 pt-6 sm:px-10">
      <Breadcrumb items={crumbs} className="pb-2" />
      <div className="grid gap-4 md:auto-rows-[13.5rem] md:grid-cols-3">
        {/* Titre */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#f7f6fb] p-7 md:col-span-2 md:row-span-2">
          <div>
            <SocialProof />
            <h1 className="relative mt-5 text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl">
              {s.heroTitle}
              <Sparkle className="absolute -right-1 -top-6 hidden size-8 text-[var(--primary)] lg:block" />
            </h1>
          </div>
          <div className="mt-5">
            <p className="max-w-md text-sm leading-relaxed text-[#8a8a8a]">
              {s.heroDesc}
            </p>
            <div className="mt-5">
              <Ctas />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl bg-[#101010] md:col-span-1 md:row-span-3">
          <Image
            src={s.heroImage}
            alt={s.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#101010] backdrop-blur">
            {s.category}
          </span>
        </div>

        {/* Stat */}
        <div className="flex flex-col justify-center rounded-3xl bg-[var(--primary)] p-7 text-white md:col-span-1">
          <div className="text-4xl font-extrabold">{s.stat.value}</div>
          <div className="mt-1 text-sm text-white/70">{s.stat.label}</div>
        </div>

        {/* Garantie */}
        <div className="flex items-center gap-3 rounded-3xl bg-[#101010] p-7 text-white md:col-span-1">
          <span className="grid size-11 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <Check className="size-5" strokeWidth={3} />
          </span>
          <div>
            <div className="text-base font-extrabold">Livré et suivi</div>
            <div className="text-xs text-white/60">de A à Z, avec support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceHero({
  service: s,
  variant = 1,
}: {
  service: GrandService;
  variant?: 1 | 2 | 3;
}) {
  const crumbs: Crumb[] = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: s.name },
  ];
  if (variant === 2) return <HeroCentered s={s} crumbs={crumbs} />;
  if (variant === 3) return <HeroBento s={s} crumbs={crumbs} />;
  return <HeroImmersive s={s} crumbs={crumbs} />;
}
