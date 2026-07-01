import {
  CalendarDays,
  CalendarClock,
  Wallet,
  Bell,
  Clock,
  BarChart3,
  KeyRound,
  Video,
  BellRing,
  ScrollText,
  Lock,
  ShieldCheck,
  BookOpen,
  ClipboardCheck,
  LineChart,
  Award,
  Users,
  Sparkles,
  LayoutGrid,
  Gauge,
  Search,
  Code2,
  Plug,
  Smartphone,
  Globe,
  Rocket,
  Palette,
  PenTool,
  Accessibility,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/components/(public)/patheren/catalog";

export const icons: Record<IconKey, LucideIcon> = {
  calendar: CalendarDays,
  "calendar-sync": CalendarClock,
  wallet: Wallet,
  bell: Bell,
  clock: Clock,
  chart: BarChart3,
  key: KeyRound,
  video: Video,
  "bell-ring": BellRing,
  logs: ScrollText,
  lock: Lock,
  shield: ShieldCheck,
  book: BookOpen,
  clipboard: ClipboardCheck,
  "line-chart": LineChart,
  award: Award,
  users: Users,
  sparkle: Sparkles,
  layout: LayoutGrid,
  gauge: Gauge,
  search: Search,
  code: Code2,
  plug: Plug,
  smartphone: Smartphone,
  globe: Globe,
  rocket: Rocket,
  palette: Palette,
  pen: PenTool,
  accessibility: Accessibility,
};

/* Étoile 8 branches (accent creatiwise) */
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 0l2.4 7.2L21.6 6l-4.8 6 4.8 6-7.2-1.2L12 24l-2.4-7.2L2.4 18l4.8-6-4.8-6 7.2 1.2z"
        fill="currentColor"
      />
    </svg>
  );
}
