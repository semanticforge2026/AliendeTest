/**
 * Omni Logistics — Case Study Content
 */
import type { CaseStudy } from "@/types/content";

const omniLogistics: CaseStudy = {
  slug: "omni-logistics-dispatch-automation",
  client: "Omni Logistics",
  industry: "logistics",
  title: "Automating 14,000 weekly dispatches using deterministic AI",
  description:
    "How Omni Logistics eliminated manual dispatch bottlenecks with a custom AI routing engine, achieving 312% ROI in six months.",
  publishedTime: "2025-11-01T00:00:00Z",

  challenge:
    "Omni Logistics processed 14,000 weekly shipments across 23 carriers using a combination of spreadsheets and manual dispatch decisions. Peak-day backlogs routinely delayed outbound cutoffs by 4–6 hours, costing the business in carrier surcharges and missed SLAs.",

  approach:
    "We conducted a four-week workflow audit to document every routing decision path, exception type, and approval gate. The resulting logic map drove a deterministic routing engine that connected directly to their existing TMS via REST API — no re-platforming required. A parallel monitoring period ran for three weeks before full cutover.",

  results:
    "Post-deployment, 94% of dispatch decisions are handled automatically with zero human involvement. Exception volume dropped from an average of 340 daily manual reviews to fewer than 20 flagged items requiring operator input. The freed capacity was redeployed to carrier relationship management and network expansion.",

  metrics: [
    { value: "312%", label: "6-Month ROI" },
    { value: "94%", label: "Automated dispatch rate" },
    { value: "-82%", label: "Carrier surcharge costs" },
    { value: "< 200ms", label: "Routing decision latency" },
  ],

  testimonial: {
    quote:
      "Aliende's team understood our edge cases before we'd even documented them. This wasn't a software install — it was a rethinking of our entire dispatch logic.",
    author: "Jonathan Miles",
    role: "COO, Omni Logistics",
  },

  faq: [
    {
      question: "How did you handle the carrier API integrations?",
      answer:
        "We built REST adapters for each carrier's rate and booking API and maintained a fallback to the TMS's existing carrier roster — ensuring no disruption during the transition.",
    },
  ],

  cta: {
    heading: "Ready to automate your dispatch operations?",
    subtext: "Our architecture team will scope your routing logic in a single discovery call.",
    primaryButton: { label: "Book Consultation", href: "/contact" },
    secondaryButton: { label: "View Workflow AI Service", href: "/services/workflow-ai" },
  },

  relatedServices: ["workflow-ai", "api-gateways"],
  relatedCaseStudies: ["finestra-compliance-validation"],
};

export default omniLogistics;
