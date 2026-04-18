/**
 * AboutPage — Premium editorial layout for company information.
 */
import { aboutMetadata } from "@/lib/metadata";
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { IntroBlock } from "@/components/blocks";

export const metadata = aboutMetadata;

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <article className="min-h-screen">
      <IntroBlock
        eyebrow="Company Overview"
        headline="Precision over noise."
        body="Aliende was founded to bridge the gap between speculative AI potential and operational reality."
        breadcrumbs={breadcrumbs}
        className="pb-0"
      />

      <section className="section-padding lg:pt-0">
        <div className="container-premium">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="space-y-12">
                <h2 className="heading-2 max-w-md">Our architectural philosophy.</h2>
                <div className="h-px w-24 bg-accent" aria-hidden="true" />
              </div>
              
              <div className="max-w-2xl space-y-10 body-large text-text-secondary">
                <p>
                  We believe that genuine enterprise automation requires more than generic probabilistic chatbots. It requires surgical integration into existing operational systems that value accuracy, security, and performance.
                </p>
                <p>
                  We deploy headless, high-throughput engines that process back-office operations silently and securely. Our focus is not on replacing humans, but on eliminating manual redundancy and allowing experts to focus on high-variance decision making.
                </p>
                <p className="font-semibold text-text-primary border-l-2 border-accent pl-8 py-2 italic font-sans">
                  "Authentic scale is achieved through deterministic consistency, not just computational speed."
                </p>
                <p>
                  Today, Aliende serves modern enterprises across logistics, finance, and asset management, providing the infrastructural spine for the next generation of business output.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="section-padding bg-surface border-t border-border-subtle">
        <div className="container-premium">
          <SectionReveal>
            <SectionHeading 
              title="The Aliende Standard" 
              subtitle="Our core principles drive every line of code and every architectural decision we make."
              centered 
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mt-16">
              {[
                { title: "Deterministic Output", desc: "No halucinations. We build systems that follow strict logical protocols for 100% predictable behavior." },
                { title: "VPC First", desc: "Your data never leaves your control. We deploy exclusively into secure, private cloud environments." },
                { title: "Localized Weights", desc: "You own the IP. We fine-tune models specifically for your data, and the weights remain your property." }
              ].map((pillar, i) => (
                <div key={i} className="space-y-6">
                  <div className="label-overline text-accent">Principle 0{i+1}</div>
                  <h3 className="heading-3">{pillar.title}</h3>
                  <p className="body-base">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </article>
  );
}
