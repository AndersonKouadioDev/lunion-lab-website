import {
  ArrowRight,
  Award,
  Handshake,
  HeartHandshake,
  Lightbulb,
  type LucideIcon,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/(public)/landing/Reveal";

interface Value {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const VALUES: Value[] = [
  {
    id: "excellence",
    title: "Excellence",
    description:
      "Nous visons la qualité à chaque ligne de code et chaque pixel, pour des produits fiables et durables.",
    icon: Award,
  },
  {
    id: "proximite",
    title: "Proximité",
    description:
      "Une équipe à l'écoute, ancrée à Abidjan, qui comprend vos enjeux et vous accompagne au quotidien.",
    icon: Handshake,
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Nous explorons les technologies les plus récentes pour offrir des solutions toujours en avance.",
    icon: Lightbulb,
  },
  {
    id: "engagement",
    title: "Engagement",
    description:
      "Vos objectifs deviennent les nôtres : nous nous investissons pleinement jusqu'à la réussite du projet.",
    icon: HeartHandshake,
  },
];

const STATS = [
  { value: "+10", label: "Projets livrés" },
  { value: "2024", label: "Année de création" },
  { value: "44", label: "Langues de support" },
];

export default function AProposPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
        <div className="bg-grid-violet pointer-events-none absolute inset-0 -z-10 opacity-[0.07]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              À propos
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              À propos de LUNION-LAB
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              LUNION-LAB est une start-up de transformation digitale basée à
              Abidjan, en Côte d&apos;Ivoire. Depuis 2024, nous concevons des
              produits numériques sur-mesure — web, mobile et plateformes
              métier — qui accélèrent la croissance des entreprises et des
              institutions africaines.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300">
              <MapPin className="h-4 w-4 text-violet-bright" />
              Abidjan, Côte d&apos;Ivoire — depuis 2024
            </div>
          </Reveal>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
                Notre histoire
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Née d&apos;une ambition : digitaliser l&apos;Afrique
              </h2>
              <div className="mt-6 space-y-4 text-zinc-400">
                <p>
                  Fondée en 2024 à Abidjan, LUNION-LAB est née de la conviction
                  que la technologie doit être un véritable levier de
                  développement pour les entreprises et les institutions du
                  continent.
                </p>
                <p>
                  Réunis autour d&apos;une même passion pour le code et le
                  design, nos ingénieurs et créatifs imaginent des solutions
                  robustes, élégantes et adaptées aux réalités locales — de la
                  gestion immobilière à l&apos;éducation, en passant par les
                  ressources humaines.
                </p>
                <p>
                  Chaque projet est pour nous l&apos;occasion de repousser les
                  limites et de construire, avec nos clients, des outils dont
                  ils sont fiers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]">
                <div className="pointer-events-none absolute -left-10 -top-10 z-10 h-48 w-48 rounded-full bg-violet/25 blur-3xl" />
                <Image
                  src="/assets/images/a-propos/bloc1.jpg"
                  alt="L'équipe LUNION-LAB au travail à Abidjan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="relative border-y border-white/5 bg-[#050505] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Nos valeurs
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ce qui nous fait avancer
            </h2>
            <p className="mt-4 text-zinc-400">
              Quatre principes guident chacune de nos décisions et chaque
              produit que nous livrons.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A]">
                <div className="pointer-events-none absolute -right-10 -top-10 z-10 h-48 w-48 rounded-full bg-violet/25 blur-3xl" />
                <Image
                  src="/assets/images/a-propos/valeurs.jpg"
                  alt="Les valeurs de LUNION-LAB incarnées par son équipe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.id}
                    className="group rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-violet/15 text-violet-bright transition-colors duration-300 group-hover:bg-violet/25">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold tracking-tight text-white">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quelques chiffres */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Quelques chiffres
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              LUNION-LAB en un coup d&apos;œil
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-center transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet/15 blur-3xl transition-opacity duration-300 group-hover:bg-violet/30" />
                  <p className="relative text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="relative mt-3 text-sm font-medium uppercase tracking-[0.15em] text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bande CTA */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-violet/30 bg-gradient-to-br from-violet/15 via-[#0A0A0A] to-[#0A0A0A] p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/30 blur-[100px]" />
              <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Construisons votre prochain projet ensemble
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-zinc-300">
                Vous avez une idée, un besoin ou un défi digital ? Parlons-en.
                Notre équipe vous répond et vous accompagne de A à Z.
              </p>
              <div className="relative mt-8 flex justify-center">
                <Link
                  href="/v2/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.8)] transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
                >
                  Nous contacter
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
