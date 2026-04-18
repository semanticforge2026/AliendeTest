/**
 * BlogTemplate — RSC layout for /blog/[slug] pages.
 *
 * DESIGN GUARDRAIL:
 *   - Uses IntroBlock for hero consistency.
 *   - Editorial typography with article-width constraint.
 *   - Smooth transitions for related content modules.
 */
import type { BlogPost } from "@/types/content";
import { siteConfig } from "@/data/config";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/schema";
import { SectionReveal } from "@/components/sections/section-reveal";
import { Badge } from "@/components/ui/badge";
import { CTABand, RelatedContentBlock, IntroBlock } from "@/components/blocks";

export function BlogTemplate({ page }: { page: BlogPost }) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Journal", href: "/blog" },
    { label: page.title, href: `/blog/${page.slug}` },
  ];

  const formattedDate = new Date(page.publishedTime).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <BreadcrumbSchema
        items={breadcrumbs.map((b) => ({ name: b.label, href: `${siteConfig.url}${b.href}` }))}
      />
      <ArticleSchema
        headline={page.title}
        description={page.description}
        url={`${siteConfig.url}/blog/${page.slug}`}
        publishedTime={page.publishedTime}
        modifiedTime={page.modifiedTime}
        authorName={page.author.name}
      />

      {/* Hero Intro */}
      <IntroBlock
        eyebrow="Aliende Journal"
        headline={page.title}
        body={page.description}
        breadcrumbs={breadcrumbs}
        className="pb-0"
      />

      {/* Meta Bar */}
      <section className="container-premium">
        <SectionReveal>
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted pb-12 border-b border-border-subtle">
            <span className="font-medium text-text-primary">{page.author.name}{page.author.role ? ` · ${page.author.role}` : ""}</span>
            <span aria-hidden="true" className="opacity-30">|</span>
            <span>{formattedDate}</span>
            <span aria-hidden="true" className="opacity-30">|</span>
            {page.readingTime && <span>{page.readingTime} min read</span>}
          </div>
        </SectionReveal>
      </section>

      {/* Article Body */}
      <article className="section-padding py-16 lg:py-24 container-premium">
        <SectionReveal>
          <div
            className="article-width prose prose-neutral max-w-none body-base leading-relaxed space-y-8"
            dangerouslySetInnerHTML={{ __html: page.content.replace(/\n/g, "<br/>") }}
          />
        </SectionReveal>
      </article>

      {/* Tags */}
      {page.tags.length > 0 && (
        <section className="container-premium pb-20">
          <SectionReveal>
            <div className="flex flex-wrap gap-3">
              {page.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="px-4 py-1 text-[11px] uppercase tracking-wider">{tag}</Badge>
              ))}
            </div>
          </SectionReveal>
        </section>
      )}

      {/* Internal links */}
      {(page.relatedPosts?.length || page.relatedServices?.length) && (
        <RelatedContentBlock
          heading="Continue Reading"
          items={[
            ...(page.relatedPosts?.map((slug) => ({
              label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/blog/${slug}`,
            })) ?? []),
            ...(page.relatedServices?.map((slug) => ({
              label: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/services/${slug}`,
              description: "View technical specifications",
            })) ?? []),
          ]}
        />
      )}

      {page.cta && <CTABand {...page.cta} />}
    </>
  );
}
