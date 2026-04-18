/**
 * Logistics — Industry Solution Content
 *
 * HOW TO ADD A NEW SOLUTION:
 *   1. Duplicate this file, rename to <industry>.ts
 *   2. Fill all fields following the SolutionPage type
 *   3. Import and register in src/content/solutions/index.ts
 */
import type { SolutionPage } from "@/types/content";

const logistics: SolutionPage = {
  industry: "logistics",
  title: "AI Automation for Logistics",
  description:
    "Streamline dispatch, routing, compliance, and carrier communications with deterministic AI purpose-built for logistics enterprises.",
  headline: "Precision intelligence for global supply chains.",
  intro:
    "Modern logistics operations run on hundreds of micro-decisions per hour — routing exceptions, carrier selection, compliance flags, and dispatch approvals. Each manual step is a liability. We replace them with transparent, auditable AI logic that executes in milliseconds.",

  useCases: [
    {
      icon: "Truck",
      title: "Automated dispatch routing",
      description: "Route 14,000+ weekly shipments based on carrier SLAs, cost constraints, and real-time availability.",
    },
    {
      icon: "FileCheck",
      title: "Compliance documentation",
      description: "Auto-generate customs declarations, hazmat forms, and carrier manifests from structured order data.",
    },
    {
      icon: "AlertTriangle",
      title: "Exception management",
      description: "Detect delays, route failures, and missing documentation before they become customer issues.",
    },
    {
      icon: "BarChart",
      title: "Carrier performance analytics",
      description: "Track on-time rates, damage claims, and cost trends across your entire carrier network in real-time.",
    },
  ],

  process: [
    {
      step: "01 / Integration",
      title: "TMS & ERP Connection",
      description: "We connect to your existing transportation management and ERP systems — no re-platforming required.",
    },
    {
      step: "02 / Rules",
      title: "Business Logic Configuration",
      description: "Your routing rules, carrier preferences, and compliance requirements are codified into explicit logic.",
    },
    {
      step: "03 / Go Live",
      title: "Parallel Monitoring & Cutover",
      description: "The system runs in shadow mode alongside existing operations before full production handoff.",
    },
  ],

  metrics: [
    { value: "312%", label: "Average 6-month ROI" },
    { value: "94%", label: "Reduction in manual dispatch decisions" },
    { value: "< 200ms", label: "Routing decision latency" },
  ],

  features: [
    { title: "Multi-modal transport support", description: "Road, rail, air, and ocean — single routing engine." },
    { title: "Dynamic carrier rate optimization", description: "Real-time cost comparison across contracted and spot market rates." },
    { title: "Regulatory compliance automation", description: "Auto-classifications, duty calculations, and export control checks." },
    { title: "Customer notification engine", description: "Proactive, branded delivery updates triggered by milestone events." },
  ],

  testimonial: {
    quote:
      "Our dispatch team went from managing 200 daily decisions to reviewing 8 exceptions. Aliende's architecture is the reason we scaled without hiring.",
    author: "Jonathan Miles",
    role: "COO, Omni Logistics",
  },

  faq: [
    {
      question: "Which TMS platforms do you integrate with?",
      answer: "We support Oracle TMS, BluJay, MercuryGate, and any system with a REST or SOAP API. Custom adapters are included in the engagement.",
    },
    {
      question: "How do you handle international trade compliance?",
      answer: "Our compliance layer includes HS code classification, denied party screening, and export license flagging — built to the regulations of your operating countries.",
    },
  ],

  cta: {
    heading: "Transform your logistics operation with deterministic AI.",
    subtext: "Schedule a technical consultation to scope your routing and compliance architecture.",
    primaryButton: { label: "Book Consultation", href: "/contact" },
    secondaryButton: { label: "View Logistics Case Study", href: "/case-studies/omni-logistics-dispatch-automation" },
  },

  relatedServices: ["workflow-ai", "compliance-nets", "api-gateways"],
  relatedCaseStudies: ["omni-logistics-dispatch-automation"],
};

export default logistics;
