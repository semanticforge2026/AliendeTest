/**
 * /services/[slug] — Service Detail Page
 *
 * HOW TO ADD A NEW SERVICE PAGE:
 *   1. Create src/content/services/<slug>.ts (follow workflow-ai.ts as a model)
 *   2. Register it in src/content/services/index.ts
 *   3. Add the slug to getAllServiceSlugs() — sitemap and static params update automatically.
 *   That's it. The template handles all rendering.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata, serviceCanonical } from "@/lib/seo";
import { getServiceBySlug, getAllServiceSlugs } from "@/content/services";
import { ServiceTemplate } from "@/templates/service-template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) return constructMetadata({ title: "Service Not Found", noIndex: true });

  return constructMetadata({
    title: page.title,
    description: page.description,
    canonical: serviceCanonical(slug),
    ogImage: `/og/services/${slug}.jpg`,
    ...(page.metadata ?? {}),
  });
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServiceBySlug(slug);
  if (!page) notFound();
  return <ServiceTemplate page={page} />;
}
