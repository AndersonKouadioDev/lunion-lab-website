import Link from "next/link";
import {
  ArrowRight,
  Plus,
  Menu,
  Star,
  Users,
  Image as ImageIcon,
  Award,
  TrendingUp,
} from "lucide-react";

/**
 * Patheren "Premium Light" — briques UI partagées entre Home et About.
 * Thème clair, accent = couleur primaire du projet (var(--primary)).
 * Photos = placeholders CSS (offline-friendly), à remplacer par de vraies images.
 */

const navLinks: [string, string][] = [
  ["Home", "/premium-light"],
  ["About Us", "/premium-light/about"],
  ["Service", "#"],
  ["Our Teams", "#"],
];

export function PrimaryButton({
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

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/premium-light"
      className={`flex items-center gap-2 text-lg font-extrabold ${className}`}
    >
      <span className="grid size-6 place-items-center rounded-md bg-[var(--primary)] text-white">
        <Plus className="size-4" />
      </span>
      patheren
    </Link>
  );
}

export function PatherenNav({ active }: { active?: string }) {
  return (
    <nav className="flex items-center justify-between px-6 py-6 sm:px-10">
      <Logo />
      <div className="hidden items-center gap-9 text-sm font-medium text-[#333] md:flex">
        {navLinks.map(([l, href]) => (
          <Link
            key={l}
            href={href}
            className={`transition hover:text-[var(--primary)] ${
              active === l ? "text-[var(--primary)]" : ""
            }`}
          >
            {l}
          </Link>
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
  );
}

/* --- Placeholder photo (dégradé neutre + icône) --- */
const toneMap: Record<string, string> = {
  team: "linear-gradient(135deg,#e2e6ec,#c5ccd8)",
  office: "linear-gradient(135deg,#e8dfd2,#cdbfa8)",
  meeting: "linear-gradient(135deg,#dfe4ea,#c0c8d4)",
  purple: "linear-gradient(135deg,#c9b3e6,#9353d3)",
};

export function Photo({
  className = "",
  tone = "team",
  icon = "users",
}: {
  className?: string;
  tone?: string;
  icon?: "users" | "image";
}) {
  const Icon = icon === "image" ? ImageIcon : Users;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: toneMap[tone] ?? toneMap.team }}
    >
      <div className="absolute inset-0 grid place-items-center">
        <Icon className="size-10 text-white/40" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
    </div>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-4 fill-[var(--primary)] text-[var(--primary)]" />
      ))}
    </div>
  );
}

/* --- Mockup produit (pochette) --- */
export function Pouch({
  label,
  from,
  to,
}: {
  label: string;
  from: string;
  to: string;
}) {
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

/* --- Marquee de logos clients --- */
export function LogoMarquee() {
  const clients = ["MINYTO", "zerod", "VISEROW", "abilon", "Limobuz", "Pixio"];
  return (
    <section className="mt-4 rounded-[28px] bg-white px-8 py-6 sm:px-12">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-lg font-bold text-[#c2c2c2]">
        {clients.map((c) => (
          <span key={c} className="tracking-tight transition hover:text-[var(--primary)]">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

/* --- Section résultats "Data driven" (inspirée Woogency) --- */
export function ResultsSection() {
  return (
    <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          You gonna get <span className="text-[var(--primary)]">Data driven</span>
          <br />
          growth based output
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#9a9a9a]">
          Whether you&apos;re launching a website, developing a web application, or
          creating a mobile app, we bring your vision to life with cutting-edge
          technology and a commitment to excellence.
        </p>
      </div>

      <Photo tone="team" className="mx-auto mt-8 h-56 max-w-4xl rounded-2xl sm:h-72" />

      <div className="mx-auto mt-4 grid max-w-4xl gap-4 md:grid-cols-[1.1fr_1fr_1.1fr_auto] md:items-stretch">
        <div className="rounded-2xl bg-[#f6f6f6] p-5">
          <h4 className="text-sm font-bold">Awards we&apos;ve recieved</h4>
          <ul className="mt-4 space-y-3 text-xs text-[#9a9a9a]">
            {["Best Conversion Asset", "Top Currency Generator"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-[#ece4f3] text-[var(--primary)]">
                  <Award className="size-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-[#f6f6f6] p-5">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-extrabold">47%</span>
            <TrendingUp className="size-4 text-[var(--primary)]" />
          </div>
          <div className="mt-1 text-xs text-[#9a9a9a]">Conversion Growth</div>
          <div className="mt-4 flex h-14 items-end gap-1.5">
            {[40, 65, 45, 80, 55, 95, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, background: i % 2 ? "#c9b3e6" : "var(--primary)" }}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-[var(--primary)] p-5 text-white">
          <p className="text-sm font-bold leading-snug">
            We&apos;ve got a team with skilled teammembers
          </p>
          <Photo tone="office" className="mt-4 h-20 rounded-xl" />
        </div>

        <div className="flex items-center md:items-end">
          <PrimaryButton>Contact Us</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* --- FAQ (accordéon natif, réutilisable) --- */
export function FaqSection({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  const cardBg = dark ? "bg-[var(--primary)] text-white" : "bg-white";
  const line = dark ? "divide-white/15 border-white/15" : "divide-black/10 border-black/10";
  const sub = dark ? "text-white/60" : "text-[#9a9a9a]";
  const chip = dark ? "bg-white/10 text-white" : "bg-[#f2f2f2] text-[var(--primary)]";
  return (
    <section className={`mt-4 rounded-[28px] p-8 sm:p-12 ${cardBg}`}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          Frequently
          <br />
          Asked
          <br />
          Questions
        </h2>
        <div>
          <div className={`divide-y border-y ${line}`}>
            {items.map((q, i) => (
              <details key={q} className="group py-4" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                  {q}
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full transition group-open:rotate-45 ${chip}`}
                  >
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className={`mt-3 max-w-xl text-sm leading-relaxed ${sub}`}>
                  Our team is dedicated to delivering tailored solutions. We
                  combine research, strategy and design to answer this exactly for
                  your project and business goals.
                </p>
              </details>
            ))}
          </div>
          <PrimaryButton className="mt-6">Learn More</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* --- CTA "Have an Awesome Project?" --- */
export function ProjectCta() {
  return (
    <section className="mt-4 overflow-hidden rounded-[28px] bg-[var(--primary)] p-10 text-white sm:p-14">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2 className="text-3xl font-extrabold sm:text-5xl">
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
  );
}

/* --- Footer --- */
export function PatherenFooter() {
  return (
    <footer className="mt-4 rounded-[28px] bg-[#101010] p-10 text-white sm:p-14">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="text-white [&_span:last-child]:text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Provide the best service and without vision restrictions, we are ready
            to help your business grow more with attractive and useful visuals.
          </p>
        </div>
        {[
          ["Home", ["About Us", "Service", "Our Teams", "Contact"]],
          ["Support", ["FAQ", "Privacy Policy", "Term of Service"]],
          ["Social Media", ["Dribbble", "Behance", "Instagram", "Linkedin"]],
        ].map(([title, links]) => (
          <div key={title as string}>
            <h4 className="text-sm font-bold">{title}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/50">
              {(links as string[]).map((it) => (
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
  );
}
