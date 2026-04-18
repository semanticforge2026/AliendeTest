/**
 * GlossaryTemplate — RSC layout for /glossary/[term] pages.
 *
 * DESIGN GUARDRAIL:
 *   - Clear, distinct definition block.
 *   - Uses IntroBlock for hero consistency.
 *   - Editorial typography for expanded content.
 */
import type { GlossaryTerm } from "@/types/content";
import { siteConfig } from "@/data/config";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { SectionReveal } from "@/components/sections/section-reveal";
import { RelatedContentBlock, IntroBlock } from "@/components/blocks";

export function GlossaryTemplate({ page }: { page: GlossaryTerm }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Glossary", href: "/glossary" },
    { label: page.title, href: `/glossary/${page.term}` },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.label, href: `${siteConfig.url}${b.href}` }))}
      />

      <IntroBlock
        eyebrow="Architecture Glossary"
        headline={page.title}
        body={page.description}
        breadcrumbs={breadcrumbs}
        className="pb-0"
      />

      <section className="section-padding pt-12 lg:pt-16 container-premium">
        <SectionReveal>
          {/* Main Definition Content */}
          <div className="max-w-3xl space-y-10">
            <div className="rounded-card border-l-4 border-accent bg-surface px-8 py-8 shadow-premium">
               <p className="body-large font-semibold text-text-primary italic leading-relaxed">
                {page.description}
               </p>
            </div>

            <div className="space-y-8 body-base text-text-secondary leading-relaxed first-letter:text-4xl first-letter:font-heading first-letter:font-bold first-letter:text-accent first-letter:mr-2">
              <p>{page.definition}</p>
              {page.expandedContent && (
                <div
                  dangerouslySetInnerHTML={{ 
                    __html: page.expandedContent
                      .replace(/\n/g, "<br/>")
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") 
                  }}
                  className="space-y-6 pt-8 border-t border-border-subtle"
                />
              )}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Related internal links */}
      {(page.relatedTerms?.length || page.relatedServices?.length) && (
        <RelatedContentBlock
          heading="Explore Related Architecture"
          items={[
            ...(page.relatedTerms?.map((term) => ({
              label: term.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/glossary/${term}`,
            })) ?? []),
            ...(page.relatedServices?.map((slug) => ({
              label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/services/${slug}`,
              description: "View technical architecture",
            })) ?? []),
          ]}
        />
      )}
    </>
  );
}
