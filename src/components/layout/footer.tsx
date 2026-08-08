import Link from "next/link";
import { HeartPulse, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { siteConfig, navLinks, departments } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";

const servicesLinks = [
  "Emergency Care",
  "Health Checkups",
  "Diagnostics",
  "Mother & Child",
  "Surgery",
  "Vaccination"
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/40">
      <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <Reveal direction="up">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal text-white shadow-glow">
                <HeartPulse className="h-5 w-5" />
              </span>
              <div className="leading-none">
                <p className="text-base font-bold text-foreground">{siteConfig.shortName}</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary">
                  Multi Speciality
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/70 transition-colors hover:bg-primary hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/70 transition-colors hover:bg-primary hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.05}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {servicesLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  {siteConfig.address.line1},<br />
                  {siteConfig.address.city} – {siteConfig.address.pincode},<br />
                  {siteConfig.address.state}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {siteConfig.workingHours}
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/faq" className="transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="/faq" className="transition-colors hover:text-primary">
              Terms
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
