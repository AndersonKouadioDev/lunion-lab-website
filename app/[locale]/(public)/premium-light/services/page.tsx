import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  PatherenNav,
  PatherenFooter,
  ProjectCta,
  Photo,
} from "@/components/(public)/patheren/ui";
import { services } from "@/components/(public)/patheren/catalog";

export const metadata = {
  title: "Services — Patheren",
  description: "Web, mobile and product design services by Lunion.",
};

export default function ServicesIndex() {
  return (
    <main
      className="mx-auto max-w-[1240px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* HERO */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-12">
        <PatherenNav active="Services" />
        <div className="mx-auto max-w-2xl px-6 pt-8 text-center sm:pt-14">
          <div className="text-xs font-semibold tracking-widest text-[var(--primary)]">
            Our Services
          </div>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            From idea to launch,
            <br />
            we craft it all
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Web, mobile and design — the full craft to bring your product to life,
            with more services on the way.
          </p>
        </div>
      </section>

      {/* GRID SERVICES */}
      <section className="mt-4 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/premium-light/services/${s.slug}`}
            className="group flex flex-col rounded-[28px] bg-white p-7 transition hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]"
          >
            <div className="relative">
              <Photo tone="office" className="h-44 rounded-2xl grayscale" />
              <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white text-[#101010] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <div className="mt-5 flex flex-1 flex-col">
              <div className="text-xs font-semibold tracking-widest text-[var(--primary)]">
                {s.category}
              </div>
              <h2 className="mt-1 text-2xl font-extrabold">{s.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#9a9a9a]">
                {s.tagline}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                <div>
                  <span className="text-2xl font-extrabold text-[var(--primary)]">
                    {s.growth.value}
                  </span>
                  <span className="ml-2 text-xs text-[#9a9a9a]">{s.growth.label}</span>
                </div>
                <span className="text-sm font-semibold text-[#101010]">Explore →</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <ProjectCta />
      <PatherenFooter />
    </main>
  );
}
