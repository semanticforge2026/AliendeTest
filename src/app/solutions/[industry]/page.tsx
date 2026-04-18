/**
 * /solutions/[industry] — Industry Solution Page
 *
 * HOW TO ADD A NEW SOLUTION:
 *   1. Create src/content/solutions/<industry>.ts
 *   2. Register in src/content/solutions/index.ts
 *   3. Add to getAllSolutionIndustries() — sitemap updates automatically.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata, solutionCanonical } from "@/lib/seo";
import { getSolutionByIndustry, getAllSolutionIndustries } from "@/content/solutions";
import { SolutionTemplate } from "@/templates/solution-template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const page = getSolutionByIndustry(industry);
  if (!page) return constructMetadata({ title: "Solution Not Found", noIndex: true });

  return constructMetadata({
    title: page.title,
    description: page.description,
    canonical: solutionCanonical(industry),
    ogImage: `/og/solutions/${industry}.jpg`,
    ...(page.metadata ?? {}),
  });
}

export function generateStaticParams() {
  return getAllSolutionIndustries().map((industry) => ({ industry }));
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const page = getSolutionByIndustry(industry);
  if (!page) notFound();
  return <SolutionTemplate page={page} />;
}
