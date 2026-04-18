/**
 * Deterministic AI — Glossary Term
 */
import type { GlossaryTerm } from "@/types/content";

const deterministicAI: GlossaryTerm = {
  term: "deterministic-ai",
  title: "Deterministic AI",
  description:
    "A class of AI systems that produce identical outputs for identical inputs — providing auditability and reliability required in enterprise operations.",
  definition:
    "Deterministic AI refers to systems in which the relationship between inputs and outputs is fixed and reproducible. Given the same input state, a deterministic AI system will always produce the same decision, routing outcome, or classification result.",
  expandedContent: `
**Why determinism matters in enterprise contexts**

Unlike probabilistic language models — which generate outputs based on learned statistical distributions and may produce different results on repeated identical queries — deterministic systems are built around explicit logic: decision trees, rule engines, and coded heuristics that leave no room for guesswork.

This property is critical in regulated industries and high-stakes operational contexts:

- **Auditability**: Every decision has an exact trace. Regulators, auditors, and internal compliance teams can reconstruct the precise logic path for any historical decision.
- **Reliability**: No "bad days" caused by model temperature, context drift, or training data artifacts.
- **Debugging**: When an exception occurs, the cause is always traceable to a specific rule or threshold — not an emergent probabilistic phenomenon.

**Determinism vs. probabilistic AI: when to use each**

Deterministic AI is the correct choice when:
- Decisions have regulatory or compliance implications
- Audit trails are required
- Consistency at scale is non-negotiable
- Edge cases must be explicitly handled, not guessed at

Probabilistic AI (LLMs) excels at:
- Parsing and understanding free-text inputs
- Drafting human-readable outputs from structured data
- Classifying ambiguous cases before routing them into deterministic logic

The most effective enterprise AI architectures combine both: LLMs handle the fuzzy perimeter, deterministic engines handle the operational core.
  `,

  relatedTerms: ["rag-pipeline", "llm-fine-tuning", "workflow-automation"],
  relatedServices: ["workflow-ai", "custom-llms"],
};

export default deterministicAI;
