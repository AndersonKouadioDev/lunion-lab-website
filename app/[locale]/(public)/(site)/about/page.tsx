import {
  PatherenFooter,
  Photo,
  ResultsSection,
  FaqSection,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { TeamSection } from "@/components/(public)/patheren/TeamSection";
import { TechStack } from "@/components/(public)/patheren/TechStack";
import {
  Rocket,
  Users,
  Building2,
  Globe,
  Repeat,
  Layers,
  ShieldCheck,
} from "lucide-react";

/**
 * Premium Light — About "Lunion Lab", inspirée de la page About Woogency
 * (hero "trusted partner", Mission 01/02/03, Vision, Strategy sombre, FAQ).
 */

const missionSteps = [
  {
    n: "01",
    title: "Comprendre",
    desc: "Nous partons de votre réalité : nous rencontrons les parties prenantes pour saisir vos besoins, vos contraintes et vos attentes.",
  },
  {
    n: "02",
    title: "Concevoir",
    desc: "Nous transformons cette compréhension en une solution sur-mesure, claire et pensée pour durer.",
  },
  {
    n: "03",
    title: "Accompagner",
    desc: "Nous restons à vos côtés après le lancement, pour former vos équipes et faire grandir votre produit.",
  },
];

const visionItems = [
  { icon: Rocket, title: "Innovation", desc: "Explorer sans cesse de nouvelles approches pour un impact durable." },
  { icon: Users, title: "Excellence", desc: "Dépasser les attentes sur chaque projet, dans le moindre détail." },
  { icon: Building2, title: "Impact social", desc: "Mettre la technologie au service des communautés et des institutions." },
  { icon: Globe, title: "Collaboration", desc: "Avancer main dans la main avec nos clients, en partenaires de confiance." },
];

const strategy = [
  { icon: Repeat, title: "Réaliser vos ambitions", desc: "Transformer vos aspirations en réussites concrètes et mesurables." },
  { icon: Layers, title: "Innover dans votre secteur", desc: "Propulser votre entreprise au sommet de son marché." },
  { icon: ShieldCheck, title: "Façonner l'avenir", desc: "Développer des technologies pensées pour un impact durable." },
];

const faqs = [
  "Qui est Lunion Lab ?",
  "Quels types d'entreprises accompagnez-vous ?",
  "Proposez-vous des formations pour les équipes ?",
  "À qui appartient le code une fois le projet livré ?",
  "Assurez-vous un suivi après le lancement ?",
];

export default function PremiumLightAbout() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ============================ HERO ============================ */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-12">
        <Reveal className="px-6 pt-6 text-center sm:px-10">
          <div className="text-xs font-semibold tracking-widest text-[var(--primary)]">
            À propos
          </div>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Un laboratoire numérique
            <br />
            au service de l&apos;Afrique
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Lunion Lab est une start-up ivoirienne créée en 2024, portée par une
            équipe jeune, passionnée et ambitieuse, motivée par l&apos;innovation
            et l&apos;impact social.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4">
            <Photo tone="office" src="/assets/images/a-propos/bloc1.jpg" alt="Bureaux Lunion Lab" className="h-40 rounded-2xl sm:h-48" />
            <Photo tone="team" src="/assets/images/all-img/team.jpg" alt="Équipe Lunion Lab" className="h-48 rounded-2xl sm:h-56" />
            <Photo tone="meeting" src="/assets/images/a-propos/valeurs.jpg" alt="Nos valeurs" className="h-40 rounded-2xl sm:h-48" />
          </div>
        </Reveal>
      </section>

      {/* ============================ MISSION ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Notre Mission</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
          <Photo tone="meeting" icon="image" src="/assets/images/a-propos/bloc1.jpg" alt="Notre mission chez Lunion Lab" className="h-64 rounded-2xl" />
          <div>
            <p className="text-sm leading-relaxed text-[#9a9a9a]">
              Notre mission est de combler le fossé numérique en Afrique en
              développant des solutions locales, durables et sur-mesure, qui
              répondent aux besoins réels des communautés et des institutions.
            </p>
            <h3 className="mt-5 text-lg font-bold">
              Notre raison d&apos;être
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
              En tant que laboratoire de création numérique, nous concevons des
              plateformes personnalisées pour digitaliser des secteurs clés, du
              public à la santé, de l&apos;éducation à la finance.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-3">
          {missionSteps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="text-4xl font-extrabold text-[var(--primary)]">{s.n}</div>
              <h4 className="mt-3 text-base font-bold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#9a9a9a]">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============================ VISION ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Notre Vision</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
          <p className="max-w-md text-sm leading-relaxed text-[#9a9a9a]">
            Nous croyons en une Afrique qui construit ses propres outils
            numériques. Notre vision : devenir la référence du conseil
            technologique et du produit digital sur le continent.
          </p>
          <Photo tone="team" icon="image" src="/assets/images/a-propos/valeurs.jpg" alt="Nos valeurs" className="h-56 rounded-2xl" />
        </Reveal>

        <Stagger className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {visionItems.map((v) => (
            <StaggerItem key={v.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-[#f2f2f2] text-[var(--primary)]">
                <v.icon className="size-5" />
              </span>
              <h4 className="mt-3 text-sm font-bold">{v.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#9a9a9a]">{v.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===================== ÉQUIPE (V2 DreamTeam adapté) ===================== */}
      <TeamSection />

      {/* ===================== TECH STACK ===================== */}
      <TechStack />

      {/* ============================ STRATEGY (sombre) ============================ */}
      <section className="mt-4 rounded-[28px] bg-[#101010] p-8 text-white sm:p-12">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold leading-tight sm:text-4xl">
            Notre manière
            <br />
            de travailler
          </h2>
        </Reveal>
        <Stagger className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
          {strategy.map((s) => (
            <StaggerItem key={s.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-[var(--primary)]">
                <s.icon className="size-5" />
              </span>
              <h4 className="mt-4 text-base font-bold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===================== RÉSULTATS + FAQ + CTA + FOOTER ===================== */}
      <Reveal>
        <ResultsSection />
      </Reveal>
      <Reveal>
        <FaqSection items={faqs} dark />
      </Reveal>
      <ProjectCta />
      <PatherenFooter />
    </main>
  );
}
