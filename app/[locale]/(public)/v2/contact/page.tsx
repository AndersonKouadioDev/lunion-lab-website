import {
  Clock,
  FileCheck2,
  HandHeart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareReply,
  Phone,
  Sparkles,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/(public)/landing/Reveal";

interface ContactInfo {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  hint: string;
  href: string;
}

const CONTACT_INFOS: ContactInfo[] = [
  {
    id: "email",
    icon: Mail,
    label: "Écrivez-nous",
    value: "support@lunion-lab.com",
    hint: "Réponse sous 24h ouvrées",
    href: "mailto:support@lunion-lab.com",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Appelez-nous",
    value: "+225 0565508686",
    hint: "Du lundi au vendredi",
    href: "tel:+2250565508686",
  },
  {
    id: "address",
    icon: MapPin,
    label: "Rendez-nous visite",
    value: "Angré Nouveau CHU",
    hint: "Abidjan, Côte d'Ivoire",
    href: "https://maps.google.com/?q=Angr%C3%A9+Nouveau+CHU+Abidjan",
  },
];

interface Reason {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const REASONS: Reason[] = [
  {
    id: "devis",
    icon: FileCheck2,
    title: "Un devis gratuit & sans engagement",
    description:
      "Décrivez-nous votre projet : nous vous proposons une estimation claire et détaillée, sans frais cachés.",
  },
  {
    id: "reponse",
    icon: MessageSquareReply,
    title: "Une réponse en moins de 24h",
    description:
      "Notre équipe étudie chaque demande avec attention et revient vers vous rapidement, jours ouvrés.",
  },
  {
    id: "accompagnement",
    icon: HandHeart,
    title: "Un accompagnement de bout en bout",
    description:
      "De l'idée au déploiement, nous restons à vos côtés pour cadrer, concevoir et faire évoluer votre solution.",
  },
  {
    id: "expertise",
    icon: Sparkles,
    title: "Une expertise locale & sur-mesure",
    description:
      "Des produits pensés pour vos métiers et adaptés aux réalités du marché ouest-africain.",
  },
];

interface Schedule {
  day: string;
  hours: string;
}

const SCHEDULES: Schedule[] = [
  { day: "Lundi – Vendredi", hours: "08h00 – 18h00" },
  { day: "Samedi", hours: "09h00 – 13h00" },
  { day: "Dimanche", hours: "Fermé" },
];

interface Social {
  id: string;
  icon: LucideIcon;
  name: string;
  href: string;
}

const SOCIALS: Social[] = [
  {
    id: "instagram",
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/lunionlab",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/lunion-lab",
  },
  {
    id: "youtube",
    icon: Youtube,
    name: "YouTube",
    href: "https://www.youtube.com/@lunionlab",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-violet [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Parlons de votre projet
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Une idée, une question ou un projet à concrétiser ? Notre équipe
              est à votre écoute pour vous accompagner à chaque étape.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRILLE PRINCIPALE : COORDONNÉES / POURQUOI NOUS ÉCRIRE */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Colonne gauche : coordonnées */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Nos coordonnées
                </h2>
                <p className="mt-3 text-zinc-400">
                  Choisissez le canal qui vous convient le mieux, nous vous
                  répondons avec plaisir.
                </p>
              </Reveal>

              <div className="grid gap-4">
                {CONTACT_INFOS.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Reveal key={info.id} delay={index * 0.08}>
                      <a
                        href={info.href}
                        target={info.id === "address" ? "_blank" : undefined}
                        rel={
                          info.id === "address"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A] p-5 transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-violet/15 text-violet-bright transition-colors duration-300 group-hover:bg-violet/25">
                          <Icon className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                            {info.label}
                          </p>
                          <p className="mt-1 truncate text-lg font-bold text-white">
                            {info.value}
                          </p>
                          <p className="mt-0.5 text-sm text-zinc-400">
                            {info.hint}
                          </p>
                        </div>
                      </a>
                    </Reveal>
                  );
                })}
              </div>

              {/* Carte horaires */}
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-violet/15 text-violet-bright">
                      <Clock className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Horaires d&apos;ouverture
                    </h3>
                  </div>
                  <ul className="mt-5 divide-y divide-white/5">
                    {SCHEDULES.map((s) => (
                      <li
                        key={s.day}
                        className="flex items-center justify-between py-3 text-sm"
                      >
                        <span className="text-zinc-300">{s.day}</span>
                        <span
                          className={
                            s.hours === "Fermé"
                              ? "font-medium text-zinc-500"
                              : "font-medium text-white"
                          }
                        >
                          {s.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Colonne droite : pourquoi nous écrire + réseaux */}
            <div className="flex flex-col gap-6">
              <Reveal delay={0.05}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] p-6 sm:p-8">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet/20 blur-3xl" />
                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
                      Pourquoi nous écrire
                    </p>
                    <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                      De bonnes raisons de nous contacter
                    </h2>

                    <ul className="mt-8 grid gap-6">
                      {REASONS.map((reason) => {
                        const Icon = reason.icon;
                        return (
                          <li key={reason.id} className="flex items-start gap-4">
                            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-violet/15 text-violet-bright">
                              <Icon className="h-5 w-5" strokeWidth={1.6} />
                            </span>
                            <div>
                              <h3 className="text-base font-bold text-white">
                                {reason.title}
                              </h3>
                              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                                {reason.description}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Reveal>

              {/* Réseaux sociaux */}
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white">
                    Suivez-nous
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Retrouvez nos actualités, projets et coulisses sur nos
                    réseaux.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {SOCIALS.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-violet/50 hover:bg-violet/15 hover:text-white hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.8)]"
                        >
                          <Icon className="h-4 w-4 text-violet-bright" />
                          {social.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
