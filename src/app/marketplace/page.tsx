import { marketplaceMetadata } from "@/lib/metadata";
export const metadata = marketplaceMetadata;


import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { MarketplaceCard } from "@/components/cards/marketplace-card";

export default function MarketplacePage() {
  return (
    <div className="section-padding container-premium bg-surface min-h-screen">
      <SectionReveal>
        <SectionHeading 
          title="The Marketplace" 
          subtitle="Curated AI widgets, automated templates, and scalable infrastructure modules ready for enterprise deployment."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MarketplaceCard 
            title="Financial Reconciliation Agent"
            category="Finance"
            price="Enterprise"
          />
          <MarketplaceCard 
            title="Support Triage Pipeline"
            category="Customer Success"
            price="$4,500"
          />
          <MarketplaceCard 
            title="Marketing Copy Engine"
            category="Content"
            price="$2,200"
          />
          <MarketplaceCard 
            title="HR Onboarding Bot"
            category="Human Resources"
            price="$3,100"
          />
          <MarketplaceCard 
            title="Supply Chain Predictor"
            category="Operations"
            price="Enterprise"
          />
          <MarketplaceCard 
            title="Lead Scoring Model"
            category="Sales"
            price="$1,800"
          />
        </div>
      </SectionReveal>
    </div>
  );
}
