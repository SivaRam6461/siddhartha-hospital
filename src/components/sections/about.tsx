import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Microscope, Users, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { siteConfig } from "@/lib/constants";

const pillars = [
  {
    icon: Microscope,
    title: "Advanced Diagnostics",
    text: "Modern imaging, pathology, and monitoring for accurate, timely diagnosis."
  },
  {
    icon: Users,
    title: "Specialist Team",
    text: "Senior consultants across 25+ specialities working together for you."
  },
  {
    icon: HeartHandshake,
    title: "Patient First",
    text: "Transparent, compassionate care plans built around every patient."
  }
];

export function About() {
  return (
    <section className="section-pad relative overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/40 shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1100&auto=format&fit=crop"
                  alt="Doctors and staff at Siddhartha Hospital"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-2xl glass-strong p-5 shadow-card sm:block">
                <p className="text-3xl font-extrabold text-gradient">2008</p>
                <p className="text-sm font-medium text-muted-foreground">Serving since</p>
              </div>
              <div className="absolute -left-5 top-8 h-24 w-24 rounded-3xl bg-teal/10 blur-2xl" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="A trusted name in healthcare for Rajamahendravaram"
              description="For over 17 years, Siddhartha Multi Speciality Hospital has been a pillar of healing in the community — combining clinical excellence with genuine compassion for every patient who walks through our doors."
            />

            <Stagger className="mt-8 space-y-4">
              {pillars.map((p) => (
                <StaggerItem
                  key={p.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1} className="mt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
