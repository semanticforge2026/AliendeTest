/**
 * TrustBar (Logo Strip) — B2B social proof section.
 *
 * DESIGN GUARDRAIL:
 *   - Uppercase tracking-widest label for high-end feel.
 *   - Grayscale by default, smooth transition to full color on hover.
 *   - Centered alignment with generous responsive gaps.
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TrustBarProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: React.ReactNode[];
}

export function TrustBar({ logos, className, ...props }: TrustBarProps) {
  return (
    <section 
      className={cn("w-full border-y border-border-subtle bg-background py-10 md:py-12", className)} 
      aria-label="Trusted by companies"
      {...props}
    >
      <div className="container-premium flex flex-col items-center">
        <p className="mb-10 text-center label-overline">
          Trusted by modern enterprises globally
        </p>
        
        <div className="flex w-full flex-wrap items-center justify-center gap-12 md:gap-24 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {logos.map((logo, index) => (
            <div key={index} className="flex h-8 items-center justify-center">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
