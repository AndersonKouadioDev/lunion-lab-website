import {
  WooNav,
  WooFooter,
  DataDrivenSection,
  CtaSection,
  GreenButton,
  Photo,
} from "@/components/(public)/woogency/woo-ui";
import {
  Rocket,
  Users,
  Building2,
  Globe,
  Repeat,
  Layers,
  ShieldCheck,
  Plus,
} from "lucide-react";

const missionSteps = [
  {
    n: "01",
    title: "Innovation as a Core Value",
    desc: "We embrace innovation as a driving force behind of every project. Our team is committed to staying abreast of the latest design trends and technologies.",
  },
  {
    n: "02",
    title: "Data-Driven Decision Making",
    desc: "Our mission involves leveraging insights and analytics to optimize user journeys, enhance conversions, and continuously improve the effectiveness of our designs.",
  },
  {
    n: "03",
    title: "Continuous Learning & Improvement",
    desc: "We foster a culture of continuous learning and improvement, ensuring our team is in tune with industry needs and evolving trends.",
  },
];

const visionItems = [
  { icon: Rocket, title: "Pioneering Innovation", desc: "Our goal is to introduce ground-breaking design concepts and technologies that inspire and lead the industry forward." },
  { icon: Users, title: "Championing User-Centricity", desc: "At the core of our vision is an unwavering commitment to user-centric design. We strive to be recognised as the agency that places users at the forefront." },
  { icon: Building2, title: "Shaping Industry Standards", desc: "We envision being at the forefront of discussions that shape the way UIUX is conceived and practised, setting benchmarks for quality and ethical design." },
  { icon: Globe, title: "Holistic and Inclusive Design", desc: "Our vision involves forming collaborations where our designs express empathy and connect with the strategic goals of our clients." },
];

const strategy = [
  { icon: Repeat, title: "Agile & Iterative Process", desc: "We envision being at the forefront of discussions that shape the way UIUX is conceived and practised, setting benchmarks for quality." },
  { icon: Layers, title: "Scalable Solutions", desc: "We envision being at the forefront of discussions that shape the way UIUX is conceived and practised, setting benchmarks for quality." },
  { icon: ShieldCheck, title: "Quality Assurance & Testing", desc: "We envision being at the forefront of discussions that shape the way UIUX is conceived and practised, setting benchmarks for quality." },
];

const faqs = [
  "What is the typical timeline for a UIUX project, from concept to delivery?",
  "What is UIUX, and why is it important for my business?",
  "What is your approach to user research?",
  "What sets your UIUX agency apart from others?",
  "What are the criteria to get UIUX services?",
];

export default function WoogencyAbout() {
  return (
    <main className="text-[#17161d]">
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-[var(--primary)] text-white">
        <WooNav />
        <div className="px-6 pb-12 pt-6 text-center sm:px-10">
          <div className="text-xs font-semibold tracking-widest text-[#bff23f]">
            About us
          </div>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Your trusted partner in
            <br />
            digital service
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/70">
            Highly skilled team focused on team playing to connect with your
            audience and deliver work that genuinely matters.
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
            <Photo tone="office" className="h-40 rounded-2xl" />
            <Photo tone="team" className="h-48 rounded-2xl" />
            <Photo tone="meeting" className="h-40 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* ============================ MISSION ============================ */}
      <section className="bg-[#f5ede1] px-6 py-16 sm:px-12">
        <h2 className="text-3xl font-extrabold text-[#17161d] sm:text-[40px]">
          Our Mission
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
          <Photo tone="meeting" icon="image" className="h-64 rounded-3xl" />
          <div>
            <p className="text-sm leading-relaxed text-[#6d6a78]">
              We craft digital experiences that leave a lasting impression.
              Elevate your online presence with our innovative design solutions,
              where every pixel is thoughtfully placed to resonate with your
              audience.
            </p>
            <h3 className="mt-5 text-lg font-bold text-[#17161d]">
              Empowering Businesses Through Design Excellence through
              Human-Centered Approach
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6d6a78]">
              Our mission revolves around placing users at the center of our
              design process. We strive to understand their behaviors, needs, and
              preferences to create interfaces that resonate.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-3">
          {missionSteps.map((s) => (
            <div key={s.n}>
              <div className="text-4xl font-extrabold text-[var(--primary)]">{s.n}</div>
              <h4 className="mt-3 text-base font-bold text-[#17161d]">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#6d6a78]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ VISION ============================ */}
      <section className="bg-[#f5ede1] px-6 pb-16 sm:px-12">
        <h2 className="text-3xl font-extrabold text-[#17161d] sm:text-[40px]">
          Our Vision
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
          <p className="max-w-md text-sm leading-relaxed text-[#6d6a78]">
            We aspire to set new industry standards, redefine the boundaries of
            user interface and experience design. Our overarching vision is
            encapsulated in the following principles.
          </p>
          <Photo tone="team" icon="image" className="h-56 rounded-3xl" />
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {visionItems.map((v) => (
            <div key={v.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-white text-[var(--primary)]">
                <v.icon className="size-5" />
              </span>
              <h4 className="mt-3 text-sm font-bold text-[#17161d]">{v.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#6d6a78]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ STRATEGY (dark) ============================ */}
      <section className="bg-[#121016] px-6 py-16 text-white sm:px-12">
        <h2 className="text-center text-3xl font-extrabold leading-tight sm:text-[40px]">
          Our Strategy of
          <br />
          Pro Working Process
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
          {strategy.map((s) => (
            <div key={s.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-[#bff23f]">
                <s.icon className="size-5" />
              </span>
              <h4 className="mt-4 text-base font-bold">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section className="bg-[var(--primary)] px-6 py-16 sm:px-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-[40px]">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>
          <div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {faqs.map((q, i) => (
                <details key={q} className="group py-4" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white">
                    {q}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/10 text-white transition group-open:rotate-45">
                      <Plus className="size-4" />
                    </span>
                  </summary>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
                    Our team is dedicated to delivering tailored solutions. We
                    combine research, strategy and design to answer this exactly
                    for your project and business goals.
                  </p>
                </details>
              ))}
            </div>
            <GreenButton className="mt-6">Learn More</GreenButton>
          </div>
        </div>
      </section>

      {/* ================= SECTIONS PARTAGÉES ================= */}
      <DataDrivenSection />
      <CtaSection />
      <WooFooter />
    </main>
  );
}
