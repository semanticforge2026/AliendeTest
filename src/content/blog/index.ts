/**
 * Blog Content Registry
 */
import type { BlogPost } from "@/types/content";
import deterministicAIAdvantage from "./the-deterministic-ai-advantage";

export const allBlogPosts: BlogPost[] = [deterministicAIAdvantage];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map((p) => p.slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter((p) => p.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return allBlogPosts.filter((p) => p.tags.includes(tag));
}
