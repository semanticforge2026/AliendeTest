/**
 * /glossary/[term] — Glossary Term Page
 *
 * HOW TO ADD A NEW TERM:
 *   1. Create src/content/glossary/<term>.ts
 *   2. Register in src/content/glossary/index.ts
 *   3. Appears in sitemap automatically.
 *
 * NOTE: Unknown terms gracefully serve a "coming soon" page (no notFound())
 * so that Google can discover /glossary/<term> URLs from internal links
 * before the definition is written.
 */
import type { Metadata } from "next";
import { constructMetadata, glossaryCanonical } from "@/lib/seo";
import { getGlossaryTermBySlug, getAllGlossaryTermSlugs } from "@/content/glossary";
import { GlossaryTemplate } from "@/templates/glossary-template";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { siteConfig } from "@/data/config";
import { SectionReveal } from "@/components/sections/section-reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term } = await params;
  const page = getGlossaryTermBySlug(term);
  const displayTerm = term.replace(/-/g, " ");

  if (!page) {
    return constructMetadata({
      title: `What is ${displayTerm}?`,
      description: `Definition of ${displayTerm} in the context of AI automation and enterprise technology.`,
      canonical: glossaryCanonical(term),
    });
  }

  return constructMetadata({
    title: page.title,
    description: page.description,
    canonical: glossaryCanonical(term),
    ...(page.metadata ?? {}),
  });
}

export function generateStaticParams() {
  return getAllGlossaryTermSlugs().map((term) => ({ term }));
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term } = await params;
  const page = getGlossaryTermBySlug(term);

  // Graceful fallback for uncreated terms (useful for pre-linking)
  if (!page) {
    const displayTerm = term.replace(/-/g, " ");
    return (
      <>
        <BreadcrumbSchema items={[
          { name: "Home", href: siteConfig.url },
          { name: "Glossary", href: `${siteConfig.url}/glossary` },
          { name: displayTerm, href: `${siteConfig.url}/glossary/${term}` },
        ]} />
        <div className="container-premium section-padding">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Glossary</p>
            <h1 className="heading-1 mb-6 capitalize">{displayTerm}</h1>
            <p className="body-large text-text-secondary">
              This definition is being prepared. Check back soon, or{" "}
              <a href="/contact" className="text-accent underline underline-offset-4 hover:text-accent-hover transition-colors">
                contact us
              </a>{" "}
              to discuss how this concept applies to your operations.
            </p>
          </SectionReveal>
        </div>
      </>
    );
  }

  return <GlossaryTemplate page={page} />;
}
