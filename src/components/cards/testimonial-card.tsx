/**
 * TestimonialCard — Social proof section focusing on typography.
 *
 * DESIGN GUARDRAIL:
 *   - Quote uses body-large with tighter tracking and medium weight.
 *   - Semantic figure/blockquote/figcaption structure.
 *   - Author role uses label-overline for secondary metadata.
 *   - Vertical accent line on the left to ground the quote.
 */
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLElement> {
  quote: string;
  author: string;
  role?: string;
}

export function TestimonialCard({ quote, author, role, className, ...props }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "card-premium flex flex-col justify-between gap-8 border-l-4 border-l-accent",
        className
      )}
      {...props}
    >
      <blockquote className="relative">
        <p className="font-sans text-lg md:text-xl font-medium tracking-tight text-text-primary leading-relaxed italic">
          "{quote}"
        </p>
      </blockquote>
      
      <figcaption className="border-t border-border-subtle pt-6">
        <div className="font-heading font-semibold text-text-primary mb-1">
          {author}
        </div>
        {role && (
          <div className="label-overline">
            {role}
          </div>
        )}
      </figcaption>
    </figure>
  );
}

/*
  Example Usage:
  <TestimonialCard
    quote="These custom LLM integrations fundamentally changed how we manage high-ticket pipelines."
    author="Sarah Jenkins"
    role="Director of Operations, Kora"
  />
*/
