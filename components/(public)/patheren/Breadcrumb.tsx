import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/** Fil d'Ariane aligné à gauche, en haut d'une page service. */
export function Breadcrumb({
  items,
  tone = "dark",
  className,
}: {
  items: Crumb[];
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <nav
      aria-label="Fil d'Ariane"
      className={className ?? "px-6 pt-6 sm:px-10 sm:pt-7"}
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px]">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link
                  href={c.href}
                  className={
                    light
                      ? "font-medium text-white/60 transition hover:text-white"
                      : "font-medium text-[#8a8a8a] transition hover:text-[var(--primary)]"
                  }
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn(
                    light
                      ? last
                        ? "font-semibold text-white"
                        : "font-medium text-white/60"
                      : last
                        ? "font-semibold text-[#101010]"
                        : "font-medium text-[#8a8a8a]",
                  )}
                >
                  {c.label}
                </span>
              )}
              {!last && (
                <ChevronRight
                  className={cn(
                    "size-3.5",
                    light ? "text-white/40" : "text-[#c9c9c9]",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
