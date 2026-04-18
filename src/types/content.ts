/**
 * =============================================================================
 * src/types/content.ts — Master Content Type Definitions
 * =============================================================================
 *
 * Every content model used across the site is typed here.
 *
 * RULES FOR CONTRIBUTORS:
 *   1. All new content types must be defined here first.
 *   2. Every field must have a JSDoc comment explaining its purpose.
 *   3. Optional fields use `?`. Required fields are always explicit.
 *   4. Do NOT import from this file in client components — types are
 *      erased at compile time, but keeping imports server-side is cleaner.
 *
 * EXTENSION GUIDE:
 *   - Adding a field? Add it here, then update the content data file(s)
 *     and the template that consumes it.
 *   - Adding a content type? Follow the existing pattern:
 *     1. Define the interface here
 *     2. Create content files in src/content/<type>/
 *     3. Create a template in src/templates/
 *     4. Wire the dynamic route in src/app/<type>/[slug]/page.tsx
 * =============================================================================
 */

import type { MetadataOptions } from "@/lib/seo";

// ---------------------------------------------------------------------------
// Shared primitives reused across models
// ---------------------------------------------------------------------------

/** A single stat/metric callout */
export interface Metric {
  value: string;
  label: string;
}

/** A processual step in a methodology */
export interface ProcessStep {
  /** Short ordinal label, e.g. "01 / Discovery" */
  step: string;
  title: string;
  description: string;
}

/** A benefit or feature item */
export interface BenefitItem {
  /** Optional lucide-react icon name — resolved in the block component */
  icon?: string;
  title: string;
  description: string;
}

/** A feature grid item — shorter than BenefitItem, no icon required */
export interface FeatureItem {
  title: string;
  description: string;
}

/** A single FAQ entry */
export interface FAQItem {
  question: string;
  /** Plain string or rich text — blocks handle the rendering */
  answer: string;
}

/** An author reference */
export interface Author {
  name: string;
  role?: string;
  /** Optional avatar path for blog bylines */
  avatar?: string;
}

/** A testimonial quote */
export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

/** A CTA configuration — used in the CTABand block */
export interface CTAConfig {
  heading: string;
  subtext?: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
}

/** A related content link pointing to another page on the site */
export interface RelatedLink {
  label: string;
  href: string;
  /** Short description shown in the related content card */
  description?: string;
}

// ---------------------------------------------------------------------------
// Service Detail Page
// /services/[slug]
// ---------------------------------------------------------------------------

export interface ServicePage {
  /** URL slug, e.g. "workflow-ai" */
  slug: string;
  /** Page title — used in metadata title template */
  title: string;
  /** One-line commercial description — also used as meta description */
  description: string;
  /** Large editorial headline displayed on the page */
  headline: string;
  /** Supporting paragraph under the headline */
  intro: string;

  benefits: BenefitItem[];
  process: ProcessStep[];
  features: FeatureItem[];
  metrics: Metric[];
  faq: FAQItem[];
  testimonial?: Testimonial;
  cta: CTAConfig;

  /** Slugs of related services for the internal linking module */
  relatedServices?: string[];
  /** Slugs of related solutions for cross-linking */
  relatedSolutions?: string[];

  /** Overrides for the metadata utility — merged with defaults */
  metadata?: Partial<MetadataOptions>;
}

// ---------------------------------------------------------------------------
// Industry Solution Page
// /solutions/[industry]
// ---------------------------------------------------------------------------

export interface SolutionPage {
  /** URL segment, e.g. "logistics" */
  industry: string;
  title: string;
  description: string;
  headline: string;
  intro: string;

  /** Industry-specific use cases shown in the benefits block */
  useCases: BenefitItem[];
  process: ProcessStep[];
  metrics: Metric[];
  /** Industry-specific feature highlights */
  features: FeatureItem[];
  testimonial?: Testimonial;
  faq: FAQItem[];
  cta: CTAConfig;

  /** Related service slugs — links into /services/[slug] */
  relatedServices?: string[];
  /** Related case study slugs — links into /case-studies/[slug] */
  relatedCaseStudies?: string[];

  metadata?: Partial<MetadataOptions>;
}

// ---------------------------------------------------------------------------
// Blog Post
// /blog/[slug]
// ---------------------------------------------------------------------------

export interface BlogPost {
  slug: string;
  title: string;
  /** ~155 char commercial meta description */
  description: string;
  /** ISO 8601 date string */
  publishedTime: string;
  modifiedTime?: string;
  author: Author;
  /** Primary category, e.g. "AI Strategy" */
  category: string;
  tags: string[];
  /** Hero image path relative to /public */
  heroImage?: string;
  /** Rich text content — stored as React JSX or MDX string */
  content: string;
  /** Estimated reading time in minutes */
  readingTime?: number;

  relatedPosts?: string[];
  relatedServices?: string[];
  cta?: CTAConfig;

  metadata?: Partial<MetadataOptions>;
}

// ---------------------------------------------------------------------------
// Case Study
// /case-studies/[slug]
// ---------------------------------------------------------------------------

export interface CaseStudy {
  slug: string;
  /** Client company name */
  client: string;
  /** Target industry — used for filtering and internal linking */
  industry: string;
  title: string;
  description: string;
  /** ISO 8601 date string */
  publishedTime: string;

  challenge: string;
  approach: string;
  results: string;

  metrics: Metric[];
  testimonial?: Testimonial;
  faq?: FAQItem[];
  cta: CTAConfig;

  relatedServices?: string[];
  relatedCaseStudies?: string[];

  metadata?: Partial<MetadataOptions>;
}

// ---------------------------------------------------------------------------
// Marketplace Product Page
// /marketplace/[slug]
// ---------------------------------------------------------------------------

export interface MarketplaceProduct {
  slug: string;
  title: string;
  description: string;
  category: string;
  price: string;
  /** "one-time" | "monthly" | "enterprise" */
  pricingModel: "one-time" | "monthly" | "enterprise";
  headline: string;
  intro: string;

  features: FeatureItem[];
  benefits: BenefitItem[];
  /** Technical integration requirements */
  integrations: string[];
  useCases: string[];
  faq: FAQItem[];
  cta: CTAConfig;

  relatedProducts?: string[];
  relatedServices?: string[];

  metadata?: Partial<MetadataOptions>;
}

// ---------------------------------------------------------------------------
// Comparison Page
// /compare/[slug]  (e.g. /compare/aliende-vs-zapier)
// ---------------------------------------------------------------------------

export interface ComparisonRow {
  feature: string;
  /** Aliende's capability on this feature */
  aliende: string;
  /** Competitor's capability */
  competitor: string;
  /** true = Aliende wins this row */
  aliendeLead?: boolean;
}

export interface ComparisonPage {
  slug: string;
  /** Full title, e.g. "Aliende vs Zapier" */
  title: string;
  description: string;
  headline: string;
  intro: string;
  /** Competitor brand name */
  competitorName: string;

  comparisonTable: ComparisonRow[];
  summary: string;
  faq: FAQItem[];
  cta: CTAConfig;

  relatedServices?: string[];

  metadata?: Partial<MetadataOptions>;
}

// ---------------------------------------------------------------------------
// Glossary Term
// /glossary/[term]
// ---------------------------------------------------------------------------

export interface GlossaryTerm {
  /** URL slug, e.g. "deterministic-ai" */
  term: string;
  /** Display title, e.g. "Deterministic AI" */
  title: string;
  /** Short one-line definition — used as meta description */
  description: string;
  /** Full definition — rendered in the body */
  definition: string;
  /** Optional extended explanation, examples, context */
  expandedContent?: string;

  relatedTerms?: string[];
  relatedServices?: string[];

  metadata?: Partial<MetadataOptions>;
}
