/**
 * Catalogue extensible des offres Lunion (produits + services).
 * Pour ajouter une offre : copier un bloc et changer les champs.
 * Le template unique OfferingPage lit ces données via le slug.
 */

export type IconKey =
  | "calendar" | "calendar-sync" | "wallet" | "bell" | "clock" | "chart"
  | "key" | "video" | "bell-ring" | "logs" | "lock" | "shield"
  | "book" | "clipboard" | "line-chart" | "award" | "users" | "sparkle"
  // services
  | "layout" | "gauge" | "search" | "code" | "plug" | "smartphone"
  | "globe" | "rocket" | "palette" | "pen" | "accessibility";

export type Offering = {
  slug: string;
  kind: "product" | "service";
  name: string;
  category: string;
  tagline: string;
  heroTitle: string;
  heroDesc: string;
  growth: { value: string; label: string };
  band: { we: string; verb: string; outcome: string };
  process: { n: string; title: string; desc: string }[];
  featuresIntro: string;
  features: { icon: IconKey; title: string; desc: string }[];
  modules: { title: string; desc: string; tone: string }[];
};

/* Étapes de process communes (Define → Design → Build → Launch) */
const process = (a: string, b: string, c: string, d: string) => [
  { n: "01", title: "Define", desc: a },
  { n: "02", title: "Design", desc: b },
  { n: "03", title: "Build", desc: c },
  { n: "04", title: "Launch", desc: d },
];

export const offerings: Offering[] = [
  {
    slug: "lunion-booking",
    kind: "product",
    name: "Lunion-Booking",
    category: "Booking & Reservations",
    tagline: "Turn every reservation into a seamless experience.",
    heroTitle: "Smart Booking for Modern Businesses",
    heroDesc:
      "From appointments to venues, Lunion-Booking lets your customers reserve in seconds while you manage everything from a single dashboard.",
    growth: { value: "40%", label: "faster bookings on average" },
    band: { we: "We", verb: "Streamline", outcome: "Bookings" },
    process: process(
      "We map your reservation flows, availability rules and the way your customers book today.",
      "We design frictionless booking journeys and a dashboard your team actually enjoys using.",
      "We build the engine: real-time availability, payments and integrations, tested end to end.",
      "We go live, monitor the first bookings and fine-tune to keep conversion climbing.",
    ),
    featuresIntro: "Everything you need to take reservations, not just a calendar.",
    features: [
      { icon: "calendar", title: "Online Booking", desc: "Let customers reserve 24/7 from any device in just a few taps." },
      { icon: "calendar-sync", title: "Calendar Sync", desc: "Two-way sync with Google, Outlook and your internal calendars." },
      { icon: "wallet", title: "Wave Payments", desc: "Collect deposits and full payments at booking, powered by Wave." },
      { icon: "bell", title: "Smart Reminders", desc: "Automatic SMS & email reminders that cut no-shows drastically." },
      { icon: "clock", title: "Real-time Availability", desc: "Prevent double-bookings with live, rule-based availability." },
      { icon: "chart", title: "Analytics", desc: "Track occupancy, revenue and conversion from one place." },
    ],
    modules: [
      { title: "Appointment Scheduling", desc: "Slots, staff and services managed effortlessly.", tone: "cream" },
      { title: "Venue & Resource Booking", desc: "Rooms, equipment and multi-venue support.", tone: "sky" },
      { title: "Payment & Invoicing", desc: "Deposits, refunds and automated invoices.", tone: "peach" },
      { title: "Customer Portal", desc: "A self-service space to manage reservations.", tone: "mono" },
    ],
  },
  {
    slug: "lunion-secu",
    kind: "product",
    name: "Lunion-Secu",
    category: "Security & Access",
    tagline: "Protect what matters, in real time.",
    heroTitle: "Intelligent Security & Access Control",
    heroDesc:
      "Lunion-Secu unifies access control, monitoring and alerts so your teams and spaces stay protected around the clock.",
    growth: { value: "99.9%", label: "monitoring uptime" },
    band: { we: "We", verb: "Protect", outcome: "Everything" },
    process: process(
      "We audit your sites, access points and the risks that matter most to your organization.",
      "We design clear access policies and dashboards that make security effortless to run.",
      "We build the controls: access, monitoring, alerts and encrypted audit trails.",
      "We deploy across your sites and keep watch, tuning alerts to remove the noise.",
    ),
    featuresIntro: "A single platform for access, monitoring and peace of mind.",
    features: [
      { icon: "key", title: "Access Control", desc: "Grant, revoke and schedule access for people and spaces." },
      { icon: "video", title: "Live Monitoring", desc: "Unified live view across every camera and sensor." },
      { icon: "bell-ring", title: "Instant Alerts", desc: "Real-time notifications the moment something looks off." },
      { icon: "logs", title: "Audit Logs", desc: "Immutable, searchable trails of every action taken." },
      { icon: "lock", title: "End-to-end Encryption", desc: "Your data stays encrypted in transit and at rest." },
      { icon: "shield", title: "Compliance", desc: "Built to meet the standards your industry requires." },
    ],
    modules: [
      { title: "Access Management", desc: "Badges, roles and time-based permissions.", tone: "mono" },
      { title: "Surveillance & Monitoring", desc: "Live and recorded, all in one view.", tone: "sky" },
      { title: "Incident Response", desc: "Alerts, escalation and response playbooks.", tone: "peach" },
      { title: "Compliance & Audit", desc: "Reports and trails ready for any audit.", tone: "cream" },
    ],
  },
  {
    slug: "lunion-educ",
    kind: "product",
    name: "Lunion-Educ",
    category: "Education Platform",
    tagline: "Learning that scales with you.",
    heroTitle: "A Modern Platform for Digital Learning",
    heroDesc:
      "Lunion-Educ brings courses, live classes and assessments together in one place, so educators teach and learners thrive.",
    growth: { value: "3x", label: "learner engagement" },
    band: { we: "We", verb: "Empower", outcome: "Learners" },
    process: process(
      "We understand your programs, learners and the outcomes you want to reach.",
      "We design engaging learning journeys for students, teachers and parents alike.",
      "We build courses, live classes, assessments and analytics into one platform.",
      "We launch, onboard your cohorts and keep improving with real usage data.",
    ),
    featuresIntro: "Everything educators and learners need, beautifully connected.",
    features: [
      { icon: "book", title: "Course Builder", desc: "Create rich courses with lessons, media and quizzes." },
      { icon: "video", title: "Live Classes", desc: "Host live sessions with recordings and attendance." },
      { icon: "clipboard", title: "Assessments", desc: "Quizzes, assignments and auto-grading in one flow." },
      { icon: "line-chart", title: "Progress Tracking", desc: "Follow every learner's journey and mastery." },
      { icon: "award", title: "Certificates", desc: "Issue verified certificates on completion." },
      { icon: "users", title: "Parent Portal", desc: "Keep families in the loop on progress and events." },
    ],
    modules: [
      { title: "Course Management", desc: "Build, organize and publish your catalog.", tone: "cream" },
      { title: "Live & Recorded Classes", desc: "Teach live, learn anytime.", tone: "sky" },
      { title: "Assessments & Grading", desc: "From quizzes to final exams.", tone: "peach" },
      { title: "Analytics & Reports", desc: "Insights for educators and admins.", tone: "mono" },
    ],
  },

  /* ============================ SERVICES ============================ */
  {
    slug: "web-development",
    kind: "service",
    name: "Web Development",
    category: "Web Development",
    tagline: "Fast, scalable web apps that convert.",
    heroTitle: "Web Experiences Built to Perform",
    heroDesc:
      "We design and build modern web apps with Next.js — fast, accessible and ready to scale with your business.",
    growth: { value: "2x", label: "faster load times" },
    band: { we: "We", verb: "Engineer", outcome: "The Web" },
    process: process(
      "We clarify your goals, audience and the outcomes the site has to drive.",
      "We shape the information architecture and interfaces around real user journeys.",
      "We build with Next.js — typed, tested and optimized for Core Web Vitals.",
      "We deploy, measure real traffic and keep tuning speed and conversion.",
    ),
    featuresIntro: "From landing pages to full platforms, engineered to last.",
    features: [
      { icon: "layout", title: "Responsive UI", desc: "Pixel-perfect on every screen, from mobile to desktop." },
      { icon: "gauge", title: "Blazing Performance", desc: "Optimized Core Web Vitals and instant page loads." },
      { icon: "search", title: "SEO Ready", desc: "Semantic, server-rendered pages built to rank." },
      { icon: "code", title: "Clean, Typed Code", desc: "Maintainable TypeScript your team can build on." },
      { icon: "plug", title: "Integrations", desc: "Connect payments, CRMs and any API you need." },
      { icon: "shield", title: "Secure by Default", desc: "Best practices baked in, from auth to headers." },
    ],
    modules: [
      { title: "Landing Pages", desc: "High-converting pages that load instantly.", tone: "cream" },
      { title: "Web Applications", desc: "Complex, data-driven products.", tone: "sky" },
      { title: "E-commerce", desc: "Storefronts and checkout, done right.", tone: "peach" },
      { title: "Dashboards & Portals", desc: "Admin tools your team enjoys.", tone: "mono" },
    ],
  },
  {
    slug: "mobile-development",
    kind: "service",
    name: "Mobile Development",
    category: "Mobile Development",
    tagline: "Native apps for iOS & Android, one codebase.",
    heroTitle: "Mobile Apps People Love to Open",
    heroDesc:
      "We craft cross-platform apps with React Native & Expo — native feel, shipped fast to the App Store and Play Store.",
    growth: { value: "4.8★", label: "average app store rating" },
    band: { we: "We", verb: "Ship", outcome: "Mobile" },
    process: process(
      "We define the core experience and the platforms that matter to your users.",
      "We design native-feeling flows for iOS and Android from day one.",
      "We build with Expo — one codebase, real device testing, OTA-ready.",
      "We ship to both stores and keep improving with in-app analytics.",
    ),
    featuresIntro: "Everything a great mobile product needs, shipped fast.",
    features: [
      { icon: "smartphone", title: "Native Feel", desc: "Smooth, 60fps experiences on iOS and Android." },
      { icon: "bell", title: "Push Notifications", desc: "Re-engage users with timely, targeted pushes." },
      { icon: "wallet", title: "In-app Payments", desc: "Wave and card payments, right inside the app." },
      { icon: "globe", title: "Offline & Sync", desc: "Works offline and syncs the moment you're back." },
      { icon: "rocket", title: "OTA Updates", desc: "Push fixes instantly without a store review." },
      { icon: "users", title: "Cross-platform", desc: "One codebase, both stores, half the cost." },
    ],
    modules: [
      { title: "iOS & Android Apps", desc: "One build, both platforms.", tone: "mono" },
      { title: "Expo & Dev Client", desc: "Fast iteration on real devices.", tone: "sky" },
      { title: "Push & Notifications", desc: "Engagement that brings users back.", tone: "peach" },
      { title: "App Store Delivery", desc: "Submission and release handled.", tone: "cream" },
    ],
  },
  {
    slug: "ui-ux-design",
    kind: "service",
    name: "UI/UX Design",
    category: "UI/UX Design",
    tagline: "Design that turns visitors into users.",
    heroTitle: "Product Design that Feels Effortless",
    heroDesc:
      "From research to polished interfaces, we design products people understand instantly and love to use.",
    growth: { value: "+35%", label: "conversion after redesign" },
    band: { we: "We", verb: "Design", outcome: "Delight" },
    process: process(
      "We research your users and business to define what success looks like.",
      "We explore directions, wireframes and flows before touching a single pixel.",
      "We craft high-fidelity screens and a design system ready for engineering.",
      "We hand off, QA the build and refine until every detail feels right.",
    ),
    featuresIntro: "Research-led design, from first sketch to shipped screen.",
    features: [
      { icon: "users", title: "User Research", desc: "We learn what your users actually need first." },
      { icon: "pen", title: "Wireframes", desc: "Low-fi flows to validate ideas before the pixels." },
      { icon: "palette", title: "Design Systems", desc: "Consistent, scalable component libraries." },
      { icon: "layout", title: "Prototyping", desc: "Clickable prototypes to test real journeys." },
      { icon: "sparkle", title: "Visual Design", desc: "Distinctive interfaces that fit your brand." },
      { icon: "accessibility", title: "Accessibility", desc: "Inclusive by design, with WCAG in mind." },
    ],
    modules: [
      { title: "Product Design", desc: "End-to-end app and web design.", tone: "peach" },
      { title: "Design Systems", desc: "Tokens, components and docs.", tone: "cream" },
      { title: "Prototyping", desc: "Test journeys before you build.", tone: "sky" },
      { title: "Brand & Identity", desc: "A look that's unmistakably yours.", tone: "mono" },
    ],
  },
];

export const offeringSlugs = offerings.map((o) => o.slug);

export function getOffering(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

export const products = offerings.filter((o) => o.kind === "product");
export const services = offerings.filter((o) => o.kind === "service");
export const productSlugs = products.map((o) => o.slug);
export const serviceSlugs = services.map((o) => o.slug);
