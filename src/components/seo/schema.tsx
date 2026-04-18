/**
 * JSON-LD Schema Components
 * Each component injects a <script type="application/ld+json"> tag.
 * These are Server Components — they never add client bundle weight.
 *
 * Usage: import and mount anywhere in a page or layout.
 */

import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildArticleSchema,
  defaultOrganizationData,
  defaultWebSiteData,
  type SchemaOrganization,
  type SchemaWebSite,
  type SchemaService,
  type SchemaBreadcrumbItem,
  type SchemaFAQItem,
  type SchemaArticle,
} from "@/lib/schema";

// ---------------------------------------------------------------------------
// Helper: Renders any schema object as a <script> tag
// ---------------------------------------------------------------------------

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // dangerouslySetInnerHTML is the correct way to inject JSON-LD in React.
      // This is safe here because we control all data input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 0) }}
    />
  );
}

// ---------------------------------------------------------------------------
// Organization Schema
// Mount once in root layout. Do not repeat on sub-pages.
// ---------------------------------------------------------------------------

export function OrganizationSchema(props?: Partial<SchemaOrganization>) {
  const data = buildOrganizationSchema({ ...defaultOrganizationData, ...props });
  return <JsonLdScript data={data} />;
}

// ---------------------------------------------------------------------------
// WebSite Schema
// Mount once in root layout alongside OrganizationSchema.
// Enables Google Sitelinks Search Box when searchAction is true.
// ---------------------------------------------------------------------------

export function WebSiteSchema(props?: Partial<SchemaWebSite>) {
  const data = buildWebSiteSchema({ ...defaultWebSiteData, ...props });
  return <JsonLdScript data={data} />;
}

// ---------------------------------------------------------------------------
// Service Schema
// Mount on /services/[slug] pages and individual service sections.
// ---------------------------------------------------------------------------

export function ServiceSchema(props: SchemaService) {
  const data = buildServiceSchema(props);
  return <JsonLdScript data={data} />;
}

// ---------------------------------------------------------------------------
// BreadcrumbList Schema
// Mount on any page that lives 2+ levels deep.
// Example: Services → Workflow AI
// ---------------------------------------------------------------------------

export function BreadcrumbSchema({ items }: { items: SchemaBreadcrumbItem[] }) {
  const data = buildBreadcrumbSchema(items);
  return <JsonLdScript data={data} />;
}

// ---------------------------------------------------------------------------
// FAQPage Schema
// Mount on pages or sections containing FAQ content.
// Makes individual Q&A eligible for Google rich result display.
// ---------------------------------------------------------------------------

export function FAQPageSchema({ items }: { items: SchemaFAQItem[] }) {
  const data = buildFAQSchema(items);
  return <JsonLdScript data={data} />;
}

// ---------------------------------------------------------------------------
// Article Schema
// Mount on /blog/[slug] and /case-studies/[slug] pages.
// ---------------------------------------------------------------------------

export function ArticleSchema(props: SchemaArticle) {
  const data = buildArticleSchema(props);
  return <JsonLdScript data={data} />;
}
