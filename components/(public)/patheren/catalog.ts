/**
 * Catalogue extensible des offres Lunion (produits + services).
 * Pour ajouter une offre : copier un bloc et changer les champs.
 * Le template unique OfferingPage lit ces données via le slug.
 */

export type IconKey =
  | "calendar" | "calendar-sync" | "wallet" | "bell" | "clock" | "chart"
  | "key" | "video" | "bell-ring" | "logs" | "lock" | "shield"
  | "book" | "clipboard" | "line-chart" | "award" | "users" | "sparkle";

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
];

export const offeringSlugs = offerings.map((o) => o.slug);

export function getOffering(slug: string): Offering | undefined {
  return offerings.find((o) => o.slug === slug);
}

export const products = offerings.filter((o) => o.kind === "product");
export const services = offerings.filter((o) => o.kind === "service");
