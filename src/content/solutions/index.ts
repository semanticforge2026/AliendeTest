/**
 * Solutions Content Registry
 * =============================================================================
 * HOW TO ADD A NEW SOLUTION:
 *   1. Create: src/content/solutions/<industry>.ts
 *   2. Import below and add to allSolutions array.
 *   3. Add to generateStaticParams in src/app/solutions/[industry]/page.tsx
 * =============================================================================
 */
import type { SolutionPage } from "@/types/content";
import logistics from "./logistics";

export const allSolutions: SolutionPage[] = [logistics];

export function getSolutionByIndustry(industry: string): SolutionPage | undefined {
  return allSolutions.find((s) => s.industry === industry);
}

export function getAllSolutionIndustries(): string[] {
  return allSolutions.map((s) => s.industry);
}
