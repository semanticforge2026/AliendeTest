/**
 * FAQBlock — FAQ section using the FAQAccordion component.
 * Mount FAQPageSchema separately in the page/template for rich results.
 */
import { SectionReveal } from "@/components/sections/section-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import type { FAQItem } from "@/types/content";

interface FAQBlockProps {
  heading?: string;
  items: FAQItem[];
}

export function FAQBlock({ heading = "Frequently Asked Questions", items }: FAQBlockProps) {
  if (!items.length) return null;
  return (
    <section className="section-padding bg-surface border-t border-border-subtle">
      <div className="container-premium">
        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <SectionHeading title={heading} centered />
            <FAQAccordion items={items} />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
