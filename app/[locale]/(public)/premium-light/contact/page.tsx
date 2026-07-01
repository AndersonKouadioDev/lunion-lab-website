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
  title: "Contact — Patheren",
  description: "Let's build something together. Get in touch with the team.",
};

const infos = [
  { icon: Mail, label: "Email", value: "hello@patheren.com" },
  { icon: Phone, label: "Phone", value: "+1 890 0872 3847" },
  { icon: MapPin, label: "Studio", value: "34 Logan Str, 12th Lane, LA, USA" },
];

const socials = [Instagram, Linkedin, Youtube];

const inputCls =
  "w-full rounded-xl border border-black/10 bg-[#f8f8f9] px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)] focus:bg-white placeholder:text-[#a5a5a5]";

export default function ContactPage() {
  return (
    <main
      className="mx-auto max-w-[1240px] px-3 pb-3 text-[#101010] sm:px-4 sm:pb-4"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* HERO */}
      <section className="mt-3 overflow-hidden rounded-[28px] bg-white p-6 text-center sm:mt-4 sm:p-12">
        <Reveal className="mx-auto max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f3eefc] px-4 py-1.5 text-xs font-semibold text-[var(--primary)]">
            <Star className="size-3.5" />
            Contact
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl">
            Let&apos;s build something
            <br />
            together
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Tell us about your project. We usually reply within one business day.
          </p>
        </Reveal>
      </section>

      {/* FORM + INFOS */}
      <section className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        {/* Formulaire */}
        <Reveal className="rounded-[28px] bg-white p-6 sm:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Send us a message</h2>
          <p className="mt-2 text-sm text-[#9a9a9a]">
            Fill in the form and we&apos;ll get back to you shortly.
          </p>
          <form className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                  Full name
                </label>
                <input className={inputCls} placeholder="Jane Doe" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                  Email
                </label>
                <input className={inputCls} type="email" placeholder="jane@company.com" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                Subject
              </label>
              <input className={inputCls} placeholder="A new product, a redesign…" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#555]">
                Message
              </label>
              <textarea
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder="Tell us about your project, goals and timeline."
              />
            </div>
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(112,74,155,0.45)] transition hover:bg-[var(--primary-600)]"
            >
              Send message
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>

        {/* Infos */}
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="rounded-[28px] bg-[var(--primary)] p-6 text-white sm:p-8">
            <h3 className="text-lg font-extrabold">Get in touch</h3>
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
              <div className="text-sm font-bold">Fast response</div>
              <div className="text-xs text-[#9a9a9a]">We reply within 24 hours.</div>
            </div>
          </div>
        </Reveal>
      </section>

      <PatherenFooter />
    </main>
  );
}
