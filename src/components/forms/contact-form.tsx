"use client";

/**
 * ContactForm — Client Component
 * Extracted from contact/page.tsx so the page itself stays a Server Component
 * and can export `metadata`. All interactivity lives here.
 */
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PrimaryButton, SecondaryButton } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-12">
      {/* Form Side */}
      <div className="card-premium h-fit shadow-none bg-surface border-border-strong">
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-text-primary mb-2">First Name</label>
              <Input id="first-name" placeholder="Jane" autoComplete="given-name" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-text-primary mb-2">Last Name</label>
              <Input id="last-name" placeholder="Doe" autoComplete="family-name" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Corporate Email</label>
            <Input id="email" type="email" placeholder="jane@enterprise.com" autoComplete="email" />
          </div>

          <div>
            <label htmlFor="inquiry-type" className="block text-sm font-medium text-text-primary mb-2">Inquiry Type</label>
            <Select id="inquiry-type">
              <option>Architecture Audit</option>
              <option>Custom LLM Training</option>
              <option>Workflow Automation</option>
              <option>General Support</option>
            </Select>
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-text-primary mb-2">Project Details</label>
            <Textarea
              id="details"
              placeholder="Please outline your existing tech stack and current bottlenecks..."
            />
          </div>

          <PrimaryButton type="submit" className="w-full mt-4">Submit Inquiry</PrimaryButton>
        </form>
      </div>

      {/* Info Side */}
      <div className="flex flex-col space-y-12">
        <div className="space-y-6">
          <h3 className="heading-3">Faster Resolution</h3>
          <p className="body-base">
            Prefer to bypass the intake form? Secure a 30-minute discovery call directly on our calendar.
          </p>
          <SecondaryButton>Book Discovery Call</SecondaryButton>
        </div>

        <div className="space-y-6 border-t border-border-subtle pt-12">
          <h3 className="heading-3">Global Offices</h3>
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-text-muted mt-1" aria-hidden="true" />
            <div>
              <h4 className="font-medium text-text-primary">London (HQ)</h4>
              <p className="text-sm text-text-muted">71-75 Shelton Street, Covent Garden</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-text-muted mt-1" aria-hidden="true" />
            <div>
              <h4 className="font-medium text-text-primary">Direct Email</h4>
              <p className="text-sm text-text-muted">architecture@aliende.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-text-muted mt-1" aria-hidden="true" />
            <div>
              <h4 className="font-medium text-text-primary">Support Line</h4>
              <p className="text-sm text-text-muted">+44 (0) 20 7946 0958</p>
            </div>
          </div>
        </div>

        <div className="rounded-card bg-surface-elevated border border-border-subtle p-6 mt-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-2">Security Promise</p>
          <p className="text-sm text-text-secondary leading-relaxed">
            All communications and project details are strictly protected under global NDA protocols prior to initialization. We never share intake data.
          </p>
        </div>
      </div>
    </div>
  );
}
