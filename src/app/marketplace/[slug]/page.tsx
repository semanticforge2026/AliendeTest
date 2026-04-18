/**
 * /marketplace/[slug] — Dynamic Marketplace Item Page
 *
 * SCALING: Replace MarketplaceData with a CMS type and real fetch.
 */
import type { Metadata } from "next";
import { constructMetadata, marketplaceCanonical } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/seo/schema";
import { SectionReveal } from "@/components/sections/section-reveal";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/config";

interface MarketplaceItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  price: string;
}

async function getItemBySlug(slug: string): Promise<MarketplaceItem | null> {
  // TODO: replace with real CMS query
  const items: Record<string, MarketplaceItem> = {
    "financial-reconciliation-agent": {
      slug: "financial-reconciliation-agent",
      title: "Financial Reconciliation Agent",
      category: "Finance",
      description: "Automates multi-ledger reconciliation with deterministic matching logic and exception flagging.",
      price: "Enterprise",
    },
    "support-triage-pipeline": {
      slug: "support-triage-pipeline",
      title: "Support Triage Pipeline",
      category: "Customer Success",
      description: "Routes inbound support tickets using intent classification and urgency scoring.",
      price: "$4,500",
    },
  };
  return items[slug] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getItemBySlug(slug);
  if (!item) return constructMetadata({ title: "Module Not Found", noIndex: true });

  return constructMetadata({
    title: item.title,
    description: item.description,
    ogImage: `/og/marketplace/${slug}.jpg`,
    canonical: marketplaceCanonical(slug),
    keywords: [item.category, "AI module", "automation template", item.title],
  });
}

export async function generateStaticParams() {
  return [
    "financial-reconciliation-agent",
    "support-triage-pipeline",
    "marketing-copy-engine",
    "hr-onboarding-bot",
    "supply-chain-predictor",
    "lead-scoring-model",
  ].map((slug) => ({ slug }));
}

export default async function MarketplaceItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getItemBySlug(slug);

  if (!item) {
    return (
      <div className="container-premium section-padding">
        <h1 className="heading-2">Module not found</h1>
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", href: siteConfig.url },
    { name: "Marketplace", href: `${siteConfig.url}/marketplace` },
    { name: item.title, href: `${siteConfig.url}/marketplace/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="container-premium section-padding">
        <SectionReveal>
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Home</a></li>
              <li>/</li>
              <li><a href="/marketplace" className="hover:text-text-primary transition-colors">Marketplace</a></li>
              <li>/</li>
              <li className="text-text-primary font-medium" aria-current="page">{item.title}</li>
            </ol>
          </nav>
          <Badge variant="outline" className="mb-6">{item.category}</Badge>
          <h1 className="heading-1 mb-6">{item.title}</h1>
          <p className="body-large mb-4">{item.description}</p>
          <p className="text-sm font-medium text-text-muted">Pricing: {item.price}</p>
        </SectionReveal>
      </div>
    </>
  );
}
