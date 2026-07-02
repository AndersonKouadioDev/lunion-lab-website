"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Aceternity UI — Meteors (adapté : délais/durées déterministes pour éviter
// tout décalage d'hydratation en rendu statique).
export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const count = number || 20;
  const meteors = new Array(count).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_, idx) => {
        const position = idx * (800 / count) - 400;
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-400 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#94a3b8] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px",
              left: position + "px",
              // Déterministe : réparti et varié sans Math.random()
              animationDelay: ((idx * 0.37) % 5).toFixed(2) + "s",
              animationDuration: 5 + (idx % 5) + "s",
            }}
          />
        );
      })}
    </motion.div>
  );
};
