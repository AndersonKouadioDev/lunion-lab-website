import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  PatherenFooter,
  PrimaryButton,
  Stars,
  LogoMarquee,
  ResultsSection,
  FaqSection,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { ServicesShowcase } from "@/components/(public)/patheren/ServiceBento";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { TechStack } from "@/components/(public)/patheren/TechStack";
import { MorphingText } from "@/components/magicui/morphing-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magicui/terminal";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Meteors } from "@/components/magicui/meteors";
import { RealisationsShowcase } from "@/components/(public)/patheren/RealisationsShowcase";
import { products } from "@/components/(public)/patheren/catalog";
import Link from "next/link";
import Image from "next/image";

/**
 * Premium Light — Home "Lunion Lab" (thème clair, accent primaire du projet).
 * Enrichie de sections inspirées de Woogency : marquee clients, chips
 * industries, section résultats data-driven et FAQ.
 */

const faqs = [
  "Quels services proposez-vous ?",
  "Quels sont vos délais de réalisation ?",
  "Comment se passe l'établissement d'un devis ?",
  "Comment vous contacter ?",
];

// Bannières marketing par produit (Secu garde sa capture d'écran).
const productBanners: Record<string, string> = {
  "lunion-meet": "/assets/images/produits/banner-meet.png",
  "lunion-booking": "/assets/images/produits/banner-booking.png",
  "lunion-educ": "/assets/images/produits/banner-educ.png",
};

// Mots qui défilent en morphing sur la 2e ligne du titre hero.
const heroWords = [
  "notre code",
  "notre design",
  "notre talent",
  "notre énergie",
  "notre vision",
];

// Logo techno dans une pastille blanche, pour l'orbite « Notre stack ».
function TechIcon({ src }: { src: string }) {
  return (
    <span className="flex size-full items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-black/5">
      <Image src={src} alt="" width={22} height={22} className="size-full rounded-full object-contain" />
    </span>
  );
}

export default function PremiumLightPage() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ============================ HERO ============================ */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-10">

        <Reveal className="mx-auto max-w-4xl px-6 pt-8 text-center sm:pt-14">
          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-8xl">
            Vos idées,
            {/* Ligne 2 animée (morphing) : conservée en sr-only pour le SEO/l'accessibilité */}
            <span className="sr-only"> notre code</span>
          </h1>
          <MorphingText
            texts={heroWords}
            className="mx-auto mt-1 h-[3rem] max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tighter text-[#101010] sm:mt-2 sm:h-[6rem] sm:text-8xl"
          />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Nous concevons des solutions web et mobiles sur-mesure qui accélèrent
            la transformation digitale des entreprises africaines.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-12 grid max-w-4xl grid-cols-2 items-stretch gap-4 px-6 sm:grid-cols-4">
          {/* 1 — Chiffres animés (NumberTicker) */}
          <div className="flex min-h-[200px] items-center rounded-2xl bg-[#f4f4f4] p-6">
            <div className="grid w-full grid-cols-2 gap-x-5 gap-y-6">
              {[
                { v: 10, suffix: "+", lbl: "Projets livrés", plain: false },
                { v: 10, suffix: "+", lbl: "Produits maison", plain: false },
                { v: 11, suffix: "", lbl: "Marques", plain: false },
                { v: 2024, suffix: "", lbl: "Depuis", plain: true },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="flex items-baseline text-2xl font-extrabold tracking-tight text-[#101010]">
                    {s.plain ? (
                      s.v
                    ) : (
                      <NumberTicker value={s.v} className="text-[#101010]" />
                    )}
                    {s.suffix}
                  </div>
                  <div className="mt-1 text-[11px] leading-tight text-[#9a9a9a]">
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2 — Stack en orbite (savoir-faire) */}
          <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-2xl bg-[#0e0b1a]">
            <Meteors number={10} />
            <Image
              src="/assets/images/all-img/footer_symbole.png"
              alt="Lunion Lab"
              width={30}
              height={30}
              className="relative z-10"
            />
            <OrbitingCircles radius={34} iconSize={22} duration={16}>
              <TechIcon src="/assets/images/techno/reactjs.jpeg" />
              <TechIcon src="/assets/images/techno/next_logo.jpeg" />
              <TechIcon src="/assets/images/techno/node_logo.jpeg" />
            </OrbitingCircles>
            <OrbitingCircles radius={64} iconSize={24} duration={26} reverse>
              <TechIcon src="/assets/images/techno/flutter.png" />
              <TechIcon src="/assets/images/techno/python.jpeg" />
              <TechIcon src="/assets/images/techno/tailwindcss.jpeg" />
            </OrbitingCircles>
            <span className="absolute bottom-3 left-3 z-10 text-[10px] font-semibold uppercase tracking-widest text-white/50">
              Notre stack
            </span>
            <BorderBeam size={55} duration={7} colorFrom="#8b5cf6" colorTo="#3b82f6" />
          </div>

          {/* 3 — CTA (blueprint de labo + ShimmerButton) */}
          <div className="relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl bg-[#f4f4f4] p-5">
            <GridPattern
              width={22}
              height={22}
              className="absolute inset-0 h-full w-full fill-[#704a9b]/10 stroke-[#704a9b]/15 [mask-image:radial-gradient(200px_circle_at_50%_40%,white,transparent)]"
            />
            <div className="relative text-sm font-bold leading-tight text-[#101010]">
              Un projet
              <br />
              en tête ?
            </div>
            <ShimmerButton
              background="var(--primary)"
              className="relative w-full px-4 py-2.5 text-sm font-semibold shadow-[0_12px_30px_-10px_rgba(112,74,155,0.6)]"
            >
              Démarrer un projet
            </ShimmerButton>
          </div>

          {/* 4 — Terminal (notre code se déploie) */}
          <div className="relative min-h-[200px] overflow-hidden rounded-2xl">
            <Terminal
              startOnView
              className="h-full max-h-none w-full max-w-none border-white/10 bg-[#0e0b1a]"
            >
              <TypingAnimation className="text-xs text-white/70">
                $ lunion build
              </TypingAnimation>
              <AnimatedSpan delay={1000} className="text-xs text-emerald-400">
                ✔ Compilé sans erreur
              </AnimatedSpan>
              <AnimatedSpan delay={1600} className="text-xs text-emerald-400">
                ✔ 89 pages générées
              </AnimatedSpan>
              <AnimatedSpan delay={2200} className="text-xs text-sky-400">
                → Déploiement en cours…
              </AnimatedSpan>
              <AnimatedSpan delay={2900} className="text-xs text-white/60">
                Prêt en 0.7s ✨
              </AnimatedSpan>
            </Terminal>
            <BorderBeam size={55} duration={7} colorFrom="#3b82f6" colorTo="#8b5cf6" />
          </div>
        </Reveal>
      </section>

      {/* ===================== MARQUEE CLIENTS (Woogency) ===================== */}
      <Reveal>
        <LogoMarquee />
      </Reveal>

      {/* ============================ NOS RÉALISATIONS ============================ */}
      <Reveal>
        <RealisationsShowcase />
      </Reveal>

      {/* ============================ BANNIÈRE SOMBRE ============================ */}
      <section className="mt-4 overflow-hidden rounded-[28px] bg-[#101010] p-8 text-white sm:p-12">
        <Reveal className="grid items-center gap-8 md:grid-cols-2">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Démarrez votre nouveau projet
          </h2>
          <div className="flex flex-col items-start gap-6">
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Une idée à concrétiser, un produit à faire évoluer ? Parlons-en.
              Notre équipe vous accompagne de la conception au lancement, puis
              dans la durée.
            </p>
            <PrimaryButton>Démarrer ici</PrimaryButton>
          </div>
        </Reveal>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Nous proposons plusieurs
            <br />
            services pour vous
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#9a9a9a] md:justify-self-end">
            De la première idée au produit livré, notre équipe experte vous
            accompagne à chaque étape pour concevoir des solutions qui font la
            différence.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ServicesShowcase />
        </Reveal>
      </section>

      {/* ===================== TECH STACK ===================== */}
      <TechStack />

      {/* ============================ NOS PRODUITS ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Nos produits
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[#9a9a9a]">
              Des plateformes conçues et maintenues par Lunion Lab pour
              digitaliser vos métiers.
            </p>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(112,74,155,0.45)] transition hover:bg-[var(--primary-600)]"
          >
            Voir tous les produits
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
          {products.map((p) => {
            const banner = productBanners[p.slug];
            return (
              <StaggerItem key={p.slug} className="h-full">
                <Link
                  href={`/products/${p.slug}`}
                  className="group/card flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)] hover:ring-[color-mix(in_srgb,var(--primary)_35%,transparent)]"
                >
                  {/* Bannière (ou capture d'écran pour Secu) */}
                  {banner ? (
                    <div className="aspect-[5/2] overflow-hidden bg-[#f4f2f8]">
                      <Image
                        src={banner}
                        alt={p.name}
                        width={1500}
                        height={600}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative flex aspect-[5/2] items-center justify-center overflow-hidden"
                      style={{ background: "linear-gradient(120deg,#6d4aa0,#2f1e52)" }}
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.14]"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                          backgroundSize: "22px 22px",
                        }}
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.name}
                        className="relative max-h-[80%] w-auto max-w-[72%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover/card:scale-[1.03]"
                      />
                    </div>
                  )}

                  {/* Titre + petite description + lien */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-extrabold">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#8a8a8a]">
                      {p.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)]">
                      Découvrir
                      <ArrowRight className="size-4 transition-transform group-hover/card:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* ===================== RÉSULTATS DATA-DRIVEN (Woogency) ===================== */}
      <Reveal>
        <ResultsSection />
      </Reveal>

      {/* ============================ TÉMOIGNAGES ============================ */}
      <section className="mt-4 rounded-[28px] bg-[#101010] p-8 text-white sm:p-14">
        <Reveal className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            Ce que disent
            <br />
            nos clients
          </h2>
          <Stars />
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 max-w-3xl text-2xl font-bold leading-snug sm:text-[32px]"
        >
          &quot;Lunion Lab a transformé notre relation client. L&apos;application est
          fiable, élégante et parfaitement adaptée à nos livraisons. Un vrai
          partenaire, disponible à chaque étape.&quot;
        </Reveal>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full bg-gradient-to-br from-[#9353d3] to-[#5a3b7d]" />
            <div>
              <div className="text-sm font-bold">Direction Turbo Delivery</div>
              <div className="text-xs text-white/50">Service de livraison express, Abidjan</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="grid size-11 place-items-center rounded-full border border-white/20 text-white/70 transition hover:bg-white/10">
              <ArrowLeft className="size-4" />
            </button>
            <button className="grid size-11 place-items-center rounded-full bg-[var(--primary)] text-white transition hover:bg-[var(--primary-600)]">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================ FAQ (Woogency) ============================ */}
      <Reveal>
        <FaqSection items={faqs} />
      </Reveal>

      {/* ============================ CTA + FOOTER ============================ */}
      <ProjectCta />
      <PatherenFooter />
    </main>
  );
}
