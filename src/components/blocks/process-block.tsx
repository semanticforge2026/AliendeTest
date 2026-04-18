/**
 * ProcessBlock — Step-by-step methodologies.
 *
 * DESIGN GUARDRAIL:
 *   - Centered SectionHeading.
 *   - Grid of ProcessStepCard components.
 *   - Background usually surface for contrast against surrounding sections.
 */
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProcessStepCard } from "@/components/cards/process-step-card";
import type { ProcessStep } from "@/types/content";
import { cn } from "@/lib/utils";

interface ProcessBlockProps {
  heading?: string;
  subheading?: string;
  steps: ProcessStep[];
  className?: string;
}

export function ProcessBlock({
  heading = "The Implementation Arc",
  subheading = "Our rigorous, low-risk methodology for inserting AI safely into production environments.",
  steps,
  className,
}: ProcessBlockProps) {
  if (!steps.length) return null;
  return (
    <section className={cn("section-padding bg-surface border-t border-border-subtle", className)}>
      <div className="container-premium">
        <SectionReveal>
          <SectionHeading title={heading} subtitle={subheading} centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, i) => (
              <ProcessStepCard
                key={i}
                // Use the step string from the data, or fallback to index if empty
                step={step.step || `0${i + 1} / Phase`}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
