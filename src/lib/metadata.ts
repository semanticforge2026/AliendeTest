/**
 * =============================================================================
 * src/lib/metadata.ts — Page-Level Metadata Configurations
 * =============================================================================
 *
 * Static metadata objects for every named page. Import and re-export these from
 * each page file's `export const metadata = ...` export.
 *
 * SCALING:
 *   - Add a new export per page. Keep descriptions under 155 chars.
 *   - For dynamic routes (/services/[slug]) use generateMetadata() in the
 *     page file itself, pulling from the CMS/data source.
 *   - OG images: create /public/og/<page>.jpg at 1200×630. When dynamic OG
 *     generation is wired up via /app/api/og/route.tsx, switch the ogImage
 *     values to point to that endpoint with searchParams.
 * =============================================================================
 */

import { constructMetadata } from "@/lib/seo";
import type { Metadata } from "next";

// ---------------------------------------------------------------------------
// Home Page
// ---------------------------------------------------------------------------
export const homeMetadata: Metadata = constructMetadata({
  // No 'title' → uses absolute DEFAULT_TITLE (not the template)
  description:
    "Aliende builds deterministic AI automation and business management infrastructure for enterprise. Precision systems. Zero data retention. Full ownership.",
  ogImage: "/og/home.jpg",
  canonical: "/",
  keywords: [
    "AI automation",
    "enterprise AI",
    "business automation",
    "LLM integration",
    "workflow automation",
    "AI business management",
  ],
});

// ---------------------------------------------------------------------------
// Services Index
// ---------------------------------------------------------------------------
export const servicesMetadata: Metadata = constructMetadata({
  title: "Services",
  description:
    "Explore Aliende's suite of enterprise automation services — custom LLMs, workflow AI, compliance nets, and real-time analytics for modern businesses.",
  ogImage: "/og/services.jpg",
  canonical: "/services",
  keywords: ["AI services", "enterprise workflow", "business automation services"],
});

// ---------------------------------------------------------------------------
// Marketplace Index
// ---------------------------------------------------------------------------
export const marketplaceMetadata: Metadata = constructMetadata({
  title: "Marketplace",
  description:
    "Browse production-ready AI modules, infrastructure templates, and automation pipelines in the Aliende Marketplace. Deploy in minutes.",
  ogImage: "/og/marketplace.jpg",
  canonical: "/marketplace",
  keywords: ["AI marketplace", "automation templates", "AI modules", "enterprise tools"],
});

// ---------------------------------------------------------------------------
// Case Studies Index
// ---------------------------------------------------------------------------
export const caseStudiesMetadata: Metadata = constructMetadata({
  title: "Case Studies",
  description:
    "Proven enterprise outcomes. Explore Aliende's case studies covering logistics automation, compliance AI, and capital efficiency at scale.",
  ogImage: "/og/case-studies.jpg",
  canonical: "/case-studies",
});

// ---------------------------------------------------------------------------
// About Page
// ---------------------------------------------------------------------------
export const aboutMetadata: Metadata = constructMetadata({
  title: "About",
  description:
    "Learn how Aliende was founded to solve the mismatch between generic AI tools and real enterprise operational complexity.",
  ogImage: "/og/about.jpg",
  canonical: "/about",
});

// ---------------------------------------------------------------------------
// Blog / Journal Index
// ---------------------------------------------------------------------------
export const blogMetadata: Metadata = constructMetadata({
  title: "Journal",
  description:
    "Insights on AI architecture, business automation, and the future of operational intelligence from the Aliende team.",
  ogImage: "/og/blog.jpg",
  canonical: "/blog",
});

// ---------------------------------------------------------------------------
// Contact Page
// ---------------------------------------------------------------------------
export const contactMetadata: Metadata = constructMetadata({
  title: "Contact",
  description:
    "Book a technical consultation with the Aliende architecture team. Discuss custom LLM deployment, workflow automation, and enterprise integration scopes.",
  ogImage: "/og/contact.jpg",
  canonical: "/contact",
  // Contact page should be indexable — it drives conversions
});

// ---------------------------------------------------------------------------
// Privacy / Terms — noindex (legal boilerplate, no SEO value)
// ---------------------------------------------------------------------------
export const privacyMetadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  canonical: "/privacy",
  noIndex: true,
});

export const termsMetadata: Metadata = constructMetadata({
  title: "Terms of Service",
  canonical: "/terms",
  noIndex: true,
});
