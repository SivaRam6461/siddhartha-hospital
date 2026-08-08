import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { MissionVision } from "@/components/sections/mission-vision";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { StatsBand } from "@/components/sections/stats-band";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { values } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Siddhartha Multi Speciality Hospital — our mission, vision, values, and 17+ years of trusted healthcare in Rajamahendravaram.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Siddhartha Hospitals"
        title="Compassionate care, clinical excellence"
        description="A trusted multi-speciality hospital serving families across Rajamahendravaram with advanced medicine and a human touch."
      />
      <Breadcrumb items={[{ name: "About", href: "current" }]} />
      <section className="relative overflow-hidden pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal direction="right">
              <div className="relative">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/40 shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1100&auto=format&fit=crop"
                    alt="Hospital interior and patient care"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 w-44 rounded-2xl glass-strong p-5 shadow-card">
                  <p className="text-3xl font-extrabold text-gradient">50+</p>
                  <p className="text-sm font-medium text-muted-foreground">Expert doctors</p>
                </div>
              </div>
            </Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Our Story
              </span>
              <h2 className="mt-4 text-balance text-heading font-bold text-foreground">
                Built on a promise to care
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Since 2008, Siddhartha Multi Speciality Hospital has grown from a community clinic
                into one of Rajamahendravaram&apos;s most trusted healthcare institutions. We
                combine modern infrastructure with a warmth that makes every patient feel at home.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our multidisciplinary team works together to deliver accurate diagnosis, advanced
                treatment, and gentle, patient-centered care — because healing is about more than
                medicine.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StatsBand />
      <MissionVision />
      <section className="section-pad relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal text-lg font-bold text-white shadow-glow">
                  {v.title[0]}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <WhyChooseUs />
      <CtaSection />
    </>
  );
}
