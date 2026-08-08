import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { AppointmentSection } from "@/components/sections/appointment-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book an appointment online at Siddhartha Multi Speciality Hospital. Choose your department, doctor, and preferred time — our team confirms promptly.",
  alternates: { canonical: "/appointment" }
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Online Appointment"
        title="Book your visit in minutes"
        description="Choose a department and time that works for you. For emergencies, please call our 24/7 line right away."
      />
      <Breadcrumb items={[{ name: "Appointment", href: "current" }]} />
      <AppointmentSection />
      <CtaSection />
    </>
  );
}
