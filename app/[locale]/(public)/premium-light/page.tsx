import Link from "next/link";
import { ArrowRight, ArrowLeft, Plus, Menu } from "lucide-react";

/**
 * Refonte "Premium Light" — reproduction fidèle de la maquette agence "Patheren".
 * Page autonome, thème clair + accent primaire (violet du projet). Aucune dépendance image externe :
 * les mockups produits sont recomposés en CSS pour rester offline-friendly.
 */

const services = [
  {
    n: "01",
    title: "Branding",
    desc: "Create a brand identity so that messages can be conveyed to users or customers as that they can increase brand awareness and also grow.",
    active: true,
  },
  {
    n: "02",
    title: "Social Media",
    desc: "Make your company a social media more proper and also attract the attention of users or customers, and increase trust in a brand.",
  },
  {
    n: "03",
    title: "Motion Graphics",
    desc: "Make animations so that a visual becomes more attractive, and also messages can be conveyed with animation.",
  },
  {
    n: "04",
    title: "Illustration",
    desc: "Create an illustration that can improve the visuals of a design, and a way supporter to attract the attention of users or customers.",
  },
];

const projects = [
  {
    title: "Act+Acre",
    desc: "Skincare brands are companies that specialize in producing and selling products designed to improve the health and appearance of the skin.",
    tone: "cream",
  },
  {
    title: ".US",
    desc: "Carry your tote with you go with our chic and versatile tote bags for every occasion and daily essentials.",
    tone: "sky",
  },
  {
    title: "Cafe Fugaz",
    desc: "Many coffee brands also have a unique identity or personality, which is often reflected in their marketing, campaign, packaging and product design.",
    tone: "peach",
  },
];

const navLinks = ["About Us", "Service", "Our Teams"];

function PrimaryButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(112,74,155,0.45)] transition hover:bg-[var(--primary-600)] ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

/* --- Mockups produits recomposés en CSS --- */
function Pouch({ label, from, to }: { label: string; from: string; to: string }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
    >
      <div className="absolute inset-x-6 top-0 h-3 rounded-b-lg bg-black/10" />
      <span className="rotate-[-90deg] whitespace-nowrap text-2xl font-extrabold tracking-tight text-white/90">
        {label}
      </span>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
    </div>
  );
}

export default function PremiumLightPage() {
  const heading = { fontFamily: "var(--font-figtree)" };

  return (
    <main
      className="mx-auto max-w-[1240px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ============================ HERO (bloc blanc arrondi) ============================ */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-6 sm:px-10">
          <Link href="#" className="flex items-center gap-2 text-lg font-extrabold">
            <span className="grid size-6 place-items-center rounded-md bg-[var(--primary)] text-white">
              <Plus className="size-4" />
            </span>
            patheren
          </Link>
          <div className="hidden items-center gap-9 text-sm font-medium text-[#333] md:flex">
            {navLinks.map((l) => (
              <a key={l} href="#" className="transition hover:text-[var(--primary)]">
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-600)]">
              Contact Us
            </button>
            <button className="grid size-10 place-items-center rounded-full border border-black/10 md:hidden">
              <Menu className="size-5" />
            </button>
          </div>
        </nav>

        {/* Titre + sous-titre */}
        <div className="mx-auto max-w-3xl px-6 pt-8 text-center sm:pt-14">
          <h1
            style={heading}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl"
          >
            Powerful Digital
            <br />
            Branding Agency
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Provide the best service and without vision restrictions, we are
            ready to help your business grow more with attractive and useful
            visuals.
          </p>
        </div>

        {/* Rangée stats + mockup + CTA + carte */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 px-6 sm:grid-cols-4">
          {/* Stats */}
          <div className="rounded-2xl bg-[#f4f4f4] p-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {[
                ["200+", "Project Done"],
                ["20+", "Team Member"],
                ["170+", "Happy Client"],
                ["5+", "Years Exp"],
              ].map(([num, lbl]) => (
                <div key={lbl}>
                  <div style={heading} className="text-2xl font-extrabold">
                    {num}
                  </div>
                  <div className="text-[11px] text-[#9a9a9a]">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup produit (primaire) */}
          <div className="h-full min-h-[120px]">
            <Pouch label="Café Fugaz" from="#9353d3" to="#5a3b7d" />
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center rounded-2xl bg-[#f4f4f4] p-6">
            <PrimaryButton className="w-full justify-center">Know More</PrimaryButton>
          </div>

          {/* Carte bleue */}
          <div className="min-h-[120px] rounded-2xl bg-gradient-to-br from-[#1f4bd8] to-[#0b2a9c]" />
        </div>
      </section>

      {/* ============================ GALERIE (strip) ============================ */}
      <section className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <Pouch label="Radical Toast" from="#e9e2d4" to="#cfc6b4" />
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-white p-5">
          <div className="h-full rounded-xl bg-[radial-gradient(circle_at_50%_40%,#ececec,#f7f7f7)]" />
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-white p-5">
          <div className="grid h-full place-items-center rounded-xl bg-[#f2f2f2] text-xs font-semibold tracking-widest text-[#bdbdbd]">
            Act+Acre
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <Pouch label="Fresh Vibe" from="#9353d3" to="#5a3b7d" />
        </div>
      </section>

      {/* ============================ BANNIÈRE SOMBRE ============================ */}
      <section className="mt-4 overflow-hidden rounded-[28px] bg-[#101010] p-8 text-white sm:p-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <h2 style={heading} className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Provide the best service, with ideas that are out of the box
          </h2>
          <div className="flex flex-col items-start gap-6">
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              At Patheren Agency we&apos;re passionate about customer experience
              and team culture. When you choose to join Patheren Agency you&apos;re
              joining a team that genuinely loves what they do.
            </p>
            <PrimaryButton>Know More</PrimaryButton>
          </div>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 style={heading} className="text-3xl font-extrabold leading-tight sm:text-4xl">
            We offer several
            <br />
            service for you
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#9a9a9a] md:justify-self-end">
            At Patheren Agency we&apos;re passionate about customer experience and
            team culture. When you choose to join Patheren Agency you&apos;re
            joining a team that genuinely loves what they do.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          {/* Visuel */}
          <div className="overflow-hidden rounded-2xl bg-[#f2f2f2]">
            <div className="grid h-full min-h-[340px] grid-cols-2 gap-2 p-2">
              <div className="rounded-xl bg-gradient-to-br from-[#9353d3] to-[#5a3b7d]" />
              <div className="rounded-xl bg-gradient-to-br from-[#2447c9] to-[#0c2185]" />
              <div className="col-span-2 rounded-xl bg-[radial-gradient(circle_at_40%_30%,#ffffff,#e6e6e6)]" />
            </div>
          </div>

          {/* Liste numérotée */}
          <div>
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`flex gap-5 py-6 ${
                  i !== services.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <span
                  style={heading}
                  className={`text-lg font-extrabold ${
                    s.active ? "text-[var(--primary)]" : "text-[#c9c9c9]"
                  }`}
                >
                  {s.n}
                </span>
                <div>
                  <h3
                    style={heading}
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
        </div>
      </section>

      {/* ============================ PROJETS ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 style={heading} className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Our Project
            <br />
            have been done
          </h2>
          <PrimaryButton>Explore More</PrimaryButton>
        </div>

        <div className="mt-10 space-y-4">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="grid items-stretch gap-4 md:grid-cols-[1.4fr_1fr]"
            >
              {/* Visuel projet */}
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
                {p.title === ".US" ? (
                  <div className="grid h-full place-items-center">
                    <div className="grid h-40 w-32 place-items-center rounded-b-3xl rounded-t-lg bg-[#101010] text-4xl font-extrabold text-white">
                      .us
                    </div>
                  </div>
                ) : (
                  <div className="grid h-full grid-cols-2 gap-3">
                    <div className="grid place-items-center rounded-xl bg-white/40 text-sm font-semibold text-[#101010]/50">
                      {p.title}
                    </div>
                    <div className="rounded-xl bg-white/25" />
                  </div>
                )}
              </div>

              {/* Carte texte */}
              <div
                className={`order-2 flex flex-col justify-between rounded-2xl bg-[#f6f6f6] p-7 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div>
                  <h3 style={heading} className="text-2xl font-extrabold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
                    {p.desc}
                  </p>
                </div>
                <a
                  href="#"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#101010]"
                >
                  See Project Detail
                  <ArrowRight className="size-4 text-[var(--primary)] transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ TÉMOIGNAGE ============================ */}
      <section className="mt-4 rounded-[28px] bg-[#101010] p-8 text-white sm:p-14">
        <p
          style={heading}
          className="max-w-3xl text-2xl font-bold leading-snug sm:text-[32px]"
        >
          &quot;I really enjoyed working with you guys, you guys are very
          communicative and quick to do the job. I really can&apos;t wait to work
          with you again!&quot;
        </p>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full bg-gradient-to-br from-[#9353d3] to-[#5a3b7d]" />
            <div>
              <div className="text-sm font-bold">Alexa Christiany</div>
              <div className="text-xs text-white/50">CEO Boss</div>
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

      {/* ============================ CTA ============================ */}
      <section className="mt-4 overflow-hidden rounded-[28px] bg-[var(--primary)] p-10 text-white sm:p-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 style={heading} className="text-3xl font-extrabold sm:text-5xl">
            Have an Awesome
            <br />
            Project?
          </h2>
          <button className="group inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--primary)]">
            Explore More
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="mt-4 rounded-[28px] bg-[#101010] p-10 text-white sm:p-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="#" className="flex items-center gap-2 text-lg font-extrabold">
              <span className="grid size-6 place-items-center rounded-md bg-[var(--primary)] text-white">
                <Plus className="size-4" />
              </span>
              patheren
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Provide the best service and without vision restrictions, we are
              ready to help your business grow more with attractive and useful
              visuals.
            </p>
          </div>
          {[
            ["Home", ["About Us", "Service", "Our Teams", "Contact"]],
            ["Support", ["FAQ", "Privacy Policy", "Term of Service"]],
            ["Social Media", ["Dribbble", "Behance", "Instagram", "Linkedin"]],
          ].map(([title, items]) => (
            <div key={title as string}>
              <h4 className="text-sm font-bold">{title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/50">
                {(items as string[]).map((it) => (
                  <li key={it}>
                    <a href="#" className="transition hover:text-white">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          All rights reserved by Patheren
        </div>
      </footer>
    </main>
  );
}
