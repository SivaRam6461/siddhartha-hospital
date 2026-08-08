import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/cards/service-card";
import { services } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";

export function ServicesSection() {
  return (
    <section className="section-pad relative overflow-hidden" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Complete healthcare under one roof"
          description="Modern facilities and round-the-clock services designed for fast, accurate, and comfortable care."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Explore our full range of treatments and care programs on the{" "}
            <Link href="/services" className="font-semibold text-primary hover:underline">
              Services page
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
