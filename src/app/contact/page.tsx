/**
 * Contact page — Server Component.
 * Form interactivity is delegated to <ContactForm /> (client component),
 * allowing this page to export `metadata` for SEO.
 */
import { contactMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/sections/section-heading";
import { SectionReveal } from "@/components/sections/section-reveal";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <div className="section-padding container-premium min-h-screen">
      <SectionReveal>
        <SectionHeading
          title="Initiate a Consultation"
          subtitle="Direct access to our architecture team to discuss custom integrations and deployment scopes."
        />
        <ContactForm />
      </SectionReveal>
    </div>
  );
}
