/**
 * StatCard — Displaying metrics or KPIs elegantly.
 *
 * DESIGN GUARDRAIL:
 *   - Value uses Manrope font-light for a thin, sophisticated look.
 *   - Label uses label-overline for uppercase, wide-tracked editorial feel.
 *   - Card is transparent by default when used in strips; can be card-premium in grids.
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
}

export function StatCard({ value, label, className, ...props }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 text-center",
        className
      )}
      {...props}
    >
      <strong className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-text-primary">
        {value}
      </strong>
      <div className="label-overline">
        {label}
      </div>
    </div>
  );
}

/*
  Example Usage:
  <StatCard value="99.9%" label="Uptime Guarantee" />
*/
