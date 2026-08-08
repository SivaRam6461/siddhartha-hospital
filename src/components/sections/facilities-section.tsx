import { SectionHeading } from "@/components/sections/section-heading";
import { FacilityCard } from "@/components/cards/facility-card";
import { facilities } from "@/lib/constants";

export function FacilitiesSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-secondary/40" id="facilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Facilities"
          title="World-class infrastructure"
          description="Purpose-built spaces equipped with modern medical technology to support the best possible outcomes."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {facilities.map((f, i) => (
            <FacilityCard key={f.title} facility={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
