import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "subtle" | "outline";
}

/**
 * Badge
 * Intended Usage: Status indicators, categories, versions.
 * Adheres to pill radii and warm surface elevations.
 */
export function Badge({ className, variant = "subtle", ...props }: BadgeProps) {
  const variants = {
    solid: "bg-text-primary text-white border-transparent",
    subtle: "bg-surface-elevated text-text-primary border-border-subtle shadow-premium",
    outline: "text-text-primary border-border-strong bg-transparent",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

/*
  Example Usage:
  <Badge variant="subtle">Early Access</Badge>
*/
