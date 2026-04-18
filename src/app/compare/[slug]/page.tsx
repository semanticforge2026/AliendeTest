/**
 * /compare/[slug] — Comparison Page
 *
 * High commercial-intent SEO pages: "Aliende vs [Competitor]"
 *
 * HOW TO ADD A NEW COMPARISON:
 *   1. Create src/content/comparisons/<slug>.ts
 *   2. Register in src/content/comparisons/index.ts
 *   3. Slug appears in sitemap and static params automatically.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import { getComparisonBySlug, getAllComparisonSlugs } from "@/content/comparisons";
import { ComparisonTemplate } from "@/templates/comparison-template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparisonBySlug(slug);
  if (!page) return constructMetadata({ title: "Comparison Not Found", noIndex: true });

  return constructMetadata({
    title: page.title,
    description: page.description,
    canonical: `/compare/${slug}`,
    ogImage: `/og/compare/${slug}.jpg`,
    ...(page.metadata ?? {}),
  });
}

export function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getComparisonBySlug(slug);
  if (!page) notFound();
  return <ComparisonTemplate page={page} />;
}
