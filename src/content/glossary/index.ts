/**
 * Glossary Content Registry
 */
import type { GlossaryTerm } from "@/types/content";
import deterministicAI from "./deterministic-ai";

export const allGlossaryTerms: GlossaryTerm[] = [deterministicAI];

export function getGlossaryTermBySlug(term: string): GlossaryTerm | undefined {
  return allGlossaryTerms.find((t) => t.term === term);
}

export function getAllGlossaryTermSlugs(): string[] {
  return allGlossaryTerms.map((t) => t.term);
}
