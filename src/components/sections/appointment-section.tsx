import { SectionHeading } from "@/components/sections/section-heading";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { siteConfig } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { BlobField } from "@/components/animations/decorations";

const info = [
  { icon: Phone, label: "Call Us", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Location", value: `${siteConfig.address.city}, ${siteConfig.address.state}` },
  { icon: Clock, label: "Hours", value: siteConfig.workingHours }
];

export function AppointmentSection() {
  return (
    <section className="section-pad relative overflow-hidden" id="appointment">
      <BlobField className="opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Book a Visit"
              title="Request your appointment online"
              description="Fill the form and our care team will confirm your slot. For urgent needs, our 24/7 emergency line is always open."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {info.map((i, idx) => (
                <Reveal key={i.label} delay={idx * 0.06}>
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <i.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {i.label}
                      </p>
                      {i.href ? (
                        <a
                          href={i.href}
                          className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                        >
                          {i.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{i.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left">
            <AppointmentForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
