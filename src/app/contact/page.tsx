import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Siddhartha Multi Speciality Hospital — address, phone, email, maps, and directions in Rajamahendravaram.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our care team"
        description="We're here to help with appointments, directions, and any questions you may have."
      />
      <Breadcrumb items={[{ name: "Contact", href: "current" }]} />
      <ContactSection />
      <CtaSection />
    </>
  );
}
