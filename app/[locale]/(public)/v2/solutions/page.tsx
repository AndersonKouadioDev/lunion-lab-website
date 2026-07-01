import { Building2, Check, GraduationCap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/(public)/landing/Reveal";

type Solution = {
  id: string;
  name: string;
  domain: string;
  icon: typeof Building2;
  image: string;
  mockup?: string;
  description: string;
  features: string[];
};

const SOLUTIONS: Solution[] = [
  {
    id: "booking",
    name: "Lunion-Booking",
    domain: "Gestion immobilière",
    icon: Building2,
    image: "/assets/images/solution/lunion_booking.jpg",
    description:
      "Plateforme complète de gestion locative et immobilière. Pilotez vos réservations, vos baux, vos paiements et le suivi de vos biens depuis un tableau de bord unique, en temps réel.",
    features: [
      "Gestion centralisée des biens & des locataires",
      "Réservations et états des lieux digitalisés",
      "Paiements de loyers automatisés & relances",
      "Tableau de bord propriétaire en temps réel",
      "Notifications & rappels intelligents",
    ],
  },
  {
    id: "educ",
    name: "Lunion-Educ",
    domain: "Gestion éducative",
    icon: GraduationCap,
    image: "/assets/images/solution/solution_educ.png",
    mockup: "/assets/images/produits/mockup_educ.png",
    description:
      "Système de gestion scolaire et universitaire de bout en bout. Simplifiez les inscriptions, les notes, les emplois du temps et fluidifiez la communication entre écoles, enseignants et parents.",
    features: [
      "Inscriptions & dossiers élèves dématérialisés",
      "Bulletins & saisie des notes en ligne",
      "Emplois du temps dynamiques",
      "Espace parents & enseignants connecté",
      "Suivi de la scolarité et des paiements",
    ],
  },
  {
    id: "secure",
    name: "Lunion-Secure",
    domain: "RH & sécurité",
    icon: ShieldCheck,
    image: "/assets/images/solution/lunion_secu.png",
    mockup: "/assets/images/produits/mockup_secu.png",
    description:
      "Solution RH et sécurité tout-en-un. Gérez vos employés, leurs congés, la paie et le contrôle d'accès dans un environnement chiffré, pour des équipes sereines et conformes.",
    features: [
      "Gestion des employés, contrats & documents",
      "Congés, absences & suivi des présences",
      "Paie & bulletins sécurisés",
      "Contrôle d'accès & gestion des permissions",
      "Conformité et traçabilité des données",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
        <div className="bg-grid-violet pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Nos solutions
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Des produits pensés pour vos métiers
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Trois plateformes robustes, conçues pour digitaliser et accélérer
              vos opérations. De l&apos;immobilier à l&apos;éducation jusqu&apos;aux
              ressources humaines, chaque solution s&apos;adapte à vos besoins.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Blocs alternés */}
      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:gap-28 sm:px-6">
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            const reversed = index % 2 === 1;

            return (
              <Reveal
                key={solution.id}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet/15 via-black to-black ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 z-10 h-48 w-48 rounded-full bg-violet/30 blur-3xl" />
                  <Image
                    src={solution.image}
                    alt={`Aperçu de la solution ${solution.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {solution.mockup && (
                    <div className="absolute bottom-4 right-4 z-20 h-28 w-28 overflow-hidden rounded-xl border border-white/15 bg-black/60 shadow-[0_0_40px_-5px_rgba(139,92,246,0.6)] backdrop-blur sm:h-36 sm:w-36">
                      <Image
                        src={solution.mockup}
                        alt={`Maquette de ${solution.name}`}
                        fill
                        sizes="160px"
                        className="object-contain p-2"
                      />
                    </div>
                  )}
                </div>

                {/* Texte */}
                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-medium text-violet-bright">
                    <Icon className="h-4 w-4" />
                    {solution.domain}
                  </div>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {solution.name}
                  </h2>
                  <p className="mt-4 max-w-md text-zinc-400">
                    {solution.description}
                  </p>

                  <ul className="mt-6 grid gap-3">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-zinc-200"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet/20 text-violet-bright">
                          <Check className="h-3 w-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/v2/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
                  >
                    Demander une démo
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Bande CTA */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Besoin spécifique
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Une solution sur-mesure&nbsp;?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Nos solutions ne couvrent pas exactement votre cas&nbsp;? Nous
              concevons et développons des plateformes entièrement adaptées à vos
              processus métier. Parlons de votre projet.
            </p>
            <Link
              href="/v2/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
            >
              Discuter de mon projet
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
