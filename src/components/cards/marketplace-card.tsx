/**
 * MarketplaceCard — Product/module tile for the marketplace grid.
 *
 * SEMANTIC NOTE:
 *   Wrapped in <article> — self-contained content unit. If navigable, wrap in <Link>.
 *   role="link" on a div was incorrect and has been removed.
 *
 * DESIGN GUARDRAIL:
 *   - Image placeholder uses a minimal warm gradient — no "Asset Preview" text.
 *   - Image scale on hover is 102% — subtle enough to not distract.
 *   - Price is right-aligned; title fills remaining space.
 */
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface MarketplaceCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  category: string;
  imageSrc?: string;
  price?: string;
}

export function MarketplaceCard({
  title,
  category,
  imageSrc,
  price,
  className,
  ...props
}: MarketplaceCardProps) {
  return (
    <article
      className={cn(
        "card-premium group cursor-default overflow-hidden p-0 hover:border-border-strong",
        className
      )}
      {...props}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-card bg-gradient-to-br from-surface to-accent-wash">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""          // Decorative — title below is the accessible label
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          /* Warm neutral placeholder grid — no placeholder text */
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <rect x="6" y="6" width="16" height="16" rx="2" fill="currentColor" opacity=".4" />
              <rect x="26" y="6" width="16" height="16" rx="2" fill="currentColor" opacity=".6" />
              <rect x="6" y="26" width="16" height="16" rx="2" fill="currentColor" opacity=".6" />
              <rect x="26" y="26" width="16" height="16" rx="2" fill="currentColor" opacity=".4" />
            </svg>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <Badge variant="outline" className="mb-3">{category}</Badge>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-base font-semibold tracking-tight text-text-primary leading-snug">
            {title}
          </h3>
          {price && (
            <span className="shrink-0 text-sm font-semibold text-text-muted tabular-nums">
              {price}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
