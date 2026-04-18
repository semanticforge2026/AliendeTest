"use client";

/**
 * Header — Sticky Navigation
 *
 * DESIGN GUARDRAILS:
 *   - Height is fixed at h-16 (64px). Do NOT increase this.
 *   - The mobile menu is a full-screen overlay; it does not push content down.
 *   - Active nav links receive aria-current="page" via the usePathname hook.
 *   - The "Get Started" CTA always uses btn-primary — do not make it text-only.
 *
 * ACCESSIBILITY:
 *   - <nav> has aria-label="Main navigation"
 *   - Mobile toggle uses aria-expanded + aria-controls
 *   - Mobile menu traps focus when open (via dialog role could be added later)
 *   - All interactive elements are keyboard-focusable
 */

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/config";

const NAV_LINKS = [
  { href: "/services",     label: "Services"     },
  { href: "/marketplace",  label: "Marketplace"  },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/solutions/logistics", label: "Solutions" },
  { href: "/about",        label: "About"        },
] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip-to-content — first focusable element on the page */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header
        className="sticky top-0 z-50 w-full border-b border-border-subtle bg-surface/90 backdrop-blur-md"
        role="banner"
      >
        <div className="container-premium flex h-16 items-center justify-between">

          {/* Brand Wordmark */}
          <Link
            href="/"
            className="font-heading text-xl font-semibold tracking-tight text-text-primary transition-opacity hover:opacity-75 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label={`${siteConfig.name} — Home`}
          >
            {siteConfig.name}<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => {
              // Match active state — startsWith for sub-routes
              // Using a simple startsWith check to avoid type overlap issues with "as const"
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors duration-150 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                    isActive
                      ? "text-text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-6">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 flex flex-col bg-surface pt-16 md:hidden"
        >
          {/* Backdrop (click to close) */}
          <div
            className="absolute inset-0 bg-background/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu content */}
          <nav
            aria-label="Mobile main navigation"
            className="relative z-10 flex flex-col px-5 pt-8 pb-12 h-full bg-surface border-t border-border-subtle overflow-auto"
          >
            <ul className="space-y-1 flex-1">
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex w-full items-center rounded-lg px-4 py-3.5 text-base font-medium transition-colors",
                        isActive
                          ? "bg-accent-wash text-text-primary"
                          : "text-text-secondary hover:bg-surface-elevated hover:text-text-primary"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-border-subtle">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center py-4"
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
