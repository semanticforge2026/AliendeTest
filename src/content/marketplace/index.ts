/**
 * Marketplace Content Registry
 */
import type { MarketplaceProduct } from "@/types/content";
import financialReconciliationAgent from "./financial-reconciliation-agent";

export const allProducts: MarketplaceProduct[] = [financialReconciliationAgent];

export function getProductBySlug(slug: string): MarketplaceProduct | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return allProducts.map((p) => p.slug);
}

export function getProductsByCategory(category: string): MarketplaceProduct[] {
  return allProducts.filter((p) => p.category === category);
}
