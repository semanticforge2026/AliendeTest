/**
 * Services Content Registry
 * =============================================================================
 * Central registry for all service detail pages.
 *
 * HOW TO ADD A NEW SERVICE:
 *   1. Create: src/content/services/<slug>.ts
 *   2. Import it below and add to the `allServices` array.
 *   3. Add the slug to generateStaticParams in src/app/services/[slug]/page.tsx
 *   4. Run `npm run build` to validate.
 *
 * The getServiceBySlug() function replaces the inline stub in the route file.
 * =============================================================================
 */
import type { ServicePage } from "@/types/content";

// Import all service entries here
import workflowAi from "./workflow-ai";
import customLlms from "./custom-llms";

// Add all registered services to this array
export const allServices: ServicePage[] = [workflowAi, customLlms];

// Utility: get a single service by slug
export function getServiceBySlug(slug: string): ServicePage | undefined {
  return allServices.find((s) => s.slug === slug);
}

// Utility: get all slugs for generateStaticParams
export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug);
}

// Utility: get related services by slug array (used in RelatedContentBlock)
export function getRelatedServices(slugs: string[]): ServicePage[] {
  return slugs
    .map((slug) => allServices.find((s) => s.slug === slug))
    .filter(Boolean) as ServicePage[];
}
