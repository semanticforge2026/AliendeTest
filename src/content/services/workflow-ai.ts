/**
 * Workflow AI — Service Detail Content
 *
 * HOW TO ADD A NEW SERVICE:
 *   1. Duplicate this file, rename to <slug>.ts
 *   2. Fill all fields following the ServicePage type
 *   3. Import and register in src/content/services/index.ts
 *   4. Add the slug to generateStaticParams in src/app/services/[slug]/page.tsx
 */
import type { ServicePage } from "@/types/content";

const workflowAi: ServicePage = {
  slug: "workflow-ai",
  title: "Workflow AI",
  description:
    "Deploy deterministic AI agents that handle repetitive back-office routing, scheduling, and approval flows — without expanding headcount.",
  headline: "Eliminate operational drag. Permanently.",
  intro:
    "Most enterprise workflows fail not because of strategy, but because of friction — unnecessary approvals, manual handoffs, and routing decisions made by humans who should be doing higher-value work. Our Workflow AI layer replaces all of it with auditable, deterministic logic.",

  benefits: [
    {
      icon: "Zap",
      title: "Zero-latency task routing",
      description:
        "Decisions that took hours now take milliseconds. Deterministic logic eliminates queue backlogs permanently.",
    },
    {
      icon: "ShieldCheck",
      title: "Full audit trails",
      description:
        "Every automated decision is logged with full context, input state, and output — never a black box.",
    },
    {
      icon: "Scale",
      title: "Scales with your ops",
      description:
        "The same agent configuration handles 1,000 daily tasks or 1,000,000 — no retraining required.",
    },
    {
      icon: "Lock",
      title: "Private execution",
      description: "Agents run entirely inside your VPC. Zero external API calls for sensitive data.",
    },
  ],

  process: [
    {
      step: "01 / Map",
      title: "Workflow Archaeology",
      description:
        "We shadow your operations team and map every decision point, exception path, and approval gate in the current process.",
    },
    {
      step: "02 / Model",
      title: "Deterministic Rule Engine",
      description:
        "Each decision branch is converted into explicit logic with configurable thresholds — reviewed and approved by your team.",
    },
    {
      step: "03 / Deploy",
      title: "Sandboxed Rollout",
      description:
        "We run the agent in parallel with your existing process for two weeks before cutting over, monitoring for edge cases.",
    },
  ],

  features: [
    { title: "Multi-step approval automation", description: "Route, escalate, and resolve without human review on standard cases." },
    { title: "Exception detection & flagging", description: "Outlier cases are surfaced to human operators with full context attached." },
    { title: "Multi-system integration", description: "Connects to Salesforce, SAP, Jira, Slack, and any REST API." },
    { title: "Configurable business rules", description: "Thresholds, SLAs, and routing logic editable by your ops team without code." },
    { title: "Real-time monitoring dashboard", description: "Live visibility into task volume, routing outcomes, and exception rates." },
    { title: "Compliance-safe logging", description: "Decision audit logs in structured JSON, export-ready for compliance reviews." },
  ],

  metrics: [
    { value: "94%", label: "Reduction in manual task handling" },
    { value: "< 200ms", label: "Average decision latency" },
    { value: "3.1x", label: "Average ops team throughput" },
  ],

  faq: [
    {
      question: "Does this replace our existing process management software?",
      answer:
        "No — Workflow AI sits on top of your existing tools. It reads from and writes to your current systems rather than replacing them.",
    },
    {
      question: "What happens when the agent encounters a case it can't categorize?",
      answer:
        "All edge cases are routed to a designated human operator review queue with full context attached. The system never silently fails.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Most workflow automation deployments take 4 to 6 weeks from discovery to live production — including the parallel monitoring period.",
    },
  ],

  testimonial: {
    quote:
      "Our dispatch queue went from a daily scramble to fully automated in six weeks. The Aliende team understood our edge cases before we'd even documented them.",
    author: "Jonathan Miles",
    role: "COO, Velocity Logistics",
  },

  cta: {
    heading: "Ready to automate your operational bottlenecks?",
    subtext: "Book a 30-minute discovery call to scope your workflow architecture.",
    primaryButton: { label: "Book Consultation", href: "/contact" },
    secondaryButton: { label: "View Case Studies", href: "/case-studies" },
  },

  relatedServices: ["data-warehousing", "compliance-nets", "api-gateways"],
  relatedSolutions: ["logistics", "finance"],

  metadata: {
    keywords: ["workflow automation", "AI agents", "business process automation", "deterministic AI"],
  },
};

export default workflowAi;
