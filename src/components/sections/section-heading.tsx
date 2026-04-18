/**
 * SectionHeading — Standardized header structure for page sections.
 *
 * DESIGN GUARDRAIL:
 *   - mb-16 md:mb-24 spacing is standardized.
 *   - Centered variant for focused sections like FAQ or Process.
 *   - title uses heading-2; subtitle uses body-large.
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 lg:mb-20 flex flex-col w-full",
        centered ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
      {...props}
    >
      <h2 className="heading-2 mb-6 max-w-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="body-large max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/*
  Example Usage:
  <SectionHeading 
    title="Executive AI Integration" 
    subtitle="Scaling deterministic workflows without the overhead."
    centered 
  />
*/
