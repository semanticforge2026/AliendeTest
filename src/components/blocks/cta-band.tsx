/**
 * CTABand — Final high-impact conversion section.
 *
 * DESIGN GUARDRAIL:
 *   - Uses accent-deep background for maximum emphasis.
 *   - Text is always white or high-contrast against accent.
 *   - PrimaryButton within this section assumes high-contrast focus rings.
 */
import { SectionReveal } from "@/components/sections/section-reveal";
import { PrimaryButton } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTABandProps {
  heading?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function CTABand({
  heading = "Ready to elevate your infrastructure?",
  body = "Schedule a technical consultation to discuss integrating premium deterministic AI into your operational stack.",
  buttonText = "Book Consultation",
  buttonHref = "/contact",
  className,
}: CTABandProps) {
  return (
    <section 
      className={cn("bg-accent-deep py-20 md:py-28 lg:py-32 overflow-hidden", className)}
      aria-labelledby="cta-heading"
    >
      <div className="container-premium text-center">
        <SectionReveal>
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 
              id="cta-heading" 
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1] text-balance"
            >
              {heading}
            </h2>
            <p className="body-large text-white/80 max-w-2xl mx-auto">
              {body}
            </p>
            <div className="pt-4">
              <Link href={buttonHref}>
                <PrimaryButton 
                  className="bg-white text-accent-deep hover:bg-surface-elevated hover:scale-105 active:scale-95 transition-all text-base px-8 py-4 h-auto shadow-xl"
                >
                  {buttonText}
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
