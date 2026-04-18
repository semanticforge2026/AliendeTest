/**
 * =============================================================================
 * src/lib/seo.ts — Core SEO Utility Suite
 * =============================================================================
 *
 * Central hub for all metadata generation. Every page should import from here
 * rather than constructing raw Metadata objects manually. This keeps the title
 * template, canonical strategy, and OG config in one place so changes
 * propagate everywhere automatically.
 *
 * SCALING:
 *   - For new sections (blog, solutions, glossary), add a branch in
 *     `constructMetadata` and a dedicated helper like `constructBlogMetadata`.
 *   - OG images: currently point to static `/og/*.jpg`. Replace with
 *     Next.js /api/og dynamic generation when ready.
 *   - Canonical strategy: always use absolute URLs built with `siteConfig.url`.
 *     Never use relative paths for canonicals.
 * =============================================================================
 */

import type { Metadata } from "next";
import { siteConfig } from "@/data/config";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MetadataOptions {
  /** Short page title — will be wrapped in the site template */
  title?: string;
  /** Page-level meta description. Keep under 155 characters. */
  description?: string;
  /** Absolute path to OG image, e.g. "/og/homepage.jpg" */
  ogImage?: string;
  /** Relative canonical path, e.g. "/services/workflow-ai" */
  canonical?: string;
  /** If true, adds robots noindex + nofollow. Use for drafts/private pages. */
  noIndex?: boolean;
  /** Open Graph type — defaults to "website", use "article" for blog posts */
  ogType?: "website" | "article";
  /** Article-specific. ISO date string, e.g. "2026-01-15T00:00:00Z" */
  publishedTime?: string;
  /** Article authors array */
  authors?: string[];
  /** Keywords array — use sparingly, Google largely ignores them */
  keywords?: string[];
}

// ---------------------------------------------------------------------------
// Root title template
// Produces: "Services | Aliende" or just "Aliende" for homepage
// ---------------------------------------------------------------------------
export const TITLE_TEMPLATE = "%s | Aliende";
export const DEFAULT_TITLE = "Aliende — Executive AI Infrastructure";

// ---------------------------------------------------------------------------
// Core metadata factory
// ---------------------------------------------------------------------------

export function constructMetadata({
  title,
  description = siteConfig.description,
  ogImage = `${siteConfig.url}/og/default.jpg`,
  canonical,
  noIndex = false,
  ogType = "website",
  publishedTime,
  authors,
  keywords,
}: MetadataOptions = {}): Metadata {
  // Build absolute canonical URL. If no path is passed, we omit canonical
  // (Next.js will use the current URL by default, which is usually fine).
  const canonicalUrl = canonical
    ? `${siteConfig.url}${canonical}`
    : undefined;

  return {
    // -------------------------------------------------------------------------
    // Title — uses template for sub-pages, default for root layout
    // -------------------------------------------------------------------------
    title: title
      ? { default: title, template: TITLE_TEMPLATE }
      : { absolute: DEFAULT_TITLE },

    description,

    // -------------------------------------------------------------------------
    // Canonical — critical for preventing duplicate content penalties
    // -------------------------------------------------------------------------
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),

    // -------------------------------------------------------------------------
    // Open Graph
    // -------------------------------------------------------------------------
    openGraph: {
      type: ogType,
      title: title || DEFAULT_TITLE,
      description,
      url: canonicalUrl || siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title || siteConfig.name} — Open Graph Image`,
        },
      ],
      ...(ogType === "article" &&
        publishedTime && {
          publishedTime,
          authors: authors || [],
        }),
    },

    // -------------------------------------------------------------------------
    // Twitter / X Card
    // -------------------------------------------------------------------------
    twitter: {
      card: "summary_large_image",
      site: "@aliende",
      creator: "@aliende",
      title: title || DEFAULT_TITLE,
      description,
      images: [ogImage],
    },

    // -------------------------------------------------------------------------
    // Keywords — optional, low SEO weight today but useful for brand signals
    // -------------------------------------------------------------------------
    ...(keywords?.length && { keywords }),

    // -------------------------------------------------------------------------
    // Robots — noindex for unpublished/private pages
    // -------------------------------------------------------------------------
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },

    // -------------------------------------------------------------------------
    // Additional tech tags
    // -------------------------------------------------------------------------
    metadataBase: new URL(siteConfig.url),
    authors: authors?.map((name) => ({ name })),
    creator: siteConfig.name,
    publisher: siteConfig.name,
  };
}

// ---------------------------------------------------------------------------
// Breadcrumb URL helpers
// Used to build deterministic canonical paths for dynamic routes.
// ---------------------------------------------------------------------------

export function serviceCanonical(slug: string) {
  return `/services/${slug}`;
}
export function marketplaceCanonical(slug: string) {
  return `/marketplace/${slug}`;
}
export function caseStudyCanonical(slug: string) {
  return `/case-studies/${slug}`;
}
export function blogCanonical(slug: string) {
  return `/blog/${slug}`;
}
export function solutionCanonical(industry: string) {
  return `/solutions/${industry}`;
}
export function glossaryCanonical(term: string) {
  return `/glossary/${term}`;
}
