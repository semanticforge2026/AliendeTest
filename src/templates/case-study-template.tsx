/**
 * CaseStudyTemplate — RSC layout for /case-studies/[slug] pages.
 *
 * DESIGN GUARDRAIL:
 *   - Uses IntroBlock for hero consistency.
 *   - Metrics strip uses StatCard with borderless styling.
 *   - Story grid (Challenge/Approach/Results) uses standardized layout.
 */
import type { CaseStudy } from "@/types/content";
import { siteConfig } from "@/data/config";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/schema";
import { SectionReveal } from "@/components/sections/section-reveal";
import { StatCard } from "@/components/cards/stat-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { FAQBlock, CTABand, RelatedContentBlock, IntroBlock } from "@/components/blocks";
import { cn } from "@/lib/utils";

export function CaseStudyTemplate({ page }: { page: CaseStudy }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: page.client, href: `/case-studies/${page.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.label, href: `${siteConfig.url}${b.href}` }))}
      />
      <ArticleSchema
        headline={page.title}
        description={page.description}
        url={`${siteConfig.url}/case-studies/${page.slug}`}
        publishedTime={page.publishedTime}
        authorName="Aliende Architecture Team"
      />

      {/* Hero Intro */}
      <IntroBlock
        eyebrow={`${page.client} · ${page.industry.charAt(0).toUpperCase() + page.industry.slice(1)}`}
        headline={page.title}
        body={page.description}
        breadcrumbs={breadcrumbs}
        className="pb-0"
      />

      {/* Metrics Strip */}
      <section className="section-padding py-12 lg:py-16 bg-surface border-t border-b border-border-subtle">
        <div className="container-premium">
          <SectionReveal>
            <div className={cn(
              "grid gap-12",
              page.metrics.length <= 2 ? "grid-cols-2 max-w-2xl" : "grid-cols-2 md:grid-cols-4"
            )}>
              {page.metrics.map((m, i) => (
                <StatCard 
                  key={i} 
                  value={m.value} 
                  label={m.label}
                  className="p-0 bg-transparent border-none shadow-none hover:shadow-none hover:translate-y-0 text-left items-start"
                />
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding border-b border-border-subtle bg-background">
        <div className="container-premium">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
              {[
                { label: "The Challenge", body: page.challenge },
                { label: "Our Approach", body: page.approach },
                { label: "The Results", body: page.results },
              ].map((section) => (
                <article key={section.label} className="space-y-6">
                  <div className="h-px w-10 bg-accent" aria-hidden="true" />
                  <h2 className="heading-3">{section.label}</h2>
                  <p className="body-base leading-relaxed text-text-secondary">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonial */}
      {page.testimonial && (
        <section className="section-padding bg-surface border-b border-border-subtle">
          <div className="container-premium max-w-4xl">
            <SectionReveal>
              <TestimonialCard
                quote={page.testimonial.quote}
                author={page.testimonial.author}
                role={page.testimonial.role}
                className="bg-transparent border-none shadow-none hover:translate-y-0 hover:shadow-none p-0 border-l-0"
              />
            </SectionReveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      {page.faq && page.faq.length > 0 && <FAQBlock items={page.faq} />}

      {/* Internal Links */}
      {(page.relatedServices?.length || page.relatedCaseStudies?.length) && (
        <RelatedContentBlock
          heading="Explore Related Architecture"
          items={[
            ...(page.relatedServices?.map((slug) => ({
              label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/services/${slug}`,
            })) ?? []),
            ...(page.relatedCaseStudies?.map((slug) => ({
              label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/case-studies/${slug}`,
            })) ?? []),
          ]}
        />
      )}

      <CTABand {...page.cta} />
    </>
  );
}
