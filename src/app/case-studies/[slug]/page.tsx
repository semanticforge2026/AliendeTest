/**
 * /case-studies/[slug] — Case Study Detail Page
 *
 * HOW TO ADD A NEW CASE STUDY:
 *   1. Create src/content/case-studies/<slug>.ts
 *   2. Register in src/content/case-studies/index.ts
 *   3. Slug appears automatically in sitemap and static params.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata, caseStudyCanonical } from "@/lib/seo";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/content/case-studies";
import { CaseStudyTemplate } from "@/templates/case-study-template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCaseStudyBySlug(slug);
  if (!page) return constructMetadata({ title: "Case Study Not Found", noIndex: true });

  return constructMetadata({
    title: page.title,
    description: page.description,
    canonical: caseStudyCanonical(slug),
    ogType: "article",
    publishedTime: page.publishedTime,
    authors: ["Aliende Architecture Team"],
    ...(page.metadata ?? {}),
  });
}

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCaseStudyBySlug(slug);
  if (!page) notFound();
  return <CaseStudyTemplate page={page} />;
}
