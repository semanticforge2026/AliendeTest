/**
 * CaseStudyCard — Featured case study tile.
 *
 * SEMANTIC NOTE:
 *   Semantic article with a visible h3. role="link" on div was incorrect and
 *   has been removed. Wrap in <Link> when used in a navigable context.
 *
 * DESIGN GUARDRAIL:
 *   - Client label uses label-overline utility (0.6875rem, wide tracking).
 *   - Metric number uses Manrope font-light — large and elegant.
 *   - Hover: title shifts to accent, card lifts. No color flash.
 *   - min-h-[280px] ensures card has presence even with short titles.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

export interface CaseStudyCardProps extends React.HTMLAttributes<HTMLElement> {
  client: string;
  title: string;
  metric?: string;
  metricLabel?: string;
}

export function CaseStudyCard({
  client,
  title,
  metric,
  metricLabel,
  className,
  ...props
}: CaseStudyCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col justify-between overflow-hidden rounded-card border border-border-subtle bg-surface-elevated",
        "transition-[transform,box-shadow,border-color] duration-300",
        "hover:-translate-y-1 hover:border-border-strong hover:shadow-premium-hover",
        "min-h-[280px]",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        {/* Client label */}
        <p className="label-overline mb-5">{client}</p>

        {/* Title */}
        <h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-text-primary leading-snug mb-auto max-w-xl text-balance transition-colors duration-150 group-hover:text-accent-deep">
          {title}
        </h3>
      </div>

      {/* Footer row */}
      <div className="flex items-end justify-between gap-4 border-t border-border-subtle px-8 lg:px-10 py-6">
        {/* Read more hint */}
        <span
          className="flex items-center gap-2 text-sm font-medium text-text-muted transition-colors duration-150 group-hover:text-accent"
          aria-hidden="true"
        >
          Read case study
          <MoveRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={2}
          />
        </span>

        {/* Key metric */}
        {metric && (
          <div className="text-right shrink-0">
            <div className="font-heading text-3xl md:text-4xl font-light tracking-tight text-text-primary tabular-nums">
              {metric}
            </div>
            {metricLabel && (
              <div className="label-overline mt-1">{metricLabel}</div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
