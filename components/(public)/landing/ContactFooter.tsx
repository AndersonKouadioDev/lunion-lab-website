"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal, staggerContainer, staggerItem } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "support@lunion-lab.com",
    href: "mailto:support@lunion-lab.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 0565508686",
    href: "tel:+2250565508686",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Angré Nouveau CHU, Abidjan, Côte d'Ivoire",
    href: "https://maps.google.com/?q=Angré+Nouveau+CHU+Abidjan",
  },
] as const;

const FOOTER_COLUMNS = [
  {
    title: "Solutions",
    links: [
      { label: "Lunion-Booking", href: "#solutions" },
      { label: "Lunion-Educ", href: "#solutions" },
      { label: "Lunion-Secure", href: "#solutions" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Sites web", href: "#pricing" },
      { label: "Applications", href: "#pricing" },
      { label: "Conseil digital", href: "#contact" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos", href: "#" },
      { label: "Portfolio", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "CGU", href: "#" },
    ],
  },
] as const;

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
] as const;

/** Formulaire de contact mock (state local + console.log au submit). */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock : à brancher sur l'API d'envoi réelle.
    console.log("Contact form submit", form);
  };

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition-colors duration-300 focus:border-violet";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label
          htmlFor="contact-name"
          className="text-sm font-medium text-zinc-300"
        >
          Nom
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Votre nom complet"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-zinc-300"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="vous@exemple.com"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Parlez-nous de votre projet…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-bright hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
      >
        Envoyer le message
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

export function ContactFooter() {
  return (
    <>
      {/* ============ SECTION CONTACT ============ */}
      <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
        {/* Grand halo violet en fond */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-bright">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              On démarre ensemble
            </h2>
            <p className="mt-4 text-zinc-400">
              Un projet, une idée, une question ? Parlons-en. Notre équipe vous
              répond sous 24 heures.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
            {/* Formulaire */}
            <Reveal className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-10">
              <ContactForm />
            </Reveal>

            {/* Coordonnées */}
            <Reveal
              delay={0.1}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet/15 via-[#0A0A0A] to-[#0A0A0A] p-6 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-violet/30 blur-3xl" />

              <h3 className="text-xl font-extrabold text-white">
                Nos coordonnées
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Joignez-nous directement, nous sommes à votre écoute.
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-90px" }}
                className="mt-8 grid gap-4"
              >
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <motion.li key={label} variants={staggerItem}>
                    <a
                      href={href}
                      className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-violet/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.85)]"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet-bright transition-colors duration-300 group-hover:bg-violet/25">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                          {label}
                        </span>
                        <span className="mt-0.5 font-semibold text-white">
                          {value}
                        </span>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <a
                href="mailto:support@lunion-lab.com"
                className="group mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-violet-bright transition-colors duration-300 hover:text-white"
              >
                Écrivez-nous maintenant
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {/* Marque */}
            <div className="col-span-2">
              <a
                href="#"
                className="inline-block text-xl font-extrabold tracking-tight text-white"
              >
                LUNION<span className="text-violet-bright">·</span>LAB
              </a>
              <p className="mt-4 max-w-xs text-sm text-zinc-400">
                Studio de transformation digitale. Nous concevons des produits
                web et mobiles sur-mesure pour propulser votre entreprise.
              </p>

              {/* Réseaux sociaux */}
              <div className="mt-6 flex items-center gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:border-violet/50 hover:text-violet-bright hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.85)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:border-violet/50 hover:text-violet-bright hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.85)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Colonnes de liens */}
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 grid gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-zinc-400 transition-colors duration-300 hover:text-violet-bright"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ligne copyright */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-center text-sm text-zinc-500">
              © 2026 LUNION-LAB — Transformation digitale, Côte d'Ivoire.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
