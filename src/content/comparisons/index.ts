/**
 * Comparisons Content Registry
 */
import type { ComparisonPage } from "@/types/content";
import aliendeVsZapier from "./aliende-vs-zapier";

export const allComparisons: ComparisonPage[] = [aliendeVsZapier];

export function getComparisonBySlug(slug: string): ComparisonPage | undefined {
  return allComparisons.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return allComparisons.map((c) => c.slug);
}
