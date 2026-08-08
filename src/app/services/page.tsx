import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { ServicesSection } from "@/components/sections/services-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { Ambulance, HeartPulse, Baby, Activity, Scissors, Syringe } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover our comprehensive healthcare services — emergency & ICU, diagnostics, mother & child care, surgery, cardiac care and preventive health.",
  alternates: { canonical: "/services" }
};

const serviceDetail = [
  {
    icon: Ambulance,
    title: "24/7 Emergency & Critical Care",
    text: "A dedicated trauma team, fully equipped ambulances, and an ICU monitored around the clock for life-saving care."
  },
  {
    icon: Activity,
    title: "Diagnostics & Laboratory",
    text: "Pathology, radiology, and imaging with fast, accurate reporting to guide the right treatment."
  },
  {
    icon: Baby,
    title: "Mother & Child Care",
    text: "Antenatal, maternity, neonatal, and pediatric services in a calming, child-friendly environment."
  },
  {
    icon: HeartPulse,
    title: "Cardiac & Internal Medicine",
    text: "ECG, echo, and chronic disease management by experienced physicians and cardiologists."
  },
  {
    icon: Scissors,
    title: "Surgical Excellence",
    text: "Modern operation theatres supporting minimally invasive and complex surgical procedures."
  },
  {
    icon: Syringe,
    title: "Preventive & Wellness",
    text: "Master health checkups, vaccinations, and lifestyle counseling for long-term wellbeing."
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete care, end to end"
        description="Modern, integrated services designed to support you from prevention and diagnosis through treatment and recovery."
      />
      <Breadcrumb items={[{ name: "Services", href: "current" }]} />
      <ServicesSection />
      <section className="section-pad relative overflow-hidden bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetail.map((s) => (
              <StaggerItem
                key={s.title}
                className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:border-primary/30"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-teal/10 text-primary transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <FacilitiesSection />
      <CtaSection />
    </>
  );
}
