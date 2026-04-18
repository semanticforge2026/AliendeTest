/**
 * IntroBlock — Page hero/intro section
 *
 * DESIGN GUARDRAIL:
 *   - h1 uses heading-1 (4xl to 7xl responsive).
 *   - Breadcrumbs are fully accessible with aria-label and aria-current.
 *   - eyebrow uses Badge component for consistent status styling.
 *   - body uses body-large with text-balance for editorial layout.
 *   - Section padding follows the global rhythm (section-padding).
 */
import { SectionReveal } from "@/components/sections/section-reveal";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IntroBlockProps {
  /** Small label shown above the headline */
  eyebrow?: string;
  headline: string;
  body: string;
  /** Breadcrumb items rendered as an accessible nav */
  breadcrumbs?: { label: string; href: string }[];
  className?: string;
}

export function IntroBlock({ eyebrow, headline, body, breadcrumbs, className }: IntroBlockProps) {
  return (
    <section 
      className={cn("section-padding pb-12 md:pb-16 lg:pb-20", className)}
      aria-labelledby="intro-headline"
    >
      <div className="container-premium">
        <SectionReveal>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumbs" className="mb-10 lg:mb-12">
              <ol className="flex flex-wrap items-center gap-2.5 text-[13px] font-medium text-text-muted">
                {breadcrumbs.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-2.5">
                    {i > 0 && <span className="opacity-40" aria-hidden="true">/</span>}
                    {i < breadcrumbs.length - 1 ? (
                      <Link 
                        href={crumb.href} 
                        className="transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-text-primary" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <Badge variant="subtle" className="mb-6 lg:mb-8 px-4 py-1.5 bg-accent-wash text-accent-deep border-accent/20">
              {eyebrow}
            </Badge>
          )}

          <div className="max-w-4xl">
            <h1 id="intro-headline" className="heading-1 mb-8 leading-[1.05]">
              {headline}
            </h1>
            <p className="body-large max-w-2xl text-balance">
              {body}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
