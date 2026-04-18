/**
 * Case Studies Content Registry
 */
import type { CaseStudy } from "@/types/content";
import omniLogistics from "./omni-logistics-dispatch-automation";

export const allCaseStudies: CaseStudy[] = [omniLogistics];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return allCaseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return allCaseStudies.map((c) => c.slug);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return allCaseStudies.filter((c) => c.industry === industry);
}
