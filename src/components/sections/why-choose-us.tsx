import { SectionHeading } from "@/components/sections/section-heading";
import { whyChooseUs } from "@/lib/constants";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { BlobField } from "@/components/animations/decorations";

export function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-secondary/40" id="why-us">
      <BlobField className="opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Healthcare designed around you"
          description="Everything we do is built on a foundation of trust, safety, and a deep commitment to your wellbeing."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
