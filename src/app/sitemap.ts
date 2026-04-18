import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";
import { getAllServiceSlugs } from "@/content/services";
import { getAllSolutionIndustries } from "@/content/solutions";
import { getAllCaseStudySlugs } from "@/content/case-studies";
import { getAllBlogSlugs } from "@/content/blog";
import { getAllProductSlugs } from "@/content/marketplace";
import { getAllComparisonSlugs } from "@/content/comparisons";
import { getAllGlossaryTermSlugs } from "@/content/glossary";


// ---------------------------------------------------------------------------
// Helper: Build absolute URL
// ---------------------------------------------------------------------------
const url = (path: string) => `${siteConfig.url}${path}`;

// ---------------------------------------------------------------------------
// Sitemap
// ---------------------------------------------------------------------------

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // ---- Static core pages ------------------------------------------------
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: url("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/marketplace"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: url("/case-studies"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/blog"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },

    // ---- Dynamic: Services — auto-populated from content registry ----------
    ...getAllServiceSlugs().map((slug) => ({
      url: url(`/services/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // ---- Dynamic: Marketplace ---------------------------------------------
    ...getAllProductSlugs().map((slug) => ({
      url: url(`/marketplace/${slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),

    // ---- Dynamic: Case Studies --------------------------------------------
    ...getAllCaseStudySlugs().map((slug) => ({
      url: url(`/case-studies/${slug}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),

    // ---- Dynamic: Blog ----------------------------------------------------
    ...getAllBlogSlugs().map((slug) => ({
      url: url(`/blog/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // ---- Dynamic: Solutions by Industry ------------------------------------
    ...getAllSolutionIndustries().map((industry) => ({
      url: url(`/solutions/${industry}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // ---- Dynamic: Comparisons (high-intent) --------------------------------
    ...getAllComparisonSlugs().map((slug) => ({
      url: url(`/compare/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8, // High-intent pages — boosted priority
    })),

    // ---- Dynamic: Glossary ------------------------------------------------
    ...getAllGlossaryTermSlugs().map((term) => ({
      url: url(`/glossary/${term}`),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

