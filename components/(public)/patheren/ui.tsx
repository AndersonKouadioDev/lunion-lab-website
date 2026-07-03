import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";
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
import { products } from "@/components/(public)/patheren/catalog";

/**
 * Lunion Lab "Premium Light" : briques UI partagées entre Home et About.
 * Thème clair, accent = couleur primaire du projet (var(--primary)).
 * Photos = placeholders CSS (offline-friendly), à remplacer par de vraies images.
 */

const navLinks: [string, string][] = [
  ["Accueil", "/"],
  ["Produits", "/products"],
  ["Services", "/services"],
  ["À propos", "/about"],
  ["Contact", "#"],
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
      href="/"
      className={`flex items-center gap-2 text-lg font-extrabold ${className}`}
    >
      <Image
        src="/assets/images/all-img/footer_symbole.png"
        alt="Lunion Lab"
        width={28}
        height={28}
        className="size-7 object-contain"
      />
      Lunion Lab
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
          Contact
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
  src,
  alt = "",
}: {
  className?: string;
  tone?: string;
  icon?: "users" | "image";
  src?: string;
  alt?: string;
}) {
  // Vraie image si src fourni, sinon placeholder dégradé.
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
      </div>
    );
  }
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

/* --- Marquee clients (noms, composant Marquee Magic UI) --- */
export function LogoMarquee() {
  const clients = [
    "Turbo Delivery",
    "Chicken Nation",
    "Ambassade du Tchad",
    "Fernand Dedeh",
    "Catholikia",
    "Luxury Home Abidjan",
    "Wacanda Store",
    "FC OSA",
    "Brin Service Clean",
  ];
  return (
    <section className="mt-4 overflow-hidden rounded-[28px] bg-white px-8 py-7 sm:px-12">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[#b0b0b0]">
        Ils nous font confiance
      </p>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:32s] [--gap:3.5rem]">
          {clients.map((c) => (
            <span
              key={c}
              className="cursor-default whitespace-nowrap text-lg font-bold tracking-tight text-[#c2c2c2] transition-colors hover:text-[var(--primary)] sm:text-xl"
            >
              {c}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

/* --- Section résultats (données mesurables) --- */
export function ResultsSection() {
  return (
    <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          Des résultats qui <span className="text-[var(--primary)]">transforment</span>
          <br />
          les entreprises
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#9a9a9a]">
          Nous ne livrons pas seulement du code : nous livrons de la valeur
          mesurable. Chaque projet est pensé pour générer un impact concret sur
          votre activité.
        </p>
      </div>

      <Photo
        tone="team"
        src="/assets/images/all-img/team.jpg"
        alt="L'équipe Lunion Lab analyse les résultats d'un projet"
        className="mx-auto mt-8 h-56 max-w-4xl rounded-2xl sm:h-72"
      />

      <div className="mx-auto mt-4 grid max-w-4xl gap-4 md:grid-cols-[1.1fr_1fr_1.1fr_auto] md:items-stretch">
        <div className="rounded-2xl bg-[#f6f6f6] p-5">
          <h4 className="text-sm font-bold">Un impact mesurable</h4>
          <ul className="mt-4 space-y-3 text-xs text-[#9a9a9a]">
            {["Coûts opérationnels réduits de 10 M", "Croissance soutenue de l'activité"].map((t) => (
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
            <span className="text-2xl font-extrabold">+98%</span>
            <TrendingUp className="size-4 text-[var(--primary)]" />
          </div>
          <div className="mt-1 text-xs text-[#9a9a9a]">Augmentation des conversions</div>
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
            Une équipe experte à vos côtés à chaque étape
          </p>
          <Photo tone="office" className="mt-4 h-20 rounded-xl" src="/assets/images/services/branding-alt.jpg" alt="Collaboration avec l'équipe Lunion Lab" />
        </div>

        <div className="flex items-center md:items-end">
          <PrimaryButton>Contact</PrimaryButton>
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
          Questions
          <br />
          fréquentes
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
                  Notre équipe conçoit des solutions sur-mesure. Nous combinons
                  recherche, stratégie et design pour répondre précisément aux
                  besoins de votre projet et de votre activité.
                </p>
              </details>
            ))}
          </div>
          <PrimaryButton className="mt-6">Nous contacter</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* --- CTA projet --- */
export function ProjectCta() {
  return (
    <section className="mt-4 overflow-hidden rounded-[28px] bg-[var(--primary)] p-10 text-white sm:p-14">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <h2 className="text-3xl font-extrabold sm:text-5xl">
          Prêt à donner vie
          <br />
          à votre projet ?
        </h2>
        <button className="group inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--primary)]">
          Prendre un rendez-vous
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
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Logo className="text-white [&_span:last-child]:text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Studio de transformation digitale basé à Abidjan. Nous concevons des
            produits web et mobiles sur-mesure pour propulser les entreprises
            africaines.
          </p>
        </div>

        {/* Produits (depuis le catalogue) */}
        <div>
          <h4 className="text-sm font-bold">Produits</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/50">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="transition hover:text-white"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Entreprise */}
        <div>
          <h4 className="text-sm font-bold">Entreprise</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/50">
            {[
              ["Services", "/services"],
              ["Portfolio", "/portfolio"],
              ["À propos", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Réseaux */}
        <div>
          <h4 className="text-sm font-bold">Réseaux</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/50">
            {[
              ["Instagram", "https://www.instagram.com/lunionlab"],
              ["LinkedIn", "https://www.linkedin.com/company/lunion-lab/?viewAsMember=true"],
              ["Facebook", "https://www.facebook.com/share/1Cqq9P2ktD/?mibextid=wwXIfr"],
              ["TikTok", "https://www.tiktok.com/@lunion.lab"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © 2026 Lunion Lab. Transformation digitale, Abidjan, Côte d&apos;Ivoire. Tous droits réservés.
      </div>
    </footer>
  );
}
