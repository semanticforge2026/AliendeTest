/**
 * RelatedContentBlock — Internal linking module for SEO and navigation.
 *
 * DESIGN GUARDRAIL:
 *   - Simple card grid for related resources.
 *   - h2 uses heading-3 with text-muted for subtle categorizing.
 *   - Cards use card-premium for consistent interactivity.
 */
import Link from "next/link";
import { SectionReveal } from "@/components/sections/section-reveal";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RelatedItem {
  label: string;
  href: string;
  description?: string;
}

interface RelatedContentBlockProps {
  heading?: string;
  items: RelatedItem[];
}

export function RelatedContentBlock({
  heading = "Related Resources",
  items,
}: RelatedContentBlockProps) {
  if (!items.length) return null;
  return (
    <section className="section-padding border-t border-border-subtle bg-background">
      <div className="container-premium">
        <SectionReveal>
          <h2 className="label-overline mb-12 text-text-muted">
            {heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-premium group flex flex-col justify-between gap-6 hover:border-border-strong transition-all duration-300"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 text-[13px] font-semibold text-text-muted transition-colors group-hover:text-accent" aria-hidden="true">
                  Read more <MoveRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
