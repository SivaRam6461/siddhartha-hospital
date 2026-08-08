import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { faqSchema } from "@/lib/seo";
import { faqs } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about appointments, emergency care, insurance, visiting hours, and health checkups at Siddhartha Hospital.",
  alternates: { canonical: "/faq" },
  other: {
    "application/ld+json": JSON.stringify(faqSchema(faqs))
  }
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers you need, clearly"
        description="Everything you should know before your visit — bookings, emergencies, insurance, and more."
      />
      <Breadcrumb items={[{ name: "FAQ", href: "current" }]} />
      <FaqSection heading="Frequently asked questions" />
      <CtaSection />
    </>
  );
}
