import { caseStudiesMetadata } from "@/lib/metadata";
export const metadata = caseStudiesMetadata;


import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { CaseStudyCard } from "@/components/cards/case-study-card";

export default function CaseStudiesPage() {
  return (
    <div className="section-padding container-premium max-w-5xl min-h-screen">
      <SectionReveal>
        <SectionHeading 
          title="Case Studies" 
          subtitle="Exploring the tangible impact of our enterprise automation solutions across elite organizations."
        />
        <div className="flex flex-col gap-12">
          <CaseStudyCard 
            client="Omni Logistics"
            title="Automating 14,000 weekly dispatches using deterministic AI."
            metric="312%"
            metricLabel="6-Month ROI"
          />
          <CaseStudyCard 
            client="Finestra Asset Management"
            title="Real-time compliance validation on global trade executions."
            metric="0.4s"
            metricLabel="Validation Latency"
          />
          <CaseStudyCard 
            client="Kora Industries"
            title="Scaling bespoke B2B quoting pipelines globally."
            metric="$4.2M"
            metricLabel="Revenue Recovered"
          />
        </div>
      </SectionReveal>
    </div>
  );
}
