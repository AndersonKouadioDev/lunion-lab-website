import {
  WooNav,
  WooFooter,
  DataDrivenSection,
  CtaSection,
  GreenButton,
  Wordmark,
  Squiggle,
  Scribble,
  Photo,
} from "@/components/(public)/woogency/woo-ui";
import { PenTool, Code2, Sparkles, Star, ArrowUpRight } from "lucide-react";

const clients = ["MINYTO", "zerod", "VISEROW", "abilon", "Limobuz", "Pixio"];

const services = [
  {
    icon: PenTool,
    title: "UIUX Design",
    desc: "With a mobile-first approach, we ensure that your design is accessible and enjoyable across a variety of devices, adapting seamlessly to different screen sizes.",
    media: "image",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Our team of experienced developers is well-versed in the latest technologies and industry best practices including Big-tique testing and quality assurance processes.",
    media: "button",
  },
  {
    icon: Sparkles,
    title: "Branding",
    desc: "We go beyond designing logos; we craft compelling brand identities that resonate with your target audience, build credibility, and leave a lasting impression.",
    media: "button",
  },
];

const industries = [
  "MEDICAL", "PORTFOLIO", "SAAS", "FINANCE", "STARTUP", "NFT", "B2B", "AGENCY", "FOOD",
];

const projects = [
  {
    name: "miiny",
    tags: "UIUX · RESPONSIVE UI",
    desc: "Ecommerce responsive website design for Winter wind 2050 with branding.",
    bg: "bg-[#efeaff]",
    tone: "warm",
  },
  {
    name: "Oransop",
    tags: "DEVELOPMENT · APP UIUX",
    desc: "We developed this comprehensive application that allows users to browse, purchase, & track experience delivered.",
    bg: "bg-gradient-to-br from-[#ffe3c2] via-[#ffd1b0] to-[#ffc1e0]",
    tone: "purple",
  },
  {
    name: "Minizon",
    tags: "BRANDING · STYLE GUIDE",
    desc: "We created a unique and distinct identity for this clothing brand with Logo, Color Palette, typography & more.",
    bg: "bg-gradient-to-br from-[#7fe0d0] via-[#7bc9f0] to-[#9353d3]",
    tone: "office",
  },
];

export default function WoogencyHome() {
  return (
    <main className="text-[#17161d]">
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[var(--primary)] text-white">
        <div className="pointer-events-none absolute -right-20 top-10 size-72 rounded-full bg-white/5" />
        <WooNav />

        {/* Wordmark géant */}
        <div className="px-6 pt-4 text-center sm:px-10">
          <Wordmark className="text-7xl font-extrabold tracking-tighter sm:text-8xl md:text-[130px] md:leading-none" />
          <div className="mt-2 flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-white/60">
            <span>COMMUNICATION</span>
            <span className="size-1.5 rounded-full bg-[#bff23f]" />
            <span>RESEARCH</span>
            <span className="size-1.5 rounded-full bg-[#bff23f]" />
            <span>IDEATION</span>
          </div>
        </div>

        {/* Sous-hero : texte + image */}
        <div className="grid items-end gap-8 px-6 pb-10 pt-10 sm:px-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              We Build
              <br />
              UIUX Digital
              <br />
              Experiences
            </h1>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              We focus on innovative solutions that go beyond aesthetics, aiming
              to create a tangible impact on your business.
            </p>
            <GreenButton className="mt-6">Contact Us</GreenButton>
          </div>
          <div className="relative">
            <Photo tone="meeting" className="h-52 w-full rounded-3xl sm:h-64" />
            <Scribble className="absolute -bottom-3 left-6 h-10 w-16" />
          </div>
        </div>

        {/* Marquee logos */}
        <div className="border-t border-white/10 px-6 py-5 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-lg font-bold text-white/70">
            {clients.map((c) => (
              <span key={c} className="tracking-tight">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section className="bg-[#f5ede1] px-6 py-16 sm:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#17161d] sm:text-[40px]">
            Promising High Valuable
          </h2>
          <div className="mt-1 inline-flex flex-col items-center">
            <span className="text-3xl font-extrabold text-[#17161d] sm:text-[40px]">
              Services
            </span>
            <Squiggle className="-mt-1 h-4 w-40" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex items-center gap-6 py-7 ${
                i !== services.length - 1 ? "border-b border-black/10" : ""
              }`}
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-[var(--primary)]">
                <s.icon className="size-6" />
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#17161d]">{s.title}</h3>
                <p className="mt-1 max-w-lg text-sm text-[#6d6a78]">{s.desc}</p>
              </div>
              {s.media === "image" ? (
                <Photo tone="warm" icon="image" className="hidden h-16 w-28 rounded-xl sm:block" />
              ) : (
                <GreenButton className="hidden shrink-0 sm:inline-flex">Contact Us</GreenButton>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============================ PROJETS (dark) ============================ */}
      <section className="bg-[#121016] px-6 py-16 sm:px-12">
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-white/50">
              Industries we&apos;ve worked on
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {industries.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-[40px]">
            Amazing Live Projects
            <br />
            we designed &amp; built
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`relative grid gap-6 rounded-3xl p-6 sm:grid-cols-2 sm:items-center sm:p-8 ${p.bg}`}
            >
              <div>
                <div className="text-2xl font-extrabold text-[#17161d]">{p.name}</div>
                <div className="mt-1 text-[11px] font-semibold tracking-widest text-[#17161d]/60">
                  {p.tags}
                </div>
                <p className="mt-3 max-w-xs text-sm text-[#17161d]/70">{p.desc}</p>
              </div>
              <Photo tone={p.tone} icon="image" className="h-40 rounded-2xl sm:h-44" />
              <button className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-[#17161d] text-white transition hover:bg-black">
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <GreenButton>View All Work</GreenButton>
        </div>
      </section>

      {/* ============================ TÉMOIGNAGES ============================ */}
      <section className="bg-[var(--primary)] px-6 py-16 sm:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-[40px]">
            Amazing Feedbacks from
            <br />
            Happy Clients
          </h2>
          <div className="flex items-center gap-1 text-[#bff23f]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-5 fill-[#bff23f]" />
            ))}
          </div>
        </div>

        <div className="relative mt-8 max-w-2xl overflow-hidden rounded-3xl bg-[#7e57b3] p-8">
          <div className="flex items-center gap-3">
            <Photo tone="warm" className="size-12 rounded-full" />
            <div>
              <div className="text-sm font-bold text-white">Mathew Sigman</div>
              <div className="text-xs text-white/60">Creative Lead, Owr IT</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-lg font-medium leading-snug text-white">
            The best choice to hire any agency to get the best conversion for
            business. Undoubtedly a humble team to get in touch.
          </p>
          <Scribble className="absolute bottom-6 right-8 h-10 w-16" />
        </div>
      </section>

      {/* ================= SECTIONS PARTAGÉES ================= */}
      <DataDrivenSection />
      <CtaSection />
      <WooFooter />
    </main>
  );
}
