"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 })
};

export function TestimonialsSection() {
  const [[index, dir], setState] = React.useState<[number, number]>([0, 0]);
  const [auto, setAuto] = React.useState(true);

  const paginate = React.useCallback((d: number) => {
    setState(([i]) => [(i + d + testimonials.length) % testimonials.length, d]);
  }, []);

  React.useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => paginate(1), 5000);
    return () => clearInterval(t);
  }, [auto, paginate]);

  const active = testimonials[index];

  return (
    <section className="section-pad relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-mesh opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories of care from our patients"
          description="Real experiences from the families who trust us with their health."
        />
        <div
          className="relative mt-12"
          onMouseEnter={() => setAuto(false)}
          onMouseLeave={() => setAuto(true)}
        >
          <Quote className="absolute -top-4 left-1/2 z-10 h-10 w-10 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary to-teal p-2 text-white shadow-glow" />
          <div className="relative min-h-[340px] [perspective:1200px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <TestimonialCard testimonial={active} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === index ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
