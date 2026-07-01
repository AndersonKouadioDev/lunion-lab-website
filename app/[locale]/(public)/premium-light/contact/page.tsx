import { PatherenFooter } from "@/components/(public)/patheren/ui";
import { Reveal } from "@/components/(public)/patheren/motion";
import { Star } from "@/components/(public)/patheren/icons";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Contact - Lunion Lab",
  description: "On démarre ensemble. Contactez notre équipe.",
};

const infos = [
  { icon: Mail, label: "Email", value: "support@lunion-lab.com" },
  { icon: Phone, label: "Téléphone", value: "+225 05 65 50 86 86" },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Angré, Nouveau CHU, Bâtiment Kokoh Mall, Abidjan, Côte d'Ivoire",
  },
];

const socials = [Instagram, Linkedin, Youtube];

const inputCls =
  "w-full rounded-xl border border-black/10 bg-[#f8f8f9] px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white placeholder:text-[#a5a5a5]";

export default function ContactPage() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-3 pb-3 text-[#101010] sm:px-4 sm:pb-4"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* HERO */}
      <section className="overflow-hidden rounded-b-[36px] bg-white p-6 text-center sm:p-12">
        <Reveal className="mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f3eefc] px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
            <Star className="size-3.5" />
            Contact
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl">
            On démarre
            <br />
            ensemble
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Un projet, une idée, une question ? Parlons-en. Notre équipe vous
            répond sous 24 heures.
          </p>
        </Reveal>
      </section>

      {/* FORM + INFOS */}
      <section className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Formulaire */}
        <Reveal className="rounded-[28px] bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Envoyez-nous un message</h2>
          <p className="mt-2 text-sm text-[#9a9a9a]">
            Remplissez le formulaire et nous vous répondons rapidement.
          </p>
          <form className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                  Nom
                </label>
                <input className={inputCls} placeholder="Votre nom complet" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                  Email
                </label>
                <input className={inputCls} type="email" placeholder="vous@exemple.com" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                Sujet
              </label>
              <input className={inputCls} placeholder="L'objet de votre message" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                Message
              </label>
              <textarea
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder="Parlez-nous de votre projet..."
              />
            </div>
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(112,74,155,0.45)] transition hover:bg-[var(--primary-600)]"
            >
              Envoyer le message
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>

        {/* Infos */}
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="rounded-[28px] bg-[var(--primary)] p-6 text-white sm:p-8">
            <h3 className="text-lg font-extrabold">Nos coordonnées</h3>
            <div className="mt-6 space-y-5">
              {infos.map((i) => (
                <div key={i.label} className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15">
                    <i.icon className="size-5" />
                  </span>
                  <div>
                    <div className="text-xs text-white/60">{i.label}</div>
                    <div className="text-sm font-semibold">{i.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
              {socials.map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="grid size-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-[28px] bg-white p-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f3eefc] text-[var(--primary)]">
              <Clock className="size-5" />
            </span>
            <div>
              <div className="text-sm font-bold">Une réponse sous 24 heures</div>
              <div className="text-xs text-[#9a9a9a]">
                Besoin d&apos;un échange immédiat ? Écrivez-nous sur WhatsApp au
                +225 05 65 50 86 86.
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <PatherenFooter />
    </main>
  );
}
