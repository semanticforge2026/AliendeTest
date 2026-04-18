import * as React from "react";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

/**
 * PrimaryButton
 * Intended Usage: Primary CTAs, high-priority form submissions.
 * Extends standard HTML button with premium pill radii and warm color.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn-primary focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
PrimaryButton.displayName = "PrimaryButton";

/**
 * SecondaryButton
 * Intended Usage: Outline buttons, secondary actions, cancel buttons.
 * Integrates subtle shadowing and soft borders.
 */
export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn-secondary focus-visible:ring-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
SecondaryButton.displayName = "SecondaryButton";

/**
 * TextLinkCTA
 * Intended Usage: Soft actions inside cards, "Read more", or subtle links.
 * Includes a micro-directional movement on the arrow to signify continuity.
 */
export interface TextLinkCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showArrow?: boolean;
}

export const TextLinkCTA = React.forwardRef<HTMLButtonElement, TextLinkCTAProps>(
  ({ className, showArrow = true, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-text-secondary focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        {showArrow && (
           <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);
TextLinkCTA.displayName = "TextLinkCTA";

/*
  Example Usage:
  <PrimaryButton onClick={() => submit()}>Confirm Action</PrimaryButton>
  <TextLinkCTA showArrow>View Methodology</TextLinkCTA>
*/
