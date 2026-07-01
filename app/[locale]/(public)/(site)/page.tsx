import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  PatherenFooter,
  PrimaryButton,
  Photo,
  Stars,
  LogoMarquee,
  ResultsSection,
  FaqSection,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import {
  MeshAurora,
  GlassOrb,
  Rings,
  PrismCluster,
} from "@/components/(public)/patheren/PremiumArt";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { TechStack } from "@/components/(public)/patheren/TechStack";
import { products, statusLabel } from "@/components/(public)/patheren/catalog";
import Link from "next/link";

/**
 * Premium Light — Home "Lunion Lab" (thème clair, accent primaire du projet).
 * Enrichie de sections inspirées de Woogency : marquee clients, chips
 * industries, section résultats data-driven et FAQ.
 */

const services = [
  {
    n: "01",
    title: "Transformation digitale",
    desc: "Nous transformons vos défis en opportunités grâce à des solutions technologiques sur-mesure, pensées pour votre métier.",
    active: true,
  },
  {
    n: "02",
    title: "UI/UX Design",
    desc: "Des interfaces qui séduisent et des parcours qui convertissent, au service de vos utilisateurs comme de vos objectifs.",
  },
  {
    n: "03",
    title: "Branding",
    desc: "Un logo percutant, une identité visuelle forte et un univers cohérent pour marquer durablement les esprits.",
  },
  {
    n: "04",
    title: "Social Media",
    desc: "Nous transformons vos réseaux sociaux en véritables leviers de croissance et de visibilité.",
  },
];

const faqs = [
  "Quels services proposez-vous ?",
  "Quels sont vos délais de réalisation ?",
  "Comment se passe l'établissement d'un devis ?",
  "Comment vous contacter ?",
];

const productTones = [
  "linear-gradient(135deg,#efe6f6,#d9c7ea)",
  "linear-gradient(135deg,#efeae0,#dcd4c4)",
  "linear-gradient(135deg,#dfe9f2,#c3d4e6)",
  "linear-gradient(135deg,#e6def5,#cbb8ea)",
];

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
            <br />
            notre code
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Nous concevons des solutions web et mobiles sur-mesure qui accélèrent
            la transformation digitale des entreprises africaines.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 px-6 sm:grid-cols-4">
          <div className="rounded-2xl bg-[#f4f4f4] p-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {[
                ["+10", "Projets livrés"],
                ["+10", "Produits maison"],
                ["11", "Marques accompagnées"],
                ["2024", "Année de création"],
              ].map(([num, lbl]) => (
                <div key={lbl}>
                  <div className="text-2xl font-extrabold">{num}</div>
                  <div className="text-[11px] text-[#9a9a9a]">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[120px] overflow-hidden rounded-2xl">
            <GlassOrb />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-[#f4f4f4] p-6">
            <PrimaryButton className="w-full justify-center">Démarrer un projet</PrimaryButton>
          </div>
          <div className="min-h-[120px] overflow-hidden rounded-2xl">
            <MeshAurora variant="aurora" />
          </div>
        </Reveal>
      </section>

      {/* ===================== MARQUEE CLIENTS (Woogency) ===================== */}
      <Reveal>
        <LogoMarquee />
      </Reveal>

      {/* ============================ GALERIE ============================ */}
      <section className="mt-4">
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StaggerItem className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Photo src="/assets/images/premium/aurora.jpg" alt="" className="h-full w-full" />
          </StaggerItem>
          <StaggerItem className="aspect-[4/3] overflow-hidden rounded-2xl">
            <MeshAurora variant="violet" />
          </StaggerItem>
          <StaggerItem className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Rings />
          </StaggerItem>
          <StaggerItem className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Photo src="/assets/images/premium/streaks.jpg" alt="" className="h-full w-full" />
          </StaggerItem>
        </Stagger>
      </section>

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

        <Reveal delay={0.1} className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl bg-[#f2f2f2]">
            <div className="grid h-full min-h-[340px] grid-cols-2 gap-2 p-2">
              <div className="overflow-hidden rounded-xl">
                <PrismCluster />
              </div>
              <div className="overflow-hidden rounded-xl">
                <GlassOrb />
              </div>
              <div className="col-span-2 overflow-hidden rounded-xl">
                <Photo src="/assets/images/premium/particles.jpg" alt="" className="h-full min-h-[160px] w-full" />
              </div>
            </div>
          </div>

          <div>
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`flex gap-5 py-6 ${
                  i !== services.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <span
                  className={`text-lg font-extrabold ${
                    s.active ? "text-[var(--primary)]" : "text-[#c9c9c9]"
                  }`}
                >
                  {s.n}
                </span>
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      s.active ? "text-[var(--primary)]" : "text-[#101010]"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-[#9a9a9a]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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

        <Stagger className="mt-10 space-y-4">
          {products.map((p, i) => {
            // Schéma alterné : l'image occupe toujours la grande colonne (2fr).
            // Ligne paire → image à gauche ; ligne impaire → image à droite.
            const imageFirst = i % 2 === 0;

            const image = (
              <div
                key="img"
                className="min-h-[300px] overflow-hidden rounded-2xl p-3"
                style={{ background: productTones[i % productTones.length] }}
              >
                <Photo
                  src={p.image}
                  alt={p.name}
                  className="h-full min-h-[276px] w-full rounded-xl"
                />
              </div>
            );

            const text = (
              <div
                key="txt"
                className="flex flex-col justify-between rounded-2xl bg-[#f6f6f6] p-7"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold tracking-widest text-[var(--primary)]">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold">
                      <span
                        className={`size-1.5 rounded-full ${
                          p.status === "prod" ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                      />
                      {statusLabel[p.status ?? "dev"]}
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-extrabold">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">{p.tagline}</p>
                </div>
                <Link
                  href={`/products/${p.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#101010]"
                >
                  Découvrir
                  <ArrowRight className="size-4 text-[var(--primary)] transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            );

            return (
              <StaggerItem
                key={p.slug}
                className={`grid items-stretch gap-4 ${
                  imageFirst ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-[1fr_2fr]"
                }`}
              >
                {imageFirst ? [image, text] : [text, image]}
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
