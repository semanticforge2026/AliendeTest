/**
 * ServiceCard — Capability tile for the services grid.
 *
 * SEMANTIC NOTE:
 *   This is an <article> (self-contained, linkable content unit), not a div
 *   with role="button". If clicking should navigate, wrap in <Link> instead.
 *
 * DESIGN GUARDRAIL:
 *   - Icon container uses bg-accent-wash (not bg-background) for warmth.
 *   - Arrow micro-animation: translate-x-1 on group-hover only.
 *   - card-premium handles the shared lift + shadow transition.
 *   - Minimum height via flex-col + flex-1 on body ensures aligned card bottoms
 *     in grid rows.
 *
 * ACCESSIBILITY:
 *   - card-premium cards are not interactive themselves; the "Learn more" text
 *     is a presentational label. If cards need to be clickable, wrap in <Link>.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

export interface ServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  className,
  ...props
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "card-premium group flex flex-col hover:border-border-strong",
        className
      )}
      {...props}
    >
      {/* Icon */}
      {icon && (
        <div
          className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-wash text-accent-deep"
          aria-hidden="true"
        >
          {/* Clone icon with consistent size */}
          {React.isValidElement(icon)
            ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
                className: "h-5 w-5",
              })
            : icon}
        </div>
      )}

      {/* Content */}
      <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-3">
        {title}
      </h3>
      <p className="body-base mb-8 flex-1">{description}</p>

      {/* Action hint — not an interactive element */}
      <div
        className="mt-auto flex items-center gap-2 text-sm font-medium text-text-muted transition-colors duration-150 group-hover:text-accent"
        aria-hidden="true"
      >
        Learn more
        <MoveRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
        />
      </div>
    </article>
  );
}

/*
  Usage:
  import { Briefcase } from "lucide-react";
  <ServiceCard
    icon={<Briefcase />}
    title="Workflow AI"
    description="Deterministic agents that replace manual back-office routing."
  />
*/
