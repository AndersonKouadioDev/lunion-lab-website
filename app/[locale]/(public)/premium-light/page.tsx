import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  PatherenFooter,
  PrimaryButton,
  Pouch,
  Photo,
  Stars,
  LogoMarquee,
  ResultsSection,
  FaqSection,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { TechStack } from "@/components/(public)/patheren/TechStack";

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

const projects = [
  {
    title: "Turbo Delivery",
    desc: "Service de livraison express qui met en relation coursiers et partenaires, avec suivi en temps réel sur web et mobile.",
    tone: "cream",
    src: "/assets/images/all-img/tubo_system.png",
  },
  {
    title: "Chicken Nation",
    desc: "L'application du fast-food 100% ivoirien : commande, livraison, retrait sur place et programme de fidélité.",
    tone: "sky",
    src: "/assets/images/portolios/chiken.png",
  },
  {
    title: "Ambassade du Tchad",
    desc: "Plateforme consulaire en ligne : prise de rendez-vous, suivi des demandes de visa et informations aux citoyens.",
    tone: "peach",
    src: "/assets/images/portolios/ambassades.png",
  },
];

const industries = [
  "Secteur public", "Industrie", "Banque et finance", "Santé", "Éducation", "Immobilier",
];

const faqs = [
  "Quels services proposez-vous ?",
  "Quels sont vos délais de réalisation ?",
  "Comment se passe l'établissement d'un devis ?",
  "Comment vous contacter ?",
];

export default function PremiumLightPage() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ============================ HERO ============================ */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-10">

        <Reveal className="mx-auto max-w-3xl px-6 pt-8 text-center sm:pt-14">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
            Une grande technologie repose
            <br />
            toujours sur des relations parfaites
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
          <div className="h-full min-h-[120px]">
            <Pouch label="Café Fugaz" from="#9353d3" to="#5a3b7d" />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-[#f4f4f4] p-6">
            <PrimaryButton className="w-full justify-center">Démarrer un projet</PrimaryButton>
          </div>
          <div className="min-h-[120px] rounded-2xl bg-gradient-to-br from-[#1f4bd8] to-[#0b2a9c]" />
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
            <Pouch label="Radical Toast" from="#e9e2d4" to="#cfc6b4" />
          </StaggerItem>
          <StaggerItem className="aspect-[4/3] rounded-2xl bg-white p-5">
            <div className="h-full rounded-xl bg-[radial-gradient(circle_at_50%_40%,#ececec,#f7f7f7)]" />
          </StaggerItem>
          <StaggerItem className="aspect-[4/3] rounded-2xl bg-white p-5">
            <div className="grid h-full place-items-center rounded-xl bg-[#f2f2f2] text-xs font-semibold tracking-widest text-[#bdbdbd]">
              Act+Acre
            </div>
          </StaggerItem>
          <StaggerItem className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Pouch label="Fresh Vibe" from="#9353d3" to="#5a3b7d" />
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
              <div className="rounded-xl bg-gradient-to-br from-[#9353d3] to-[#5a3b7d]" />
              <div className="rounded-xl bg-gradient-to-br from-[#2447c9] to-[#0c2185]" />
              <div className="col-span-2 rounded-xl bg-[radial-gradient(circle_at_40%_30%,#ffffff,#e6e6e6)]" />
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

      {/* ============================ PROJETS ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Nos dernières
              <br />
              réalisations
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {industries.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-medium text-[#8a8a8a]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <PrimaryButton>Voir nos réalisations</PrimaryButton>
        </Reveal>

        <Stagger className="mt-10 space-y-4">
          {projects.map((p, i) => (
            <StaggerItem key={p.title} className="grid items-stretch gap-4 md:grid-cols-[1.4fr_1fr]">
              <div
                className={`order-1 min-h-[240px] overflow-hidden rounded-2xl p-3 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
                style={{
                  background:
                    p.tone === "cream"
                      ? "linear-gradient(135deg,#efeae0,#dcd4c4)"
                      : p.tone === "sky"
                        ? "linear-gradient(135deg,#dfe9f2,#c3d4e6)"
                        : "linear-gradient(135deg,#efe6f6,#d9c7ea)",
                }}
              >
                <Photo
                  src={p.src}
                  alt={p.title}
                  className="h-full min-h-[216px] w-full rounded-xl"
                />
              </div>

              <div
                className={`order-2 flex flex-col justify-between rounded-2xl bg-[#f6f6f6] p-7 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div>
                  <h3 className="text-2xl font-extrabold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">{p.desc}</p>
                </div>
                <a
                  href="#"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#101010]"
                >
                  Voir le projet
                  <ArrowRight className="size-4 text-[var(--primary)] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </StaggerItem>
          ))}
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
