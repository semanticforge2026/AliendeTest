import { servicesMetadata } from "@/lib/metadata";
import { SectionReveal } from "@/components/sections/section-reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { Briefcase, Boxes, ShieldAlert, Cpu, Network, Zap } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <div className="section-padding container-premium min-h-[70vh]">
      <SectionReveal>
        <SectionHeading 
          title="Premium Automations" 
          subtitle="Transformative business management and scalable intelligent solutions tailored to your operational schema."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Briefcase />}
            title="Workflow AI"
            description="Deploy deterministic agents to handle repetitive back-office routing and scheduling."
          />
          <ServiceCard 
            icon={<Boxes />}
            title="Data Warehousing"
            description="Unified vector layers connecting your disparate tools into a single querying interface."
          />
          <ServiceCard 
            icon={<ShieldAlert />}
            title="Compliance Nets"
            description="Automated PII scrubbing and protocol verification before data ever leaves your servers."
          />
          <ServiceCard 
            icon={<Cpu />}
            title="Custom LLMs"
            description="Fine-tuned, privately hosted models trained exclusively on your corporate knowledge."
          />
          <ServiceCard 
            icon={<Network />}
            title="API Gateways"
            description="Secure neural endpoints connecting directly to your global B2B partnerships."
          />
          <ServiceCard 
            icon={<Zap />}
            title="Real-time Analytics"
            description="Sub-second streaming metrics processing global transactions seamlessly."
          />
        </div>
      </SectionReveal>
    </div>
  );
}
