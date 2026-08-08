"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Mail, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlobField } from "@/components/animations/decorations";

export function CtaSection() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">("idle");

  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      setEmail("");
    }, 1200);
  }

  return (
    <section className="section-pad relative overflow-hidden" id="cta">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-primary via-blue-700 to-teal px-6 py-14 text-center shadow-glow-blue sm:px-12 sm:py-20">
          <BlobField className="opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-grid-pattern [background-size:32px_32px] opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-heading font-extrabold text-white">
              Your family&apos;s health deserves the best care
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-base text-white/85 sm:text-lg">
              Book an appointment today or subscribe for health tips and hospital updates from our
              specialists.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="teal">
                <Link href="/appointment">
                  <CalendarDays className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <a href="tel:+918842470000">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </a>
              </Button>
            </div>

            <div className="mx-auto mt-10 max-w-md">
              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.p
                    key="done"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Subscribed! Thank you.
                  </motion.p>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={subscribe}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-2 rounded-full border border-white/30 bg-white/10 p-1.5 sm:flex-row"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      aria-label="Email address"
                      className="h-11 flex-1 rounded-full bg-transparent px-5 text-sm text-white placeholder:text-white/60 focus:outline-none"
                    />
                    <Button
                      type="submit"
                      size="default"
                      className="rounded-full bg-white text-primary hover:bg-white/90"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        "Subscribe"
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
