/**
 * SectionReveal — Scroll-triggered fade-in wrapper (Client Component)
 *
 * DESIGN GUARDRAIL:
 *   - y: 20 (not 30) — subtler motion feels more expensive, less web-template.
 *   - duration: 0.65s with cinematic ease. Do not increase.
 *   - viewport margin: -80px — trigger slightly before element enters view.
 *   - useReducedMotion: when true, all animation values collapse to identity.
 *     This is the JS-level complement to the CSS @media prefers-reduced-motion.
 *
 * EXTENSION:
 *   - Add a `direction` prop ("up" | "left" | "right") for horizontal reveals.
 *   - Use the `delay` prop sparingly — only for sibling elements staggered
 *     inside the same viewport (not across sections).
 */
"use client";

import * as React from "react";
import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  /** Seconds to wait before animation begins. Max ~0.3 for page sections. */
  delay?: number;
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  ...props
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.65,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1], // Expo out — cinematic, not bouncy
      }}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/*
  Usage:
  <SectionReveal delay={0.1}>
    <MySection />
  </SectionReveal>

  With class override:
  <SectionReveal className="max-w-3xl mx-auto">
    <article>…</article>
  </SectionReveal>
*/
