/**
 * ProcessStepCard — Step-by-step methodologies.
 *
 * DESIGN GUARDRAIL:
 *   - Semantic article wrapper.
 *   - Step counter uses label-overline + accent color.
 *   - Top border bar provides a visual timeline indicator in grid layouts.
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProcessStepCardProps extends React.HTMLAttributes<HTMLElement> {
  step: string;
  title: string;
  description: string;
}

export function ProcessStepCard({
  step,
  title,
  description,
  className,
  ...props
}: ProcessStepCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col pt-10 pb-8",
        "before:absolute before:left-0 before:top-0 before:h-px before:w-16 before:bg-accent",
        className
      )}
      {...props}
    >
      <div className="label-overline mb-5 text-accent">
        {step}
      </div>
      <h3 className="heading-3 mb-4 text-xl">
        {title}
      </h3>
      <p className="body-base">
        {description}
      </p>
    </article>
  );
}

/*
  Example Usage:
  <ProcessStepCard
    step="01 / Discovery"
    title="Architecture Review"
    description="We map your redundant operations and isolate the highest-yield automation vectors."
  />
*/
