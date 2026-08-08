"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  Phone,
  Siren,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Award,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { siteConfig, stats } from "@/lib/constants";
import { BlobField, AnimatedWaves, FloatingIcon } from "@/components/animations/decorations";
import { Counter } from "@/components/animations/counter";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-12 sm:pt-16">
      <BlobField />
      <div className="absolute inset-0 bg-grid-pattern [background-size:36px_36px] opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <AnimatedWaves className="text-primary/[0.06]" />

      <FloatingIcon className="right-[8%] top-[22%]" delay={0}>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl glass text-primary">
          <Stethoscope className="h-6 w-6" />
        </span>
      </FloatingIcon>
      <FloatingIcon className="left-[6%] top-[30%]" delay={1.5}>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-teal">
          <HeartPulse className="h-5 w-5" />
        </span>
      </FloatingIcon>
      <FloatingIcon className="right-[14%] bottom-[18%]" delay={2.5}>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-primary">
          <ShieldCheck className="h-5 w-5" />
        </span>
      </FloatingIcon>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {siteConfig.workingHours}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-display font-extrabold leading-[1.04] text-foreground"
          >
            Your Health,
            <br />
            <span className="text-gradient">Our Highest Priority</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Providing trusted healthcare with compassion, advanced treatments, experienced
            doctors, and patient-centered care for families in Rajamahendravaram.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton asChild size="lg">
              <Link href="/appointment">
                <CalendarDays className="h-5 w-5" />
                Book Appointment
              </Link>
            </MagneticButton>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="emergency">
              <a href={`tel:${siteConfig.emergencyPhone.replace(/[^\d+]/g, "")}`}>
                <Siren className="h-5 w-5" />
                24/7 Emergency
              </a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: Award, label: "NABL-aligned Labs" },
              { icon: ShieldCheck, label: "Safe & Hygienic" },
              { icon: HeartPulse, label: "Compassionate Care" }
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <b.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-foreground/80">{b.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/40 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1100&auto=format&fit=crop"
              alt="Siddhartha Multi Speciality Hospital building and facilities"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1, ease }}
            className="absolute -left-4 top-10 hidden w-56 rounded-2xl glass-strong p-4 shadow-card sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal text-white">
                <HeartPulse className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Dr. Siddhartha Rao</p>
                <p className="text-sm font-semibold text-foreground">Critical Care Lead</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs font-medium text-teal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              Available now
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease }}
            className="absolute -bottom-6 right-2 w-60 rounded-2xl glass-strong p-5 shadow-card"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              Trusted by families
            </p>
            <p className="mt-2 text-3xl font-extrabold text-foreground">
              <Counter value={200000} suffix="+" />
            </p>
            <p className="text-sm text-muted-foreground">Patients treated with care</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
