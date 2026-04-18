/**
 * ComparisonTemplate — RSC layout for /compare/[slug] pages.
 *
 * DESIGN GUARDRAIL:
 *   - Transparent IntroBlock for high-intent entry.
 *   - The comparison table is the hero — clean hierarchy, clear winners.
 *   - Use checkmarks sparingly to signify relative advantage.
 */
import type { ComparisonPage } from "@/types/content";
import { siteConfig } from "@/data/config";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { CheckCircle, MinusCircle } from "lucide-react";
import { FAQBlock, CTABand, RelatedContentBlock, IntroBlock } from "@/components/blocks";
import { cn } from "@/lib/utils";

export function ComparisonTemplate({ page }: { page: ComparisonPage }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Compare", href: "/compare" },
    { label: page.title, href: `/compare/${page.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.label, href: `${siteConfig.url}${b.href}` }))}
      />

      {/* Hero Intro */}
      <IntroBlock
        eyebrow={`Architecture Comparison`}
        headline={page.headline}
        body={page.intro}
        breadcrumbs={breadcrumbs}
        className="pb-0"
      />

      {/* Comparison table */}
      <section className="section-padding py-16 lg:py-24 bg-surface border-t border-border-subtle">
        <div className="container-premium">
          <SectionReveal>
            <SectionHeading title={`Aliende vs. ${page.competitorName}`} />
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left" role="table">
                <thead>
                  <tr className="border-b-2 border-border-strong">
                    <th className="py-4 pr-8 font-heading font-semibold text-text-muted text-[10px] uppercase tracking-widest w-1/3">Core Feature</th>
                    <th className="py-4 pr-8 font-heading font-semibold text-accent text-[10px] uppercase tracking-widest w-1/3">Aliende Architecture</th>
                    <th className="py-4 font-heading font-semibold text-text-muted text-[10px] uppercase tracking-widest w-1/3">{page.competitorName}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {page.comparisonTable.map((row, i) => (
                    <tr key={i} className="group hover:bg-background/40 transition-colors">
                      <td className="py-6 pr-8 font-semibold text-text-primary text-sm">{row.feature}</td>
                      <td className="py-6 pr-8 text-sm text-text-secondary">
                        <span className={cn(
                          "flex items-start gap-2.5",
                          row.aliendeLead ? "text-text-primary font-semibold" : ""
                        )}>
                          {row.aliendeLead && <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />}
                          {row.aliende}
                        </span>
                      </td>
                      <td className="py-6 text-sm text-text-secondary">
                        <span className="flex items-start gap-2.5">
                          {row.aliendeLead && <MinusCircle className="h-4 w-4 text-text-muted mt-0.5 shrink-0" aria-hidden="true" />}
                          {row.competitor}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding border-t border-border-subtle bg-background">
        <div className="container-premium max-w-4xl">
          <SectionReveal>
            <h2 className="heading-2 mb-8">Executive Summary</h2>
            <p className="body-large text-text-secondary leading-relaxed">{page.summary}</p>
          </SectionReveal>
        </div>
      </section>

      {page.faq.length > 0 && <FAQBlock items={page.faq} />}

      {page.relatedServices?.length && (
        <RelatedContentBlock
          heading="Aliende Platform Architecture"
          items={page.relatedServices.map((slug) => ({
            label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            href: `/services/${slug}`,
          }))}
        />
      )}

      <CTABand {...page.cta} />
    </>
  );
}
