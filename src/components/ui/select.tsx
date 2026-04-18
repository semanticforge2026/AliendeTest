import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

/**
 * Select
 * Intended Usage: Native dropdown selection.
 * Styled to override default OS styling with our premium minimal border system.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            "flex h-12 w-full appearance-none rounded-card border border-border-strong bg-surface px-4 py-2 pr-10 text-sm text-text-primary transition-colors hover:border-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
      </div>
    );
  }
);
Select.displayName = "Select";

/*
  Example Usage:
  <Select>
    <option value="1">Entry Level Asset</option>
    <option value="2">Executive Dashboard</option>
  </Select>
*/
