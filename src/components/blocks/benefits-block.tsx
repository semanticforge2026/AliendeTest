/**
 * BenefitsBlock — A premium 2–4 column benefit/use-case grid.
 *
 * DESIGN GUARDRAIL:
 *   - Uses SectionHeading for title/subtitle.
 *   - Benefit items use an article structure for SEO.
 *   - Top border on items provides visual rhythm.
 */
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import type { BenefitItem } from "@/types/content";
import { cn } from "@/lib/utils";

interface BenefitsBlockProps {
  heading?: string;
  subheading?: string;
  items: BenefitItem[];
  /** Background variant */
  surface?: "default" | "surface";
  className?: string;
}

export function BenefitsBlock({
  heading = "Why it works.",
  subheading,
  items,
  surface = "default",
  className,
}: BenefitsBlockProps) {
  return (
    <section
      className={cn(
        "section-padding border-t border-border-subtle",
        surface === "surface" ? "bg-surface" : "bg-background",
        className
      )}
    >
      <div className="container-premium">
        <SectionReveal>
          <SectionHeading title={heading} subtitle={subheading} />
          
          <div className={cn(
            "grid grid-cols-1 gap-12 lg:gap-16",
            items.length <= 2
              ? "md:grid-cols-2"
              : items.length === 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2 lg:grid-cols-4"
          )}>
            {items.map((item, i) => (
              <article key={i} className="flex flex-col gap-5">
                <div className="h-px w-10 bg-accent shrink-0" aria-hidden="true" />
                <h3 className="font-heading text-lg md:text-xl font-semibold tracking-tight text-text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="body-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
