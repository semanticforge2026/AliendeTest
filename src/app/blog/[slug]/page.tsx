/**
 * /blog/[slug] — Blog Post Detail Page
 *
 * HOW TO ADD A NEW POST:
 *   1. Create src/content/blog/<slug>.ts
 *   2. Register in src/content/blog/index.ts
 *   3. Slug appears in sitemap and static params automatically.
 *
 * NOTE: content field is rendered as raw HTML string currently.
 * Swap dagerouslySetInnerHTML for Contentlayer/MDX when CMS is live.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata, blogCanonical } from "@/lib/seo";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/content/blog";
import { BlogTemplate } from "@/templates/blog-template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getBlogPostBySlug(slug);
  if (!page) return constructMetadata({ title: "Post Not Found", noIndex: true });

  return constructMetadata({
    title: page.title,
    description: page.description,
    canonical: blogCanonical(slug),
    ogType: "article",
    publishedTime: page.publishedTime,
    authors: [page.author.name],
    keywords: page.tags,
    ...(page.metadata ?? {}),
  });
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getBlogPostBySlug(slug);
  if (!page) notFound();
  return <BlogTemplate page={page} />;
}
