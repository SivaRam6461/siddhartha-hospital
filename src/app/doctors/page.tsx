import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DoctorsSection } from "@/components/sections/doctors-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the experienced specialists at Siddhartha Multi Speciality Hospital, dedicated to compassionate, expert care.",
  alternates: { canonical: "/doctors" }
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Expert Team"
        title="Doctors who truly care"
        description="Senior consultants and specialists across every major discipline, committed to your health and recovery."
      />
      <Breadcrumb items={[{ name: "Doctors", href: "current" }]} />
      <DoctorsSection showCta={false} />
      <CtaSection />
    </>
  );
}
