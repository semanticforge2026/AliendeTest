/**
 * ProofBlock — Metrics + optional testimonial section.
 *
 * DESIGN GUARDRAIL:
 *   - Split layout on desktop (metrics left, testimonial right).
 *   - Metrics use StatCard with light/borderless variants for density.
 *   - TestimonialCard handles its own internal hierarchy.
 */
import { SectionReveal } from "@/components/sections/section-reveal";
import { StatCard } from "@/components/cards/stat-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import type { Metric, Testimonial } from "@/types/content";
import { cn } from "@/lib/utils";

interface ProofBlockProps {
  metrics: Metric[];
  testimonial?: Testimonial;
  className?: string;
}

export function ProofBlock({ metrics, testimonial, className }: ProofBlockProps) {
  return (
    <section className={cn("section-padding bg-surface border-t border-border-subtle", className)}>
      <div className="container-premium">
        <SectionReveal>
          <div className={cn(
            "grid gap-16 lg:gap-24",
            testimonial ? "grid-cols-1 lg:grid-cols-2 items-center" : "grid-cols-1"
          )}>
            {/* Metrics Grid */}
            <div className={cn(
              "grid gap-12 sm:gap-16",
              metrics.length === 2
                ? "grid-cols-2"
                : metrics.length >= 4
                ? "grid-cols-2"
                : "grid-cols-2 md:grid-cols-3"
            )}>
              {metrics.map((metric, i) => (
                <StatCard
                  key={i}
                  value={metric.value}
                  label={metric.label}
                  className="text-left items-start p-0 bg-transparent border-none shadow-none hover:shadow-none hover:translate-y-0"
                />
              ))}
            </div>

            {/* Testimonial Section */}
            {testimonial && (
              <div className="relative">
                <div 
                  className="absolute -left-8 top-0 bottom-0 w-px bg-border-strong hidden lg:block" 
                  aria-hidden="true" 
                />
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  className="bg-transparent border-none shadow-none hover:translate-y-0 hover:shadow-none p-0 border-l-0"
                />
              </div>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
