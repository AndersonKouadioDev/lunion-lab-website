import {
  PatherenFooter,
  PrimaryButton,
  ProjectCta,
  Photo,
} from "@/components/(public)/patheren/ui";
import { statusLabel, type Offering } from "@/components/(public)/patheren/catalog";
import { icons, Star } from "@/components/(public)/patheren/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { ProcessStack } from "@/components/(public)/patheren/ProcessStack";
import { MeshAurora, premiumArt } from "@/components/(public)/patheren/PremiumArt";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function OfferingPage({ offering: o }: { offering: Offering }) {
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ============================ HERO ============================ */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-12">

        <div className="grid items-center gap-10 px-6 pt-8 sm:px-10 md:grid-cols-2">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-1.5 text-xs font-medium text-[#555]">
                <Star className="size-3.5 text-[var(--primary)]" />
                {o.kind === "product" ? "Produit" : "Service"} · {o.category}
              </span>
              {o.status && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3eefc] px-3 py-1.5 text-xs font-semibold text-[var(--primary)]">
                  <span
                    className={`size-1.5 rounded-full ${
                      o.status === "prod" ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  {statusLabel[o.status]}
                </span>
              )}
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {o.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
              {o.heroDesc}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-6">
              {o.url ? (
                <a
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(112,74,155,0.45)] transition hover:bg-[var(--primary-600)]"
                >
                  Accéder à l&apos;outil
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              ) : (
                <PrimaryButton>Parlons-en</PrimaryButton>
              )}
              <div>
                <div className="text-3xl font-extrabold text-[var(--primary)]">
                  {o.growth.value}
                </div>
                <div className="text-xs text-[#9a9a9a]">{o.growth.label}</div>
              </div>
            </div>
          </Reveal>

          {/* Visuel du produit + tags flottants */}
          <Reveal delay={0.15} className="relative">
            <Photo
              src={o.image}
              alt={o.name}
              tone="team"
              className="h-72 w-full rounded-3xl sm:h-80"
            />
            <Star className="absolute -left-3 -top-3 size-8 text-[var(--primary)]" />
            <div className="absolute inset-0 p-4">
              {o.features.slice(0, 3).map((f, i) => (
                <span
                  key={f.title}
                  className={`absolute rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold shadow-sm backdrop-blur ${
                    i === 0
                      ? "left-4 top-6"
                      : i === 1
                        ? "right-5 top-1/3"
                        : "bottom-6 left-8"
                  }`}
                >
                  {f.title}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== BANDEAU "We → verb → outcome" (Atacama) ==================== */}
      <section className="mt-4">
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StaggerItem className="grid h-36 place-items-center rounded-[28px] bg-white text-3xl font-extrabold sm:h-44">
            {o.band.we}
          </StaggerItem>
          <StaggerItem className="relative h-36 overflow-hidden rounded-[28px] sm:h-44">
            <MeshAurora variant="indigo" />
            <div className="absolute inset-0 grid place-items-center bg-black/25 text-2xl font-extrabold text-white sm:text-3xl">
              {o.band.verb}
            </div>
          </StaggerItem>
          <StaggerItem className="grid h-36 place-items-center rounded-[28px] bg-[var(--primary)] text-white sm:h-44">
            <ArrowRight className="size-12" strokeWidth={2.5} />
          </StaggerItem>
          <StaggerItem className="relative h-36 overflow-hidden rounded-[28px] sm:h-44">
            <MeshAurora variant="dusk" />
            <div className="absolute inset-0 grid place-items-center bg-black/25 text-2xl font-extrabold text-white sm:text-3xl">
              {o.band.outcome}
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      {/* ==================== PROCESS — pile animée au scroll ==================== */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-[#555]">
            Comment nous travaillons
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Voici comment nous propulsons
            <br />
            {o.name} vers de nouveaux sommets
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
            Un parcours clair et éprouvé, de la première idée au lancement, pour
            que vous sachiez toujours ce qui vous attend.
          </p>
        </Reveal>

        <ProcessStack steps={o.process} />

        <div className="mt-6 text-right text-lg font-semibold italic text-[var(--primary)]">
          Prêt à être livré !
        </div>
      </section>

      {/* ==================== FEATURES (grille sombre, creatiwise) ==================== */}
      <section className="mt-4 rounded-[28px] bg-[#101010] p-8 text-white sm:p-12">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/60">
            Ce que nous livrons
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Un impact concret, pas seulement une liste de fonctionnalités
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/50">{o.featuresIntro}</p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {o.features.map((f) => {
            const Icon = icons[f.icon];
            return (
              <StaggerItem
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[var(--primary)] text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{f.desc}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ==================== MODULES (cartes-image, Atacama) ==================== */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Explorez les modules
          </h2>
          <p className="max-w-sm text-sm text-[#9a9a9a]">
            Chaque partie de {o.name} fonctionne seule, et encore mieux ensemble.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {o.modules.map((m, i) => (
            <StaggerItem
              key={m.title}
              className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0">
                {premiumArt[i % premiumArt.length]("h-full w-full")}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <button className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white text-[#101010] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </button>
              <div className="relative">
                <h3 className="text-lg font-extrabold text-white">{m.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/70">{m.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold tracking-wide text-[#101010]">
                  EXPLORER
                  <ArrowRight className="size-3.5 text-[var(--primary)]" />
                </span>
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
