import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { Target, Eye, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver accessible, affordable, and advanced healthcare with compassion — improving the health and wellbeing of every family we serve.",
    accent: "from-primary to-blue-500"
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted multi-speciality hospital in Andhra Pradesh, setting the standard for clinical excellence and patient experience.",
    accent: "from-teal to-emerald-500"
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Compassion, integrity, and innovation guide every decision — because healthcare is fundamentally about people.",
    accent: "from-indigo-500 to-primary"
  }
] as const;

const timeline = [
  { year: "2008", text: "Siddhartha Hospital founded in Rajamahendravaram." },
  { year: "2013", text: "Expanded into a multi-speciality facility with ICU." },
  { year: "2017", text: "Launched advanced surgical & diagnostic centres." },
  { year: "2021", text: "Introduced 24/7 emergency and critical care." },
  { year: "2025", text: "Serving 200,000+ patients across the region." }
];

export function MissionVision() {
  return (
    <section className="section-pad relative overflow-hidden" id="mission-vision">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-glow transition-transform duration-300 group-hover:scale-110`}
                >
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Our Journey
            </span>
            <h2 className="mt-4 text-balance text-heading font-bold text-foreground">
              Milestones that built our legacy
            </h2>
          </Reveal>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-teal to-transparent md:left-1/2" />
            <Stagger className="space-y-8">
              {timeline.map((t, i) => (
                <StaggerItem key={t.year} className="relative pl-12 md:pl-0">
                  <span
                    className={`absolute left-4 top-2 z-10 flex h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/15 md:left-1/2 ${
                      i === timeline.length - 1 ? "bg-teal ring-teal/20" : ""
                    }`}
                  />
                  <div
                    className={`rounded-2xl border border-border bg-card p-5 shadow-soft md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <p className="text-2xl font-extrabold text-gradient">{t.year}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
