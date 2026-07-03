import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Camera,
  Check,
  Cloud,
  Code2,
  Globe,
  Layers,
  LayoutGrid,
  MessageCircle,
  Megaphone,
  PenTool,
  Palette,
  Plug,
  Printer,
  Search,
  Smartphone,
  Sparkles,
  TrendingUp,
  Type,
  Users,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PatherenFooter,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { ServiceHero } from "@/components/(public)/patheren/ServiceHero";
import type { GrandService } from "@/components/(public)/patheren/grandServices";

const ICONS: Record<string, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  code: Code2,
  plug: Plug,
  cloud: Cloud,
  layers: Layers,
  grid: LayoutGrid,
  penTool: PenTool,
  palette: Palette,
  type: Type,
  printer: Printer,
  wand: Wand2,
  search: Search,
  camera: Camera,
  calendar: Calendar,
  sparkles: Sparkles,
  users: Users,
  message: MessageCircle,
  megaphone: Megaphone,
  trending: TrendingUp,
};

export function GrandServicePage({ service: s }: { service: GrandService }) {
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ==================== HERO — immersif (verre) ==================== */}
      <ServiceHero service={s} variant={1} />

      {/* ==================== SOUS-SERVICES — grille sombre ==================== */}
      <section className="mt-4 rounded-[28px] bg-[#101010] p-8 text-white sm:p-12">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/60">
            Ce qu&apos;on couvre
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            {s.subServices.length} expertises, un seul interlocuteur
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/50">{s.subIntro}</p>
        </Reveal>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.subServices.map((sub) => {
            const Icon = ICONS[sub.icon] ?? Sparkles;
            // Sous-service avec page → sa page ; sinon → la page du grand service.
            const href = sub.href?.startsWith("/services/")
              ? sub.href
              : `/services/${s.slug}`;
            return (
              <StaggerItem key={sub.title} className="h-full">
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-[var(--primary)]/50 hover:bg-white/[0.06]"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-white transition group-hover:bg-[var(--primary)]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{sub.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/50">
                    {sub.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80">
                    En savoir plus
                    <ArrowUpRight className="size-4 text-[var(--primary)] transition-transform group-hover:rotate-45" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ==================== MÉTHODE — cartes post-it inclinées ==================== */}
      <section className="mt-4 overflow-hidden rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-[#555]">
            Comment on travaille
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            On vous montre comment on
            <br className="hidden sm:block" /> fait grandir votre produit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
            Quatre étapes claires, épinglées au mur, pour savoir à tout moment ce
            qui arrive ensuite.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-10 top-16 hidden border-t-2 border-dashed border-black/10 lg:block" />
          {s.process.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.08}
              className={cn("relative", i % 2 === 1 ? "lg:mt-16" : "")}
            >
              <div
                className={cn(
                  "relative rounded-3xl bg-[#f7f6fb] p-6 ring-1 ring-black/[0.06] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 [box-shadow:0_24px_48px_-28px_rgba(0,0,0,0.4)]",
                  i % 2 === 0 ? "-rotate-2" : "rotate-2",
                )}
              >
                <span className="absolute -top-2.5 left-1/2 size-4 -translate-x-1/2 rounded-full bg-[#101010] ring-4 ring-white" />
                <span className="text-sm font-black text-[var(--primary)]">
                  {step.n}
                </span>
                <h3 className="mt-2 text-lg font-extrabold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#9a9a9a]">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center sm:text-right">
          <span className="inline-block -rotate-3 text-xl font-semibold italic text-[var(--primary)]">
            Prêt à être livré !
          </span>
        </div>
      </section>

      {/* ==================== GARANTIES — grille claire ==================== */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-[#555]">
            Ce qui est inclus
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Un produit solide, à chaque fois
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
            {s.featuresIntro}
          </p>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.features.map((f) => (
            <StaggerItem
              key={f.title}
              className="flex items-start gap-3 rounded-2xl bg-[#f7f6fb] p-5"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-white">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <div>
                <h3 className="text-sm font-bold">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#9a9a9a]">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ==================== CTA + FOOTER ==================== */}
      <ProjectCta />
      <PatherenFooter />
    </main>
  );
}
