/**
 * ServiceTemplate — Shared RSC layout for all /services/[slug] pages.
 *
 * DESIGN GUARDRAIL:
 *   - Strict block hierarchy for consistent page flow.
 *   - Breadcrumbs are fully managed and passed to IntroBlock.
 *   - Auto-injects Service and FAQ schemas.
 */
import type { ServicePage } from "@/types/content";
import { siteConfig } from "@/data/config";
import { getRelatedServices } from "@/content/services";
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

interface ServiceTemplateProps {
  page: ServicePage;
}

export function ServiceTemplate({ page }: ServiceTemplateProps) {
  const relatedServices = getRelatedServices(page.relatedServices || []);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: page.title, href: `/services/${page.slug}` },
  ];

  const schemaBreadcrumbs = breadcrumbs.map((b) => ({
    name: b.label,
    href: `${siteConfig.url}${b.href}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaBreadcrumbs} />
      <ServiceSchema
        name={page.title}
        description={page.description}
        url={`${siteConfig.url}/services/${page.slug}`}
      />
      {page.faq.length > 0 && <FAQPageSchema items={page.faq} />}

      <IntroBlock
        eyebrow="Aliende Infrastructure"
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
        heading="Why it works."
        items={page.benefits}
        surface="default"
      />

      {page.process.length > 0 && (
        <ProcessBlock steps={page.process} />
      )}

      {page.features.length > 0 && (
        <FeatureGridBlock heading="Technical Capabilities" items={page.features} />
      )}

      {page.faq.length > 0 && (
        <FAQBlock items={page.faq} />
      )}

      {relatedServices.length > 0 && (
        <RelatedContentBlock
          heading="Related Services"
          items={relatedServices.map((s) => ({
            label: s.title,
            href: `/services/${s.slug}`,
            description: s.description,
          }))}
        />
      )}

      <CTABand {...page.cta} />
    </>
  );
}
