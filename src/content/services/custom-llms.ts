/**
 * Custom LLMs — Service Detail Content
 */
import type { ServicePage } from "@/types/content";

const customLlms: ServicePage = {
  slug: "custom-llms",
  title: "Custom LLMs",
  description:
    "Fine-tuned, privately hosted language models trained exclusively on your corporate knowledge base — no public model contamination.",
  headline: "Your knowledge. Your model. Your infrastructure.",
  intro:
    "Generic foundation models are trained on the internet. Your enterprise knowledge is not on the internet. We bridge that gap by building localized, privately hosted LLMs that reason over your proprietary data with precision a public model can never achieve.",

  benefits: [
    {
      icon: "Database",
      title: "Trained on your data only",
      description: "Models are fine-tuned exclusively on your documents, SOPs, and institutional knowledge.",
    },
    {
      icon: "Lock",
      title: "Fully air-gapped options",
      description: "Deploy entirely on-premise or in your private cloud — zero external data egress.",
    },
    {
      icon: "RefreshCw",
      title: "Continuous retraining",
      description: "Models update on a cadence you define as your knowledge base evolves.",
    },
    {
      icon: "Shield",
      title: "Compliance-first architecture",
      description: "Designed to meet SOC 2, GDPR, HIPAA, and financial services regulatory standards.",
    },
  ],

  process: [
    {
      step: "01 / Audit",
      title: "Data Inventory & Cleaning",
      description: "We document, classify, and clean your knowledge corpus before touching any model infrastructure.",
    },
    {
      step: "02 / Train",
      title: "Supervised Fine-tuning",
      description: "Using your cleaned data, we run structured fine-tuning cycles with evaluation benchmarks tailored to your use cases.",
    },
    {
      step: "03 / Deploy",
      title: "Private Inference Endpoint",
      description: "The final model is packaged and deployed to your chosen infrastructure with monitoring and fallback logic configured.",
    },
  ],

  features: [
    { title: "RAG pipeline integration", description: "Retrieval-augmented generation over live document stores." },
    { title: "Custom embedding models", description: "Vectorized representations tuned to your domain vocabulary." },
    { title: "Version-controlled weights", description: "Full model version history — roll back to any checkpoint instantly." },
    { title: "Multi-modal support", description: "Process text, structured data, and documents in a unified pipeline." },
  ],

  metrics: [
    { value: "68%", label: "Higher accuracy vs. GPT-4 on domain tasks" },
    { value: "100%", label: "Data stays inside your infrastructure" },
    { value: "6–10 weeks", label: "Typical deployment timeline" },
  ],

  faq: [
    {
      question: "Which base model do you fine-tune from?",
      answer:
        "We evaluate multiple open-source foundations (Llama, Mistral, Phi, Gemma) and select based on your compute constraints, accuracy requirements, and licensing needs.",
    },
    {
      question: "Do we need a GPU cluster to run this?",
      answer:
        "Not necessarily. Smaller fine-tuned models can run effectively on standard cloud instances. We right-size the infrastructure for your actual query volume.",
    },
  ],

  cta: {
    heading: "Build a model that actually knows your business.",
    subtext: "We'll scope the dataset requirements and infrastructure footprint in a single technical call.",
    primaryButton: { label: "Book Technical Call", href: "/contact" },
    secondaryButton: { label: "Explore All Services", href: "/services" },
  },

  relatedServices: ["workflow-ai", "data-warehousing", "compliance-nets"],
  relatedSolutions: ["finance", "legal", "healthcare"],

  metadata: {
    keywords: ["custom LLM", "fine-tuned language model", "private AI", "enterprise LLM", "on-premise AI"],
  },
};

export default customLlms;
