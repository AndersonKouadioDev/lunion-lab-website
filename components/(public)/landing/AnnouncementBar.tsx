"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

/** Top bar violette texturée avec annonce. */
export function AnnouncementBar() {
  return (
    <div className="relative isolate overflow-hidden bg-violet-deep text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(167,139,250,0.45),transparent_70%)]" />
      <Link
        href="/contact"
        className="group relative z-10 mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-xs font-medium sm:text-sm"
      >
        <Sparkles className="h-4 w-4 text-violet-bright" />
        <span>
          Transformez votre idée en produit digital —{" "}
          <span className="font-semibold">consultation offerte</span>
        </span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
