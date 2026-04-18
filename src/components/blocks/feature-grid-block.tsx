/**
 * FeatureGridBlock — Dense feature listing grid.
 *
 * DESIGN GUARDRAIL:
 *   - 3-column layout on desktop.
 *   - Border-heavy grid style with hover states.
 *   - Title uses Manrope font-semibold for clarity at smaller sizes.
 */
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import type { FeatureItem } from "@/types/content";

interface FeatureGridBlockProps {
  heading?: string;
  subheading?: string;
  items: FeatureItem[];
}

export function FeatureGridBlock({
  heading = "Capabilities",
  subheading,
  items,
}: FeatureGridBlockProps) {
  return (
    <section className="section-padding border-t border-border-subtle">
      <div className="container-premium">
        <SectionReveal>
          <SectionHeading title={heading} subtitle={subheading} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-px gap-x-px bg-border-subtle border border-border-subtle rounded-card overflow-hidden shadow-premium">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-surface-elevated p-8 transition-colors duration-300 hover:bg-surface"
              >
                <h3 className="font-heading text-base font-semibold text-text-primary mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-[1.7] max-w-[280px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
