import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Users,
  Image as ImageIcon,
  Award,
  TrendingUp,
} from "lucide-react";

/**
 * Woogency — briques UI partagées (thème violet / vert lime / crème).
 * Photos représentées par des placeholders CSS (offline-friendly),
 * à remplacer par de vraies images ensuite.
 */

export const WOO = {
  purple: "var(--primary)",
  purpleDark: "var(--primary-600)",
  green: "#bff23f",
  greenDark: "#a9df2a",
  cream: "#f5ede1",
  dark: "#121016",
  ink: "#17161d",
};

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 16" fill="none" className={className} aria-hidden>
      <path
        d="M4 10C24 2 36 2 52 10s26 6 42 -2 30 -2 44 4"
        stroke="#bff23f"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} aria-hidden>
      <path d="M6 30c8-6 14-2 20-10M14 36c10-8 18-4 24-14M24 38c8-6 14-4 20-12"
        stroke="#bff23f" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  const base = light ? "text-white" : "text-[#17161d]";
  return (
    <span className={className}>
      <span className={base}>W</span>
      <span className="text-[#bff23f]">oo</span>
      <span className={base}>gency</span>
    </span>
  );
}

export function GreenButton({
  children,
  className = "",
  as = "button",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "span";
}) {
  const Comp = as;
  return (
    <Comp
      className={`group inline-flex items-center gap-2 rounded-full bg-[#bff23f] px-6 py-3 text-sm font-semibold text-[#17161d] transition hover:bg-[#a9df2a] ${className}`}
    >
      {children}
      <span className="grid size-6 place-items-center rounded-full bg-[#17161d] text-[#bff23f]">
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Comp>
  );
}

const toneMap: Record<string, string> = {
  team: "linear-gradient(135deg,#b7c3d6,#8b99b0)",
  office: "linear-gradient(135deg,#9fb0c4,#6f7f98)",
  warm: "linear-gradient(135deg,#e9dcc7,#cbb294)",
  purple: "linear-gradient(135deg,#9353d3,var(--primary))",
  meeting: "linear-gradient(135deg,#c2cad8,#93867f)",
};

export function Photo({
  className = "",
  tone = "team",
  icon = "users",
}: {
  className?: string;
  tone?: keyof typeof toneMap | string;
  icon?: "users" | "image";
}) {
  const Icon = icon === "image" ? ImageIcon : Users;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: toneMap[tone] ?? toneMap.team }}
    >
      <div className="absolute inset-0 grid place-items-center">
        <Icon className="size-10 text-white/30" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
    </div>
  );
}

/* --------------------------- NAVBAR --------------------------- */
export function WooNav() {
  const links = [
    ["HOME", "/woogency"],
    ["ABOUT", "/woogency/about"],
    ["WORK", "#"],
    ["PRICING", "#"],
  ];
  return (
    <nav className="flex items-center justify-between px-6 py-5 sm:px-10">
      <Link href="/woogency" className="flex items-center gap-2">
        <Wordmark className="text-xl font-extrabold tracking-tight" />
        <span className="size-2 rounded-full bg-[#bff23f]" />
      </Link>
      <div className="hidden items-center gap-8 text-xs font-semibold tracking-wide text-white/85 md:flex">
        {links.map(([l, href]) => (
          <Link key={l} href={href} className="transition hover:text-[#bff23f]">
            {l}
          </Link>
        ))}
      </div>
      <GreenButton className="!px-5 !py-2">Contact Us</GreenButton>
    </nav>
  );
}

/* ------------------- SECTION : DATA DRIVEN (crème, partagée) ------------------- */
export function DataDrivenSection() {
  return (
    <section className="bg-[#f5ede1] px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-[#17161d] sm:text-[40px]">
          You gonna get <span className="text-[var(--primary)]">Data driven</span>
          <br />
          growth based output
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-[#6d6a78]">
          Whether you&apos;re launching a website, developing a web application, or
          creating a mobile app, we bring your vision to life with cutting-edge
          technology and a commitment to excellence.
        </p>
      </div>

      <Photo tone="team" className="mx-auto mt-10 h-64 max-w-5xl rounded-3xl sm:h-80" />

      <div className="mx-auto mt-6 grid max-w-5xl gap-4 md:grid-cols-[1.1fr_1fr_1.1fr_auto] md:items-stretch">
        {/* Awards */}
        <div className="rounded-2xl bg-white p-5">
          <h4 className="text-sm font-bold text-[#17161d]">Awards we&apos;ve recieved</h4>
          <ul className="mt-4 space-y-3 text-xs text-[#6d6a78]">
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

        {/* Conversion chart */}
        <div className="rounded-2xl bg-white p-5">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-extrabold text-[#17161d]">47%</span>
            <TrendingUp className="size-4 text-[var(--primary)]" />
          </div>
          <div className="mt-1 text-xs text-[#6d6a78]">Conversion Growth</div>
          <div className="mt-4 flex h-14 items-end gap-1.5">
            {[40, 65, 45, 80, 55, 95, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i % 2 ? "#bff23f" : "var(--primary)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Team purple card */}
        <div className="relative overflow-hidden rounded-2xl bg-[var(--primary)] p-5 text-white">
          <p className="text-sm font-bold leading-snug">
            We&apos;ve got a team with skilled teammembers
          </p>
          <Photo tone="office" className="mt-4 h-20 rounded-xl" />
        </div>

        {/* CTA */}
        <div className="flex items-center md:items-end">
          <GreenButton>Contact Us</GreenButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------- SECTION : CTA (violet, partagée) ------------------- */
export function CtaSection() {
  return (
    <section className="bg-[var(--primary)] px-6 py-14 sm:px-12">
      <div className="mx-auto grid max-w-5xl items-center gap-6 overflow-hidden rounded-3xl bg-[var(--primary-600)] p-6 sm:grid-cols-[1.3fr_1fr] sm:p-8">
        <div>
          <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Have a amazing
            <br />
            project idea in mind?
          </h3>
          <div className="mt-6 flex max-w-sm items-center gap-2 rounded-full bg-white p-1.5">
            <input
              placeholder="Email"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#17161d] outline-none placeholder:text-[#9a97a5]"
            />
            <GreenButton className="!px-4 !py-2 shrink-0">Book a call</GreenButton>
          </div>
        </div>
        <Photo tone="warm" className="h-40 rounded-2xl" />
      </div>
    </section>
  );
}

/* ------------------- FOOTER (noir, partagée) ------------------- */
export function WooFooter() {
  return (
    <footer className="bg-[#121016] px-6 py-10 sm:px-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <Wordmark className="text-4xl font-extrabold tracking-tight sm:text-5xl" />
            <div className="mt-3 flex items-center gap-3 text-[10px] font-semibold tracking-widest text-white/50">
              <span>COMMUNICATION</span>
              <span className="size-1.5 rounded-full bg-[#bff23f]" />
              <span>RESEARCH</span>
              <span className="size-1.5 rounded-full bg-[#bff23f]" />
              <span>IDEATION</span>
            </div>
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="size-2.5 rounded-full bg-[#bff23f]" />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
          <div className="text-xs leading-relaxed text-white/50">
            3rd Floor, 34 Logan, Str
            <br />
            Avenue, 12th Lane, LA, USA
          </div>
          <div className="text-xs text-white/50">
            <div>helloworggency@info.com</div>
            <div className="mt-1">+890 0872 3847</div>
          </div>
          <div className="flex gap-5 text-xs font-semibold tracking-wide text-white/80">
            {["HOME", "WORK", "ABOUT", "PRICING"].map((l) => (
              <a key={l} href="#" className="transition hover:text-[#bff23f]">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export { ArrowUpRight };
