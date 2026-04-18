import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/schema";
import { constructMetadata, DEFAULT_TITLE, TITLE_TEMPLATE } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/**
 * Root Layout Metadata
 *
 * The `title.template` here is what produces "Services | Aliende".
 * Sub-page `export const metadata = { title: "Services" }` feeds into the template.
 * The `title.default` is fallback for any route without its own title export.
 */
export const metadata = constructMetadata({
  // No explicit title → triggers the absolute DEFAULT_TITLE for the root
});

// Override the title to use the template pattern for sub-pages.
// This can't be done inside constructMetadata() cleanly because we need to
// set both `default` (for homepage) and `template` (for sub-pages) at the same level.
(metadata as Record<string, unknown>).title = {
  default: DEFAULT_TITLE,
  template: TITLE_TEMPLATE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}>
      <head>
        {/*
          Global JSON-LD schemas — mounted once here so they appear on every page.
          Google recommends Organization and WebSite schema on the homepage
          and sitewide if the data is consistent.
        */}
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-primary selection:bg-accent-wash selection:text-accent-deep">
        <Header />
        {/*
          id="main-content" is the skip-link target from the Header.
          tabIndex={-1} allows programmatic focus from the skip link without
          making the element part of the natural tab order.
        */}
        <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col w-full outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
