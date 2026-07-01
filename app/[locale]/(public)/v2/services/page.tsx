import {
  ArrowRight,
  Cloud,
  Code2,
  Compass,
  LifeBuoy,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/(public)/landing/Reveal";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    id: "web",
    title: "Développement Web",
    description:
      "Applications et plateformes web sur-mesure, performantes et évolutives, taillées pour vos objectifs métier.",
    icon: Code2,
    image: "/assets/images/services/service1.png",
    features: [
      "Sites & applications Next.js",
      "Back-end robustes & APIs",
      "Performances & SEO optimisés",
    ],
  },
  {
    id: "mobile",
    title: "Développement Mobile",
    description:
      "Applications natives et cross-platform fluides, pensées pour offrir une expérience mobile irréprochable.",
    icon: Smartphone,
    image: "/assets/images/services/service2.png",
    features: [
      "Apps iOS & Android",
      "React Native & Flutter",
      "Publication sur les stores",
    ],
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Des interfaces élégantes et intuitives qui placent l'utilisateur au centre et renforcent votre image de marque.",
    icon: Palette,
    image: "/assets/images/services/service3.png",
    features: [
      "Recherche & wireframes",
      "Design systems cohérents",
      "Prototypes interactifs",
    ],
  },
  {
    id: "conseil",
    title: "Conseil & Stratégie",
    description:
      "Un accompagnement stratégique pour structurer votre transformation digitale et faire les bons choix techniques.",
    icon: Compass,
    image: "/assets/images/services/service4.png",
    features: [
      "Audit & cadrage produit",
      "Roadmap technologique",
      "Architecture & gouvernance",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "Infrastructures cloud fiables et pipelines automatisés pour déployer plus vite, en toute sécurité.",
    icon: Cloud,
    image: "/assets/images/services/service5.png",
    features: [
      "CI/CD & automatisation",
      "Conteneurs & orchestration",
      "Monitoring & sécurité",
    ],
  },
  {
    id: "support",
    title: "Maintenance & Support",
    description:
      "Un suivi continu et réactif pour garder vos solutions performantes, sécurisées et toujours à jour.",
    icon: LifeBuoy,
    image: "/assets/images/services/service6.png",
    features: [
      "Maintenance évolutive",
      "Support réactif dédié",
      "Mises à jour & sécurité",
    ],
  },
];

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Conception",
    description:
      "Nous écoutons vos besoins, analysons vos enjeux et définissons ensemble le périmètre du projet.",
  },
  {
    step: "02",
    title: "Stratégie",
    description:
      "Nous élaborons la feuille de route, l'architecture et les choix technologiques adaptés à vos objectifs.",
  },
  {
    step: "03",
    title: "Développement",
    description:
      "Nous construisons votre solution par itérations, avec rigueur, transparence et qualité de code.",
  },
  {
    step: "04",
    title: "Accompagnement",
    description:
      "Nous assurons le déploiement, la formation et un suivi durable pour faire évoluer votre produit.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
        <div className="bg-grid-violet pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Nos expertises
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Nos Services
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              De l&apos;idée au déploiement, nous concevons des solutions
              numériques sur-mesure qui propulsent votre activité. Découvrez la
              palette complète de nos savoir-faire.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRILLE DE SERVICES */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={index * 0.05}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                      <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-violet/15 text-violet-bright backdrop-blur-sm transition-colors duration-300 group-hover:bg-violet/25">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="text-xl font-extrabold tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {service.description}
                      </p>
                      <ul className="mt-5 grid gap-2.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2.5 text-sm text-zinc-300"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-bright" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOTRE PROCESS */}
      <section className="relative border-y border-white/5 bg-[#050505] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Notre process
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Une méthode claire à chaque étape
            </h2>
            <p className="mt-4 text-zinc-400">
              Un processus éprouvé qui transforme votre vision en produit
              concret, en toute sérénité.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-7 transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet/10 blur-3xl transition-opacity duration-300 group-hover:bg-violet/25" />
                  <span className="relative block text-5xl font-extrabold tracking-tight text-violet/30 transition-colors duration-300 group-hover:text-violet/60">
                    {item.step}
                  </span>
                  <h3 className="relative mt-4 text-xl font-extrabold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BANDE CTA */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-violet/30 bg-violet-deep px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-violet/30 blur-[100px]" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Un projet en tête ? Donnons-lui vie.
                </h2>
                <p className="mt-4 text-zinc-300">
                  Parlons de vos ambitions. Notre équipe vous accompagne de la
                  réflexion initiale jusqu&apos;au lancement.
                </p>
                <Link
                  href="/v2/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)] hover:brightness-110"
                >
                  Démarrer un projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
