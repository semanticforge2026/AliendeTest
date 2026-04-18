/**
 * FAQAccordion — Accessible accordion for Question & Answer content.
 *
 * ACCESSIBILITY:
 *   - Each trigger has aria-expanded and a unique aria-controls ID.
 *   - Each panel has a unique id matching its trigger's aria-controls.
 *   - Keyboard: Enter/Space toggles; natural tab order flows trigger → next.
 *   - Reduced motion: Framer AnimatePresence respects useReducedMotion.
 *
 * DESIGN GUARDRAIL:
 *   - One item open at a time (controlled by openIndex state).
 *   - Border shifts from border-subtle → accent (not text-primary) on open.
 *   - The toggle icon changes from Plus → Minus with a rotate transition.
 */
"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    question: string;
    answer: string | React.ReactNode;
  }[];
}

export function FAQAccordion({ items, className, ...props }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Generate stable IDs for each item (needed for aria-controls)
  const ids = React.useId();

  return (
    <div
      className={cn("w-full divide-y divide-border-subtle", className)}
      {...props}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${ids}-trigger-${index}`;
        const panelId  = `${ids}-panel-${index}`;

        return (
          <div key={index}>
            {/* Trigger */}
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={cn(
                "flex w-full items-center justify-between gap-6 py-6 text-left",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm",
                isOpen ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
              )}
            >
              <span className="font-heading text-base md:text-lg font-semibold tracking-tight leading-snug">
                {item.question}
              </span>
              {/* Rotating Plus/Minus via CSS rotate */}
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-strong transition-all duration-200",
                  isOpen
                    ? "bg-text-primary border-text-primary text-white rotate-45"
                    : "bg-transparent text-text-muted rotate-0"
                )}
                aria-hidden="true"
              >
                <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </button>

            {/* Panel */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? {} : { height: "auto", opacity: 1 }}
                  exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 body-base max-w-3xl">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
