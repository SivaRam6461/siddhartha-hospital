import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

const details = [
  { icon: MapPin, label: "Address", value: `${siteConfig.address.line1}, ${siteConfig.address.city} – ${siteConfig.address.pincode}, ${siteConfig.address.state}` },
  { icon: Phone, label: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` },
  { icon: Phone, label: "Emergency", value: siteConfig.emergencyPhone, href: `tel:${siteConfig.emergencyPhone.replace(/[^\d+]/g, "")}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "Hours", value: siteConfig.workingHours }
];

const mapSrc = `https://www.google.com/maps?q=${siteConfig.mapsQuery}&output=embed`;

export function ContactSection() {
  return (
    <section className="section-pad relative overflow-hidden" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Contact Us
            </span>
            <h2 className="mt-4 text-balance text-heading font-bold text-foreground">
              We&apos;re here for you, every step of the way
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Reach out to our team for appointments, directions, or any questions about our
              services. We respond promptly and with care.
            </p>
            <Stagger className="mt-8 space-y-4">
              {details.map((d) => (
                <StaggerItem
                  key={d.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal text-white">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">{d.value}</p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal direction="left">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <iframe
                title="Siddhartha Multi Speciality Hospital location map"
                src={mapSrc}
                loading="lazy"
                className="h-[360px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  {siteConfig.address.line1}, {siteConfig.address.city}
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
