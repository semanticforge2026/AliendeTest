/**
 * Financial Reconciliation Agent — Marketplace Product
 */
import type { MarketplaceProduct } from "@/types/content";

const financialReconciliationAgent: MarketplaceProduct = {
  slug: "financial-reconciliation-agent",
  title: "Financial Reconciliation Agent",
  category: "Finance",
  price: "Enterprise",
  pricingModel: "enterprise",
  description:
    "Automates multi-ledger reconciliation with deterministic matching logic and exception flagging — eliminate spreadsheet reconciliation permanently.",
  headline: "Zero-touch reconciliation. Full auditability.",
  intro:
    "Manual reconciliation is one of the highest-cost, highest-risk operations in finance. Our Financial Reconciliation Agent processes transactions across multiple ledgers, banks, and accounting systems, matching records deterministically and surfacing only genuine exceptions for human review.",

  features: [
    { title: "Multi-source ledger matching", description: "Reconcile GL, AR/AP, bank statements, and payment processor data simultaneously." },
    { title: "Configurable matching rules", description: "Define tolerance windows, currency conversion logic, and entity mapping without code." },
    { title: "Exception workflow routing", description: "Unmatched items are routed to designated reviewers with full transaction context." },
    { title: "Audit trail export", description: "Structured JSON and CSV exports ready for auditor review or regulatory submission." },
  ],

  benefits: [
    {
      icon: "Clock",
      title: "From days to minutes",
      description: "Month-end close reconciliation that took 3 days now completes in under 40 minutes.",
    },
    {
      icon: "CheckCircle",
      title: "99.97% match accuracy",
      description: "Deterministic matching logic eliminates the human error inherent in manual processes.",
    },
    {
      icon: "FileText",
      title: "External audit-ready",
      description: "Every decision logged with full trace — your external auditors get exactly what they need.",
    },
  ],

  integrations: ["NetSuite", "QuickBooks Enterprise", "SAP S/4HANA", "Xero", "Stripe", "Adyen"],
  useCases: [
    "Month-end close acceleration",
    "Intercompany reconciliation for multi-entity groups",
    "Payment processor settlement reconciliation",
    "Bank statement auto-matching",
  ],

  faq: [
    {
      question: "How are exceptions handled?",
      answer: "All unmatched transactions are queued for human review with full context — both transaction records, source systems, and the matching rule that failed.",
    },
    {
      question: "Can this handle foreign currency transactions?",
      answer: "Yes. The agent supports configurable exchange rate sources and tolerance windows for FX differences on cross-currency transactions.",
    },
  ],

  cta: {
    heading: "Eliminate manual reconciliation from your finance operations.",
    subtext: "Our team will assess your current reconciliation workflow and propose an integration architecture.",
    primaryButton: { label: "Request Demo", href: "/contact" },
    secondaryButton: { label: "View Finance Solutions", href: "/solutions/finance" },
  },

  relatedProducts: ["support-triage-pipeline"],
  relatedServices: ["workflow-ai", "compliance-nets"],
};

export default financialReconciliationAgent;
