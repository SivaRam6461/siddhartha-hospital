import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { DepartmentsSection } from "@/components/sections/departments-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "Explore our specialist departments — General Medicine, Pediatrics, Orthopedics, Gynecology, Emergency Care, Diabetology and more.",
  alternates: { canonical: "/departments" }
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Departments"
        title="Specialist care for every need"
        description="From preventive health to critical care, our departments bring together the right experts, technology, and compassion."
      />
      <Breadcrumb items={[{ name: "Departments", href: "current" }]} />
      <DepartmentsSection showCta={false} heading="Explore our medical specialities" />
      <CtaSection />
    </>
  );
}
