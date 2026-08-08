import Link from "next/link";
import { SectionHeading } from "@/components/sections/section-heading";
import { DepartmentCard } from "@/components/cards/department-card";
import { Button } from "@/components/ui/button";
import { departments } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";

export function DepartmentsSection({
  limit,
  showCta = true,
  heading = "Comprehensive care across specialities"
}: {
  limit?: number;
  showCta?: boolean;
  heading?: string;
}) {
  const list = limit ? departments.slice(0, limit) : departments;
  return (
    <section className="section-pad relative overflow-hidden" id="departments">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Departments"
          title={heading}
          description="From routine care to complex procedures, our specialist departments are equipped to handle every health need under one roof."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((dept, i) => (
            <DepartmentCard key={dept.slug} department={dept} index={i} />
          ))}
        </div>
        {showCta && (
          <Reveal className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/departments">View All Departments</Link>
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
