/**
 * =============================================================================
 * src/lib/schema.ts — JSON-LD Structured Data Factories
 * =============================================================================
 *
 * Pure TypeScript data factories for every JSON-LD schema type used on the
 * site. These return plain JS objects that are then passed to the schema
 * components in src/components/seo/ for rendering.
 *
 * WHY FACTORIES?
 *   Keeping the data shape as plain TS objects means they can be tested,
 *   stored in a CMS, or composed without touching JSX. The components are
 *   only responsible for the <script> tag injection.
 *
 * SCHEMA TYPES COVERED:
 *   - Organization     → global, mounted in root layout
 *   - WebSite          → global, mounted in root layout (enables Sitelinks)
 *   - Service          → individual service pages / cards
 *   - BreadcrumbList   → any nested route
 *   - FAQPage          → FAQ sections (homepage & /faq)
 *   - Article          → blog posts and case studies
 *
 * SCALING:
 *   - Add new factories below for Product, Course, Event, VideoObject etc.
 *   - Replace placeholder CMS data with real content API calls.
 * =============================================================================
 */

import { siteConfig } from "@/data/config";

// ---------------------------------------------------------------------------
// Shared Types
// ---------------------------------------------------------------------------

export interface SchemaOrganization {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint?: {
    email: string;
    telephone?: string;
    contactType: string;
  };
}

export interface SchemaWebSite {
  url: string;
  name: string;
  /** Enable Google Sitelinks search box via potentialAction */
  searchAction?: boolean;
}

export interface SchemaService {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
}

export interface SchemaBreadcrumbItem {
  name: string;
  /** Absolute URL */
  href: string;
}

export interface SchemaFAQItem {
  question: string;
  answer: string;
}

export interface SchemaArticle {
  headline: string;
  description: string;
  url: string;
  publishedTime: string;
  modifiedTime?: string;
  authorName: string;
  imageUrl?: string;
}

// ---------------------------------------------------------------------------
// Factory: Organization
// ---------------------------------------------------------------------------

export function buildOrganizationSchema(
  data: SchemaOrganization
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: {
      "@type": "ImageObject",
      url: data.logo,
    },
    description: data.description,
    sameAs: data.sameAs,
    ...(data.contactPoint && {
      contactPoint: {
        "@type": "ContactPoint",
        email: data.contactPoint.email,
        ...(data.contactPoint.telephone && {
          telephone: data.contactPoint.telephone,
        }),
        contactType: data.contactPoint.contactType,
      },
    }),
  };
}

// ---------------------------------------------------------------------------
// Factory: WebSite
// ---------------------------------------------------------------------------

export function buildWebSiteSchema(
  data: SchemaWebSite
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: data.url,
    name: data.name,
    ...(data.searchAction && {
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${data.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    }),
  };
}

// ---------------------------------------------------------------------------
// Factory: Service
// ---------------------------------------------------------------------------

export function buildServiceSchema(
  data: SchemaService
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      "@type": "Organization",
      name: data.provider || siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: data.areaServed || "Worldwide",
    serviceType: "AI Automation & Business Management",
  };
}

// ---------------------------------------------------------------------------
// Factory: BreadcrumbList
// ---------------------------------------------------------------------------

export function buildBreadcrumbSchema(
  items: SchemaBreadcrumbItem[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  };
}

// ---------------------------------------------------------------------------
// Factory: FAQPage
// ---------------------------------------------------------------------------

export function buildFAQSchema(
  items: SchemaFAQItem[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// Factory: Article (for Blog Posts and Case Studies)
// ---------------------------------------------------------------------------

export function buildArticleSchema(
  data: SchemaArticle
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    url: data.url,
    datePublished: data.publishedTime,
    dateModified: data.modifiedTime || data.publishedTime,
    author: {
      "@type": "Person",
      name: data.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    ...(data.imageUrl && {
      image: {
        "@type": "ImageObject",
        url: data.imageUrl,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
  };
}

// ---------------------------------------------------------------------------
// Default placeholder data — replace with CMS queries in production
// ---------------------------------------------------------------------------

export const defaultOrganizationData: SchemaOrganization = {
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description:
    "Aliende builds deterministic AI automation and business management infrastructure for modern enterprises.",
  sameAs: [
    siteConfig.links.twitter,
    `https://linkedin.com/company/aliende`,
  ],
  contactPoint: {
    email: "architecture@aliende.com",
    telephone: "+44-20-7946-0958",
    contactType: "technical support",
  },
};

export const defaultWebSiteData: SchemaWebSite = {
  url: siteConfig.url,
  name: siteConfig.name,
  searchAction: true,
};
