/**
 * SolutionTemplate — Shared RSC layout for all /solutions/[industry] pages.
 *
 * DESIGN GUARDRAIL:
 *   - Industry-specific context via eyebrows.
 *   - Use cases are mapped to the BenefitsBlock.
 *   - Full internal link mapping for high internal SEO authority.
 */
import type { SolutionPage } from "@/types/content";
import { siteConfig } from "@/data/config";
import { FAQPageSchema, BreadcrumbSchema, ServiceSchema } from "@/components/seo/schema";
import {
  IntroBlock,
  BenefitsBlock,
  ProcessBlock,
  FeatureGridBlock,
  ProofBlock,
  FAQBlock,
  CTABand,
  RelatedContentBlock,
} from "@/components/blocks";

export function SolutionTemplate({ page }: { page: SolutionPage }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: page.title, href: `/solutions/${page.industry}` },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.label, href: `${siteConfig.url}${b.href}` }))}
      />
      <ServiceSchema
        name={page.title}
        description={page.description}
        url={`${siteConfig.url}/solutions/${page.industry}`}
        areaServed="Worldwide"
      />
      {page.faq.length > 0 && <FAQPageSchema items={page.faq} />}

      <IntroBlock
        eyebrow={`${page.industry.charAt(0).toUpperCase() + page.industry.slice(1)} Logistics Solutions`}
        headline={page.headline}
        body={page.intro}
        breadcrumbs={breadcrumbs}
      />

      {page.metrics.length > 0 && (
        <ProofBlock 
          metrics={page.metrics} 
          testimonial={page.testimonial} 
          className="border-b"
        />
      )}

      <BenefitsBlock
        heading="Purpose-built for your industry."
        subheading="Use cases designed around your operational reality."
        items={page.useCases}
      />

      {page.process.length > 0 && <ProcessBlock steps={page.process} />}

      {page.features.length > 0 && (
        <FeatureGridBlock heading="Technical Capabilities" items={page.features} />
      )}

      {page.faq.length > 0 && <FAQBlock items={page.faq} />}

      {(page.relatedServices?.length || page.relatedCaseStudies?.length) && (
        <RelatedContentBlock
          heading="Internal Deep-Dives"
          items={[
            ...(page.relatedServices?.map((slug) => ({
              label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/services/${slug}`,
              description: "View technical service specifications",
            })) ?? []),
            ...(page.relatedCaseStudies?.map((slug) => ({
              label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/case-studies/${slug}`,
              description: "Read peer implementation story",
            })) ?? []),
          ]}
        />
      )}

      <CTABand {...page.cta} />
    </>
  );
}
