import Link from "next/link";
import { homeMetadata } from "@/lib/metadata";
import { FAQPageSchema } from "@/components/seo/schema";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { StatCard } from "@/components/cards/stat-card";
import { ServiceCard } from "@/components/cards/service-card";
import { MarketplaceCard } from "@/components/cards/marketplace-card";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { ProcessStepCard } from "@/components/cards/process-step-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { TrustBar } from "@/components/sections/trust-bar";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Boxes, ShieldAlert, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = homeMetadata;

const faqItems = [
  {
    question: "Do we retain ownership of our models?",
    answer: "Yes. We operate on a pure implementation model. Once the architecture is deployed, you own the IP, the weights, and the localized instances.",
  },
  {
    question: "How long does a typical deployment take?",
    answer: "Standard integrations average 6 to 8 weeks from discovery to production rollout, depending on your internal security audit timelines.",
  },
  {
    question: "What is your stance on data privacy?",
    answer: "We deploy primarily via private, self-hosted environments (VPC). Your proprietary data is never indexed by public commercial models.",
  },
];

export default function HomePage() {
  return (
    <>
      <FAQPageSchema items={faqItems} />

      {/* 1. Hero Split Layout */}
      <section className="relative overflow-hidden pt-12 lg:pt-20 pb-16 lg:pb-32">
        <div className="container-premium grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <SectionReveal className="flex flex-col items-start text-left max-w-2xl">
            <Badge variant="subtle" className="mb-8 px-4 py-1.5 bg-accent-wash text-accent-deep border-accent/20">
              Executive AI Infrastructure
            </Badge>
            <h1 className="heading-1 mb-8 leading-[1.05]">
              Deterministic automation for the modern <span className="font-semibold text-text-muted">enterprise.</span>
            </h1>
            <p className="body-large mb-12 text-balance lg:pr-12">
              Aliende architects precision AI systems and high-throughput workflows, removing operational drag and scaling output without expanding headcount.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <PrimaryButton className="w-full sm:px-8">Book Consultation</PrimaryButton>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <SecondaryButton className="w-full sm:px-8">Explore Platform</SecondaryButton>
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal
            delay={0.2}
            className="relative aspect-[4/3] w-full rounded-card bg-surface-elevated border border-border-subtle shadow-premium overflow-hidden flex items-center justify-center p-1"
          >
            <div className="w-full h-full rounded-[12px] border border-dashed border-border-strong bg-background flex flex-col items-center justify-center text-text-muted text-sm relative">
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-background opacity-50" />
              <Cpu className="w-12 h-12 mb-4 opacity-50" />
              <p className="label-overline">
                Asset Preview / Generative Graphic
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 2. Trust Bar + KPI Stats Strip */}
      <TrustBar
        logos={[
          <div key="1" className="font-heading font-bold text-xl tracking-tight">Velo</div>,
          <div key="2" className="font-heading font-bold text-xl tracking-tight">Kora Industries</div>,
          <div key="3" className="font-heading font-bold text-xl tracking-tight">OmniGroup</div>,
          <div key="4" className="font-heading font-bold text-xl tracking-tight">Finestra Ltd</div>,
        ]}
      />
      
      <section className="py-16 lg:py-24 bg-surface border-b border-border-subtle">
        <div className="container-premium">
          <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 md:divide-x md:divide-border-subtle">
            <StatCard value="14M+" label="Tasks Automated" className="md:px-4" />
            <StatCard value="99.9%" label="Reliability" className="md:px-4" />
            <StatCard value="2.4x" label="Average ROI" className="md:px-4" />
            <StatCard value="< 50ms" label="Latency" className="md:px-4" />
          </div>
        </div>
      </section>

      {/* 3. Featured Services */}
      <section className="section-padding container-premium">
        <SectionReveal>
          <SectionHeading
            title="Surgical integration mapping."
            subtitle="We don't sell subscriptions. We architect custom neural infrastructure tailored to your exact operational bottlenecks."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <ServiceCard icon={<Briefcase />} title="Workflow AI" description="Deploy deterministic agents to handle repetitive back-office routing and scheduling." />
            <ServiceCard icon={<Boxes />} title="Data Warehousing" description="Unified vector layers connecting your disparate tools into a single querying interface." />
            <ServiceCard icon={<ShieldAlert />} title="Compliance Nets" description="Automated PII scrubbing and protocol verification before data leaves your servers." />
            <ServiceCard icon={<Cpu />} title="Custom LLMs" description="Fine-tuned, privately hosted models trained exclusively on your corporate knowledge." />
          </div>
        </SectionReveal>
      </section>

      {/* 4. Marketplace Preview */}
      <section className="section-padding bg-surface border-t border-border-subtle">
        <div className="container-premium">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-12">
              <SectionHeading
                title="The Modular Marketplace"
                subtitle="Production-ready infrastructural components. Plug them in, configure parameters, and deploy in minutes."
                className="mb-0"
              />
              <Link href="/marketplace" className="shrink-0">
                <SecondaryButton className="px-8">View All Modules</SecondaryButton>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MarketplaceCard title="Financial Reconciliation Agent" category="Finance" price="Enterprise" />
              <MarketplaceCard title="Support Triage Pipeline" category="Customer Success" price="$4,500" />
              <MarketplaceCard title="Marketing Copy Engine" category="Content" price="$2,200" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Value Proposition */}
      <section className="section-padding container-premium">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-card bg-surface border border-border-subtle shadow-premium p-1 relative overflow-hidden flex items-center justify-center">
               <div className="w-full h-full rounded-[12px] bg-background border border-dashed border-border-strong flex items-center justify-center">
                <p className="label-overline text-text-muted">Value Visualization</p>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <h2 className="heading-2">Precision over noise.</h2>
              <p className="body-large">
                While others focus on generic chatbot interfaces, we build headless, high-throughput engines that silently process millions of operational decisions.
              </p>
              <ul className="space-y-6 pt-10 border-t border-border-subtle" aria-label="Key differentiators">
                {[
                  "No vendor lock-in; you own the localized models.",
                  "Zero data retention policies globally enforced.",
                  "Guaranteed operational consistency via deterministic flows.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white font-bold text-[10px] mt-1" aria-hidden="true">✓</span>
                    <span className="body-base text-text-primary font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* 6. Case Studies Preview */}
      <section className="section-padding bg-background border-t border-border-subtle">
        <div className="container-premium">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-12">
              <SectionHeading
                title="Proven Outcomes"
                subtitle="Real architecture deployed inside modern enterprises resulting in tangible capital efficiency."
                className="mb-0"
              />
              <Link href="/case-studies" className="shrink-0">
                <SecondaryButton className="px-8">All Case Studies</SecondaryButton>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <CaseStudyCard client="Omni Logistics" title="Automating 14,000 weekly dispatches using deterministic AI." metric="312%" metricLabel="6-Month ROI" />
              <CaseStudyCard client="Finestra Asset Management" title="Real-time compliance validation on global trade executions." metric="0.4s" metricLabel="Validation Latency" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Process Timeline */}
      <section className="section-padding bg-surface border-t border-border-subtle">
        <div className="container-premium text-center">
          <SectionReveal>
            <SectionHeading
              title="The Implementation Arc"
              subtitle="Our rigorous, low-risk methodology for inserting AI safely into production environments."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <ProcessStepCard step="01 / Audit" title="Architecture Review" description="We map your redundant operations and isolate the highest-yield automation vectors." />
              <ProcessStepCard step="02 / Build" title="Neural Integration" description="Connecting localized models to your data schema within a secure sandbox." />
              <ProcessStepCard step="03 / Scale" title="Deployment" description="We transition the engines to your infrastructure, ensuring your team maintains control." />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="section-padding border-t border-border-subtle">
        <div className="container-premium">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
              <div className="lg:col-span-1 space-y-6">
                <h2 className="heading-2">Executive consensus.</h2>
                <p className="body-large">
                  Operators leading their industries choose Aliende for uncompromising build quality and architectural maturity.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
                <TestimonialCard
                  className="bg-transparent shadow-none hover:translate-y-0 hover:shadow-none border-none p-0 border-l-0"
                  quote="Aliende didn't just build a tool; they redefined our entire fulfillment logic."
                  author="Jonathan Miles"
                  role="COO, Velocity"
                />
                <TestimonialCard
                  className="bg-transparent shadow-none hover:translate-y-0 hover:shadow-none border-none p-0 border-l-0"
                  quote="The only agency that understood precision security over general AI hype."
                  author="Sarah Jenkins"
                  role="Director of Operations, Kora"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section-padding bg-surface border-t border-border-subtle">
        <div className="container-premium">
          <SectionReveal>
            <div className="max-w-3xl mx-auto">
              <SectionHeading title="Frequently Asked Questions" centered />
              <FAQAccordion items={faqItems} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 10. Final CTA Band */}
      <section className="bg-accent-deep py-24 md:py-32 overflow-hidden text-center">
        <div className="container-premium max-w-4xl mx-auto space-y-12">
          <SectionReveal>
            <h2 className="heading-1 text-white leading-[1.05]">
               Ready to elevate your infrastructure?
            </h2>
            <p className="body-large text-white/80 max-w-2xl mx-auto">
              Schedule a technical consultation to discuss integrating premium deterministic AI into your operational stack.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <PrimaryButton className="bg-white text-accent-deep hover:bg-surface-elevated hover:scale-105 transition-all px-10 py-5 h-auto text-base font-semibold shadow-2xl">
                  Book Consultation
                </PrimaryButton>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
