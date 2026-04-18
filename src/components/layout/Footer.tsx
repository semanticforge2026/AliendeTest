/**
 * Global Footer Component
 *
 * DESIGN GUARDRAIL:
 *   - Column headers use label-overline utility.
 *   - Links use text-sm font-medium with hover transitions.
 *   - Brand mark (Aliende.) uses font-heading semibold.
 *   - Bottom bar provides clean separation with copyright and legal links.
 */
import Link from "next/link";
import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface py-20 lg:py-24 mt-auto">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-8">
            <Link 
              href="/" 
              className="font-heading text-2xl font-semibold tracking-tight text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`${siteConfig.name} Home`}
            >
              {siteConfig.name}<span className="text-accent">.</span>
            </Link>
            <h2 className="heading-3 max-w-sm text-balance">
              Empowering business through intelligent automation.
            </h2>
            <p className="body-base max-w-sm">
              We build hyper-premium marketplaces and automation tools that scale seamlessly across enterprise environments.
            </p>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="label-overline mb-8">Platform</h3>
            <ul className="space-y-4 text-sm font-medium text-text-secondary" aria-label="Platform navigation">
              <li>
                <Link href="/services" className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label-overline mb-8">Company</h3>
            <ul className="space-y-4 text-sm font-medium text-text-secondary" aria-label="Company navigation">
              <li>
                <Link href="/about" className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                   Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-subtle text-[10px] md:text-xs text-text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0 uppercase tracking-widest font-semibold">
            <Link href="/privacy" className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
