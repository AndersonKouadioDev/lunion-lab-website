import {
  PatherenFooter,
  Photo,
  ResultsSection,
  FaqSection,
  ProjectCta,
} from "@/components/(public)/patheren/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/(public)/patheren/motion";
import { TeamSection } from "@/components/(public)/patheren/TeamSection";
import { TechStack } from "@/components/(public)/patheren/TechStack";
import {
  Rocket,
  Users,
  Building2,
  Globe,
  Repeat,
  Layers,
  ShieldCheck,
} from "lucide-react";

/**
 * Premium Light — About "Patheren", inspirée de la page About Woogency
 * (hero "trusted partner", Mission 01/02/03, Vision, Strategy sombre, FAQ).
 */

const missionSteps = [
  {
    n: "01",
    title: "Innovation as a Core Value",
    desc: "We embrace innovation as a driving force behind every project. Our team is committed to staying abreast of the latest design trends and technologies.",
  },
  {
    n: "02",
    title: "Data-Driven Decision Making",
    desc: "Our mission involves leveraging insights and analytics to optimize user journeys, enhance conversions, and continuously improve our designs.",
  },
  {
    n: "03",
    title: "Continuous Learning & Improvement",
    desc: "We foster a culture of continuous learning and improvement, ensuring our team is in tune with industry needs and evolving trends.",
  },
];

const visionItems = [
  { icon: Rocket, title: "Pioneering Innovation", desc: "We introduce ground-breaking design concepts and technologies that inspire and lead the industry forward." },
  { icon: Users, title: "Championing User-Centricity", desc: "At the core of our vision is an unwavering commitment to user-centric design that places users at the forefront." },
  { icon: Building2, title: "Shaping Industry Standards", desc: "We set benchmarks for quality and ethical design, shaping the way branding is conceived and practised." },
  { icon: Globe, title: "Holistic and Inclusive Design", desc: "Our designs express empathy and connect with the strategic goals of our clients across every touchpoint." },
];

const strategy = [
  { icon: Repeat, title: "Agile & Iterative Process", desc: "We work in fast iterative loops, validating each step with you so the outcome always matches the vision." },
  { icon: Layers, title: "Scalable Solutions", desc: "Every system we craft is built to scale, from a single landing page to a full design system." },
  { icon: ShieldCheck, title: "Quality Assurance & Testing", desc: "Rigorous testing and QA at each milestone guarantee a polished, dependable final result." },
];

const faqs = [
  "What is the typical timeline for a branding project, from concept to delivery?",
  "What is branding, and why is it important for my business?",
  "What is your approach to design research?",
  "What sets your agency apart from others?",
  "What are the criteria to get branding services?",
];

export default function PremiumLightAbout() {
  return (
    <main
      className="mx-auto max-w-[1680px] px-4 pb-4 text-[#101010]"
      style={{ fontFamily: "var(--font-figtree)" }}
    >
      {/* ============================ HERO ============================ */}
      <section className="overflow-hidden rounded-b-[36px] bg-white pb-12">
        <Reveal className="px-6 pt-6 text-center sm:px-10">
          <div className="text-xs font-semibold tracking-widest text-[var(--primary)]">
            About us
          </div>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Your trusted partner in
            <br />
            digital service
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#8a8a8a] sm:text-base">
            Highly skilled team focused on team playing to connect with your
            audience and deliver work that genuinely matters.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4">
            <Photo tone="office" className="h-40 rounded-2xl sm:h-48" />
            <Photo tone="team" className="h-48 rounded-2xl sm:h-56" />
            <Photo tone="meeting" className="h-40 rounded-2xl sm:h-48" />
          </div>
        </Reveal>
      </section>

      {/* ============================ MISSION ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Our Mission</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
          <Photo tone="meeting" icon="image" className="h-64 rounded-2xl" />
          <div>
            <p className="text-sm leading-relaxed text-[#9a9a9a]">
              We craft digital experiences that leave a lasting impression.
              Elevate your online presence with our innovative design solutions,
              where every pixel is thoughtfully placed to resonate with your
              audience.
            </p>
            <h3 className="mt-5 text-lg font-bold">
              Empowering Businesses Through Design Excellence through
              Human-Centered Approach
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">
              Our mission revolves around placing users at the center of our
              design process. We strive to understand their behaviors, needs, and
              preferences to create interfaces that resonate.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-3">
          {missionSteps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="text-4xl font-extrabold text-[var(--primary)]">{s.n}</div>
              <h4 className="mt-3 text-base font-bold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#9a9a9a]">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============================ VISION ============================ */}
      <section className="mt-4 rounded-[28px] bg-white p-8 sm:p-12">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Our Vision</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
          <p className="max-w-md text-sm leading-relaxed text-[#9a9a9a]">
            We aspire to set new industry standards, redefine the boundaries of
            user interface and experience design. Our overarching vision is
            encapsulated in the following principles.
          </p>
          <Photo tone="team" icon="image" className="h-56 rounded-2xl" />
        </Reveal>

        <Stagger className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {visionItems.map((v) => (
            <StaggerItem key={v.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-[#f2f2f2] text-[var(--primary)]">
                <v.icon className="size-5" />
              </span>
              <h4 className="mt-3 text-sm font-bold">{v.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#9a9a9a]">{v.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===================== ÉQUIPE (V2 DreamTeam adapté) ===================== */}
      <TeamSection />

      {/* ===================== TECH STACK ===================== */}
      <TechStack />

      {/* ============================ STRATEGY (sombre) ============================ */}
      <section className="mt-4 rounded-[28px] bg-[#101010] p-8 text-white sm:p-12">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold leading-tight sm:text-4xl">
            Our Strategy of
            <br />
            Pro Working Process
          </h2>
        </Reveal>
        <Stagger className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
          {strategy.map((s) => (
            <StaggerItem key={s.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-[var(--primary)]">
                <s.icon className="size-5" />
              </span>
              <h4 className="mt-4 text-base font-bold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ===================== RÉSULTATS + FAQ + CTA + FOOTER ===================== */}
      <Reveal>
        <ResultsSection />
      </Reveal>
      <Reveal>
        <FaqSection items={faqs} dark />
      </Reveal>
      <ProjectCta />
      <PatherenFooter />
    </main>
  );
}
