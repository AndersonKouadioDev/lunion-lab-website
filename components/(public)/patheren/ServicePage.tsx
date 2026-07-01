import {
  PatherenNav,
  PatherenFooter,
  PrimaryButton,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { icons } from "@/components/(public)/patheren/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import type { Offering } from "@/components/(public)/patheren/catalog";
import { ArrowRight, Check } from "lucide-react";

/**
 * ServicePage — identité visuelle distincte des produits :
 * skin chaud (crème + lilas au lieu de blanc + noir), hero éditorial
 * aligné à gauche avec panneau stat (pas d'image N&B à tags = signature
 * produit), deliverables sur lilas, timeline, zig-zag, engagement.
 */

const CREAM = "#f5ede1";
const LILAC = "#efe9fb";

const moduleTone: Record<string, string> = {
  cream: "linear-gradient(135deg,#efeae0,#cfc6b4)",
  sky: "linear-gradient(135deg,#cfe0ef,#9fb8d2)",
  peach: "linear-gradient(135deg,#e6d6f2,#c3a3e0)",
  mono: "linear-gradient(135deg,#3a3a3a,#101010)",
};

const engagements = [
  {
    name: "Project-based",
    desc: "A fixed scope, a clear timeline and a defined budget. Perfect to launch something new.",
    points: ["Scoped deliverables", "Fixed timeline", "Milestone billing"],
    highlight: false,
    cta: "Start a project",
  },
  {
    name: "Monthly retainer",
    desc: "An ongoing partnership. We become your on-demand team, month after month.",
    points: ["Dedicated hours", "Flexible priorities", "Continuous delivery"],
    highlight: true,
    cta: "Talk to us",
  },
];

export function ServicePage({ offering: o }: { offering: Offering }) {
  return (
    <main
      className="mx-auto max-w-[1240px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ==================== HERO — éditorial, crème ==================== */}
      <section
        className="overflow-hidden rounded-b-[36px] pb-12"
        style={{ background: CREAM }}
      >
        <PatherenNav active="Services" />

        <div className="grid gap-10 px-6 pt-10 sm:px-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
              Our service — {o.category}
            </div>
            <h1 className="mt-4 text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl">
              {o.heroTitle}
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#7c7768] sm:text-base">
              {o.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton>Let&apos;s talk</PrimaryButton>
              <button className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
                View work
              </button>
            </div>
          </Reveal>

          {/* Panneau stat (graphique, pas de photo) */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-[var(--primary)] p-7 text-white">
              <div className="text-6xl font-extrabold leading-none">
                {o.growth.value}
              </div>
              <div className="mt-2 text-sm text-white/70">{o.growth.label}</div>
              <ul className="mt-6 space-y-3 border-t border-white/15 pt-5">
                {o.features.slice(0, 3).map((f) => (
                  <li key={f.title} className="flex items-center gap-2 text-sm">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-white text-[var(--primary)]">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {f.title}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== DELIVERABLES — checklist sur lilas ==================== */}
      <section
        className="mt-4 rounded-[28px] p-8 sm:p-12"
        style={{ background: LILAC }}
      >
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--primary)]">
              What&apos;s included
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Everything you need, done right
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6f6a7d]">
              {o.featuresIntro}
            </p>
          </Reveal>
          <Stagger className="grid gap-x-8 sm:grid-cols-2">
            {o.features.map((f) => (
              <StaggerItem
                key={f.title}
                className="flex items-start gap-3 border-t border-black/10 py-4"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-white">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-sm font-bold">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#6f6a7d]">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ==================== APPROCHE — timeline verticale, crème ==================== */}
      <section
        className="mt-4 rounded-[28px] p-8 sm:p-12"
        style={{ background: CREAM }}
      >
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--primary)]">
              How we work
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              A clear path,
              <br />
              from idea to launch
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#7c7768]">
              Four focused steps so you always know exactly what happens next.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute bottom-3 left-[17px] top-3 w-px bg-black/15" />
            <Stagger className="space-y-8">
              {o.process.map((step) => (
                <StaggerItem key={step.n} className="relative pl-14">
                  <span className="absolute left-0 top-0 grid size-9 place-items-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-[#7c7768]">
                    {step.desc}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE COVER — zig-zag, blanc ==================== */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            What we cover
          </h2>
        </Reveal>
        <Stagger className="mt-10 space-y-10">
          {o.modules.map((m, i) => {
            const Icon = icons[o.features[i % o.features.length].icon];
            return (
              <StaggerItem
                key={m.title}
                className="grid gap-8 md:grid-cols-2 md:items-center"
              >
                <div
                  className={`relative h-56 overflow-hidden rounded-2xl ${
                    i % 2 ? "md:order-2" : ""
                  }`}
                  style={{ background: moduleTone[m.tone] ?? moduleTone.cream }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_55%)]" />
                  <span className="absolute left-5 top-5 text-6xl font-extrabold text-white/25">
                    0{i + 1}
                  </span>
                </div>
                <div className={i % 2 ? "md:order-1" : ""}>
                  <span className="grid size-11 place-items-center rounded-xl bg-[#f3eefc] text-[var(--primary)]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold">{m.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[#9a9a9a]">
                    {m.desc}
                  </p>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Explore feature
                    <ArrowRight className="size-4 text-[var(--primary)] transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ==================== ENGAGEMENT — crème ==================== */}
      <section
        className="mt-4 rounded-[28px] p-8 sm:p-12"
        style={{ background: CREAM }}
      >
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            How we work together
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#7c7768]">
            Two simple ways to engage — pick the one that fits your stage.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
          {engagements.map((e) => (
            <StaggerItem
              key={e.name}
              className={`rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                e.highlight
                  ? "bg-[var(--primary)] text-white"
                  : "border border-black/10 bg-white"
              }`}
            >
              <h3 className="text-xl font-extrabold">{e.name}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  e.highlight ? "text-white/70" : "text-[#9a9a9a]"
                }`}
              >
                {e.desc}
              </p>
              <ul className="mt-5 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <span
                      className={`grid size-5 place-items-center rounded-full ${
                        e.highlight ? "bg-white text-[var(--primary)]" : "bg-[#f3eefc] text-[var(--primary)]"
                      }`}
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                  e.highlight
                    ? "bg-white text-[var(--primary)] hover:bg-white/90"
                    : "bg-[var(--primary)] text-white hover:bg-[var(--primary-600)]"
                }`}
              >
                {e.cta}
                <ArrowRight className="size-4" />
              </button>
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
