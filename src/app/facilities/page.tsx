import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { Wifi, ParkingCircle, Accessibility, Coffee, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore Siddhartha Hospital's world-class infrastructure — modern operation theatres, ICU, imaging, comfortable rooms and patient amenities.",
  alternates: { canonical: "/facilities" }
};

const amenities = [
  { icon: Accessibility, title: "Wheelchair Access", text: "Ramps, lifts, and priority help for senior citizens and patients with mobility needs." },
  { icon: ParkingCircle, title: "Ample Parking", text: "Safe, well-lit parking for patients and visitors within the hospital premises." },
  { icon: Wifi, title: "Free Wi-Fi", text: "Stay connected with loved ones throughout your visit and recovery." },
  { icon: Coffee, title: "Cafeteria & Waiting", text: "Comfortable waiting lounges and a hygienic cafeteria for families." },
  { icon: ShieldCheck, title: "Safety & Hygiene", text: "Rigorous infection-control protocols across all departments and wards." },
  { icon: Clock, title: "24/7 Pharmacy", text: "Round-the-clock pharmacy so medicines are always within reach." }
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities & Amenities"
        title="Infrastructure built for healing"
        description="Purpose-designed spaces and modern medical technology that support comfort, safety, and the best outcomes."
      />
      <Breadcrumb items={[{ name: "Facilities", href: "current" }]} />
      <FacilitiesSection />
      <section className="section-pad relative overflow-hidden bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <StaggerItem
                key={a.title}
                className="flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <a.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
