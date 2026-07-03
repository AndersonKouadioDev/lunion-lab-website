"use client";

import { useEffect, useState } from "react";
import { Safari } from "@/components/magicui/safari";
import { Iphone } from "@/components/magicui/iphone";

/**
 * Carrousels de mockups d'appareils : empilent plusieurs rendus identiques du
 * device et font un crossfade CSS du seul écran (le châssis reste constant).
 * Un fantôme fixe la hauteur intrinsèque. Props 100% sérialisables (client-safe).
 */

function useCycle(length: number, interval: number) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(
      () => setIndex((v) => (v + 1) % length),
      interval,
    );
    return () => clearInterval(id);
  }, [length, interval]);
  return index;
}

export function SafariCarousel({
  items,
  interval = 3800,
  className = "",
}: {
  items: { img: string; url?: string }[];
  interval?: number;
  className?: string;
}) {
  const index = useCycle(items.length, interval);
  return (
    <div className={`relative ${className}`}>
      <div className="invisible" aria-hidden>
        <Safari url={items[0].url} imageSrc={items[0].img} className="w-full" />
      </div>
      {items.map((it, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Safari
            url={it.url}
            imageSrc={it.img}
            className="w-full drop-shadow-2xl"
          />
        </div>
      ))}
    </div>
  );
}

export function IphoneCarousel({
  items,
  interval = 4200,
  className = "",
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  const index = useCycle(items.length, interval);
  return (
    <div className={`relative ${className}`}>
      <div className="invisible" aria-hidden>
        <Iphone src={items[0]} className="w-full" />
      </div>
      {items.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Iphone src={src} className="w-full drop-shadow-2xl" />
        </div>
      ))}
    </div>
  );
}
