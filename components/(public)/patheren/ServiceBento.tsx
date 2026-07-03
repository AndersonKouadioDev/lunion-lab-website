"use client";

// Section Services — bento coloré style Givingli.
// Transformation digitale : Globe WebGL. UI/UX : maquettes (Marquee).
// Branding : kit d'identité. Social : notifications AnimatedList.
import Link from "next/link";
import { type COBEOptions } from "cobe";
import {
  Heart,
  MessageCircle,
  Repeat2,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Globe } from "@/components/magicui/globe";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Marquee } from "@/components/magicui/marquee";

/* ---------- Visuel 1 : Transformation digitale (Globe WebGL) ---------- */
const GLOBE_TRANSFO: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.25,
  dark: 0,
  diffuse: 1.1,
  mapSamples: 16000,
  mapBrightness: 5,
  baseColor: [0.55, 0.45, 0.78],
  markerColor: [0.44, 0.29, 0.61],
  glowColor: [0.82, 0.74, 0.95],
  markers: [
    { location: [5.36, -4.0083], size: 0.12 }, // Abidjan
    { location: [48.8566, 2.3522], size: 0.06 }, // Paris
    { location: [40.7128, -74.006], size: 0.06 }, // New York
    { location: [6.5244, 3.3792], size: 0.05 }, // Lagos
    { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
    { location: [51.5074, -0.1278], size: 0.05 }, // Londres
  ],
};
function GlobeVisual() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -bottom-32 top-[38%]">
      <Globe config={GLOBE_TRANSFO} />
    </div>
  );
}

/* ---------- Visuel 2 : UI/UX Design (Marquee de maquettes) ---------- */
const shots = [
  "/assets/images/portfolio/luxury.png",
  "/assets/images/portfolio/catholikia.png",
  "/assets/images/portfolio/ambassade.png",
  "/assets/images/portolios/holding.png",
  "/assets/images/portfolio/lha.png",
  "/assets/images/portfolio/osa.png",
  "/assets/images/portolios/fdes.png",
];
const UIUX_PINK = "#f4c6d0";
function ShotCard({ src }: { src: string }) {
  return (
    <div className="w-32 overflow-hidden rounded-xl bg-white p-1 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)] ring-1 ring-black/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden
        className="h-20 w-full rounded-lg object-cover object-top"
      />
    </div>
  );
}
function UiuxVisual() {
  const colA = shots.slice(0, 3);
  const colB = shots.slice(3, 5);
  const colC = shots.slice(5, 7);
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex w-[64%] items-center justify-center overflow-hidden [perspective:700px]">
      <div
        className="flex flex-row gap-3"
        style={{
          transform:
            "translateX(12px) translateZ(-40px) rotateX(8deg) rotateY(-20deg) rotateZ(6deg)",
        }}
      >
        <Marquee vertical className="py-0 [--duration:22s] [--gap:0.75rem]">
          {colA.map((s) => (
            <ShotCard key={s} src={s} />
          ))}
        </Marquee>
        <Marquee vertical reverse className="py-0 [--duration:26s] [--gap:0.75rem]">
          {colB.map((s) => (
            <ShotCard key={s} src={s} />
          ))}
        </Marquee>
        <Marquee vertical className="py-0 [--duration:20s] [--gap:0.75rem]">
          {colC.map((s) => (
            <ShotCard key={s} src={s} />
          ))}
        </Marquee>
      </div>
      {/* fondus vers la couleur de la tuile */}
      <div
        className="absolute inset-x-0 top-0 h-1/3"
        style={{ background: `linear-gradient(to bottom, ${UIUX_PINK}, transparent)` }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{ background: `linear-gradient(to top, ${UIUX_PINK}, transparent)` }}
      />
      <div
        className="absolute inset-y-0 left-0 w-1/4"
        style={{ background: `linear-gradient(to right, ${UIUX_PINK}, transparent)` }}
      />
    </div>
  );
}

/* ---------- Visuel 3 : Branding (kit d'identité) ---------- */
const swatches = ["#6d28d9", "#9353d3", "#a78bfa", "#ece4f3"];
function BrandVisual() {
  return (
    <div className="pointer-events-none absolute -bottom-5 right-4 w-60 rotate-3 rounded-2xl bg-white p-4 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-1">
      <div className="flex items-center gap-2.5">
        <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--primary)] text-lg font-black text-white">
          Aa
        </span>
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="h-2 w-full rounded-full bg-neutral-200" />
          <span className="h-2 w-2/3 rounded-full bg-neutral-200" />
        </div>
      </div>
      <div className="mt-3 flex gap-1.5">
        {swatches.map((col) => (
          <span
            key={col}
            className="h-7 flex-1 rounded-lg ring-1 ring-black/5"
            style={{ background: col }}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Visuel 4 : Social Media (notifications) ---------- */
const baseNotifs = [
  { Icon: Heart, name: "Nouveau like", time: "maintenant", color: "#FF3D71" },
  { Icon: UserPlus, name: "Nouvel abonné", time: "2 min", color: "#8b5cf6" },
  { Icon: MessageCircle, name: "Message reçu", time: "5 min", color: "#1E86FF" },
  { Icon: Repeat2, name: "Publication partagée", time: "8 min", color: "#00C9A7" },
  { Icon: TrendingUp, name: "Portée +18%", time: "12 min", color: "#FFB800" },
];
const notifs = Array.from({ length: 6 }, () => baseNotifs).flat();
function Notif({ Icon, name, time, color }: (typeof baseNotifs)[number]) {
  return (
    <figure className="relative mx-auto flex w-full max-w-[260px] items-center gap-2.5 rounded-xl bg-white p-2 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
      <span
        className="flex size-7 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: color }}
      >
        <Icon className="h-3.5 w-3.5 text-white" />
      </span>
      <span className="flex-1 truncate text-xs font-semibold text-[#101010]">
        {name}
      </span>
      <span className="shrink-0 text-[10px] text-gray-400">{time}</span>
    </figure>
  );
}
function SocialVisual() {
  return (
    <div className="pointer-events-none absolute inset-x-4 -bottom-10 top-32 overflow-hidden [mask-image:linear-gradient(to_top,transparent_16%,#000_55%)]">
      <AnimatedList delay={1600} className="!gap-2">
        {notifs.map((n, i) => (
          <Notif key={i} {...n} />
        ))}
      </AnimatedList>
    </div>
  );
}

const TILES = [
  {
    key: "transfo",
    name: "Transformation digitale",
    desc: "Des solutions technologiques sur-mesure qui transforment vos défis en opportunités.",
    bg: "#cbb8ec",
    title: "#43296e",
    span: "md:col-span-1 md:row-span-2",
    visual: <GlobeVisual />,
  },
  {
    key: "uiux",
    name: "UI/UX Design",
    desc: "Des interfaces qui séduisent et des parcours qui convertissent.",
    bg: "#f4c6d0",
    title: "#9c3c58",
    span: "md:col-span-2",
    visual: <UiuxVisual />,
  },
  {
    key: "branding",
    name: "Branding",
    desc: "Une identité visuelle forte et un univers cohérent.",
    bg: "#f8d6a5",
    title: "#8a5a1f",
    span: "md:col-span-1",
    visual: <BrandVisual />,
  },
  {
    key: "social",
    name: "Social Media",
    desc: "Vos réseaux transformés en leviers de croissance.",
    bg: "#bfd7ef",
    title: "#2f5788",
    span: "md:col-span-1",
    visual: <SocialVisual />,
  },
];

export function ServicesShowcase() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[15rem] md:grid-cols-3">
      {TILES.map((t) => (
        <Link
          key={t.key}
          href="/services"
          className={cn(
            "group relative flex min-h-[15rem] flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_-20px_rgba(0,0,0,0.35)]",
            t.span,
          )}
          style={{ backgroundColor: t.bg }}
        >
          <div className="relative z-10 max-w-[15rem]">
            <h3 className="text-xl font-extrabold" style={{ color: t.title }}>
              {t.name}
            </h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-black/55">
              {t.desc}
            </p>
          </div>
          {t.visual}
        </Link>
      ))}
    </div>
  );
}
