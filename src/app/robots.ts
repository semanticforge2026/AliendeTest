/**
 * =============================================================================
 * src/app/robots.ts — Robots.txt Generation
 * =============================================================================
 *
 * Next.js 15 App Router generates /robots.txt automatically from this file.
 * Rules here:
 *   - Allow all bots on public content
 *   - Disallow private/admin routes and Next.js internals
 *   - Point to the sitemap for crawl efficiency
 *
 * SCALING:
 *   - Add specific rules for SEO-fragile bots (GPTBot, Claude-Web etc.)
 *   - Add Disallow entries for private product/customer pages
 * =============================================================================
 */

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard web crawlers
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",         // Internal API routes
          "/_next/",       // Next.js internal assets
          "/admin/",       // Future admin panel
          "/dashboard/",   // Future authenticated dashboard
          "/private/",     // Any private content
          "/dev/",         // Dev-only test pages
        ],
      },
      {
        // Block AI training crawlers from scraping content
        // Adjust this policy based on business requirements
        userAgent: ["GPTBot", "Google-Extended", "Claude-Web", "CCBot"],
        disallow: ["/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
