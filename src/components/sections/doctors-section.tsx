import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { DoctorCard } from "@/components/cards/doctor-card";
import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";
import { BlobField } from "@/components/animations/decorations";

export function DoctorsSection({
  limit,
  showCta = true
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const list = limit ? doctors.slice(0, limit) : doctors;
  return (
    <section className="section-pad relative overflow-hidden bg-secondary/40" id="doctors">
      <BlobField className="opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Doctors"
          title="Meet our expert medical team"
          description="Compassionate specialists with decades of combined experience, dedicated to your recovery and wellbeing."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((doc, i) => (
            <DoctorCard key={doc.name} doctor={doc} index={i} />
          ))}
        </div>
        {showCta && (
          <Reveal className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/doctors">Meet All Doctors</Link>
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
