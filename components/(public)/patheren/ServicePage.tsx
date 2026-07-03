import Image from "next/image";
import {
  PatherenFooter,
  PrimaryButton,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { MeshAurora } from "@/components/(public)/patheren/PremiumArt";
import { icons, Star } from "@/components/(public)/patheren/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { Breadcrumb } from "@/components/(public)/patheren/Breadcrumb";
import { getParentGrandService } from "@/components/(public)/patheren/grandServices";
import type { Offering } from "@/components/(public)/patheren/catalog";
import { ArrowRight, Check } from "lucide-react";

/**
 * ServicePage — conception distincte des pages produits :
 * hero centré + bannière large, deliverables en checklist sombre,
 * approche en timeline verticale, modules en zig-zag alterné,
 * modèles d'engagement. Animé au scroll (Reveal / Stagger).
 */

// Panneaux concrets pour les modules (fini l'abstrait) : dégradé de teinte,
// grille discrète, icône du métier en filigrane et numéro d'étape.
const moduleTones: Record<
  string,
  { bg: string; ink: string; num: string }
> = {
  cream: {
    bg: "bg-gradient-to-br from-[#f4ede2] to-[#eaddca]",
    ink: "text-[var(--primary)]/20",
    num: "text-black/[0.06]",
  },
  mono: {
    bg: "bg-gradient-to-br from-[#171717] to-[#2b2b2b]",
    ink: "text-white/15",
    num: "text-white/10",
  },
  peach: {
    bg: "bg-gradient-to-br from-[#f8e8df] to-[#f2d1c0]",
    ink: "text-[var(--primary)]/20",
    num: "text-black/[0.06]",
  },
  sky: {
    bg: "bg-gradient-to-br from-[#e8f0fa] to-[#d2e1f4]",
    ink: "text-[var(--primary)]/20",
    num: "text-black/[0.06]",
  },
};

const engagements = [
  {
    name: "Projet au forfait",
    desc: "Un périmètre défini, un budget ferme et une date de livraison claire. Idéal pour un besoin cadré du début à la fin.",
    points: [
      "Devis détaillé et transparent",
      "Planning et jalons précis",
      "Livraison clé en main",
    ],
    highlight: false,
    cta: "Demander un devis",
  },
  {
    name: "Équipe dédiée",
    desc: "Une équipe experte mobilisée à vos côtés, au mois, pour construire et faire évoluer votre produit dans la durée.",
    points: [
      "Flexibilité et priorités ajustables",
      "Suivi continu et transparence",
      "Accompagnement long terme",
    ],
    highlight: true,
    cta: "Nous contacter",
  },
];

export function ServicePage({ offering: o }: { offering: Offering }) {
  const parent = getParentGrandService(o.slug);
  const crumbs = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    ...(parent
      ? [{ label: parent.name, href: `/services/${parent.slug}` }]
      : []),
    { label: o.name },
  ];
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ==================== HERO — centré + bannière large ==================== */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-10">
        <Breadcrumb items={crumbs} />

        <Reveal className="mx-auto max-w-3xl px-6 pt-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-1.5 text-xs font-medium text-[#555]">
            <Star className="size-3.5 text-[var(--primary)]" />
            Service : {o.category}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            {o.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            {o.heroDesc}
          </p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <PrimaryButton>Nous contacter</PrimaryButton>
            <button className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
              Voir nos réalisations
            </button>
          </div>
        </Reveal>

        {/* Bannière large N&B + stat + pills */}
        <Reveal delay={0.15} className="mt-10 px-6 sm:px-10">
          <div className="relative h-64 overflow-hidden rounded-3xl sm:h-80">
            {o.image ? (
              <Image
                src={o.image}
                alt={o.name}
                fill
                sizes="(max-width: 1024px) 100vw, 1600px"
                className="object-cover"
                priority
              />
            ) : (
              <MeshAurora variant="aurora" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-3 backdrop-blur">
              <div className="text-2xl font-extrabold text-[var(--primary)]">
                {o.growth.value}
              </div>
              <div className="text-[11px] text-[#8a8a8a]">{o.growth.label}</div>
            </div>
            <div className="absolute right-5 top-5 flex flex-wrap justify-end gap-2">
              {o.features.slice(0, 3).map((f) => (
                <span
                  key={f.title}
                  className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold shadow-sm backdrop-blur"
                >
                  {f.title}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ==================== DELIVERABLES — checklist sombre ==================== */}
      <section className="mt-4 rounded-[28px] bg-[#101010] p-8 text-white sm:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/60">
              Ce qui est inclus
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Tout ce dont vous avez besoin, bien fait
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              {o.featuresIntro}
            </p>
          </Reveal>
          <Stagger className="grid gap-x-8 sm:grid-cols-2">
            {o.features.map((f) => (
              <StaggerItem
                key={f.title}
                className="flex items-start gap-3 border-t border-white/10 py-4"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-white">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-sm font-bold">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ==================== APPROCHE — timeline verticale ==================== */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-[#555]">
              Notre méthode
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Un parcours clair,
              <br />
              de l&apos;idée au lancement
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#9a9a9a]">
              Quatre étapes précises pour savoir à tout moment ce qui arrive
              ensuite.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute bottom-3 left-[17px] top-3 w-px bg-black/10" />
            <Stagger className="space-y-8">
              {o.process.map((step) => (
                <StaggerItem key={step.n} className="relative pl-14">
                  <span className="absolute left-0 top-0 grid size-9 place-items-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-[#9a9a9a]">
                    {step.desc}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ==================== MODULES — zig-zag alterné ==================== */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Ce que nous couvrons
          </h2>
        </Reveal>
        <Stagger className="mt-10 space-y-10">
          {o.modules.map((m, i) => {
            const Icon = icons[o.features[i % o.features.length].icon];
            const tone = moduleTones[m.tone] ?? moduleTones.cream;
            return (
              <StaggerItem
                key={m.title}
                className="grid gap-8 md:grid-cols-2 md:items-center"
              >
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden rounded-2xl ${
                    tone.bg
                  } ${i % 2 ? "md:order-2" : ""}`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-70"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <span
                    className={`absolute left-6 top-3 text-7xl font-extrabold leading-none ${tone.num}`}
                  >
                    0{i + 1}
                  </span>
                  <Icon className={`relative size-24 ${tone.ink}`} strokeWidth={1.25} />
                </div>
                <div className={i % 2 ? "md:order-1" : ""}>
                  <span className="grid size-11 place-items-center rounded-xl bg-[#f2f2f2] text-[var(--primary)]">
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
                    Découvrir
                    <ArrowRight className="size-4 text-[var(--primary)] transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ==================== ENGAGEMENT — 2 modèles ==================== */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Comment nous travaillons ensemble
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#9a9a9a]">
            Deux façons simples de collaborer : choisissez celle qui correspond à
            votre besoin.
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
                        e.highlight ? "bg-white text-[var(--primary)]" : "bg-[#ece4f3] text-[var(--primary)]"
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
