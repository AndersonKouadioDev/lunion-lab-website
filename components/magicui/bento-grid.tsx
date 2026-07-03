import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description?: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("grid w-full auto-rows-[11rem] grid-cols-3 gap-3", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.04),0_2px_4px_rgba(0,0,0,.04),0_12px_24px_rgba(0,0,0,.04)]",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-0.5 p-4 transition-all duration-300 group-hover:-translate-y-9">
      <Icon className="h-9 w-9 origin-left transform-gpu text-[var(--primary)] transition-all duration-300 ease-in-out group-hover:scale-90" />
      <h3 className="mt-1 text-base font-bold text-[#101010]">{name}</h3>
      {description ? (
        <p className="max-w-lg text-xs leading-relaxed text-[#9a9a9a]">
          {description}
        </p>
      ) : null}
    </div>

    <div className="pointer-events-none absolute bottom-0 left-0 z-10 flex w-full translate-y-8 transform-gpu items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Link
        href={href}
        className="pointer-events-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)]"
      >
        {cta}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.02]" />
  </div>
);

export { BentoCard, BentoGrid };
