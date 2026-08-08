"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Siren, Phone, X, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function EmergencyBanner() {
  const [dismissed, setDismissed] = React.useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 overflow-hidden bg-destructive text-destructive-foreground"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2.5 text-sm font-semibold">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-white/40" />
                <Siren className="h-4 w-4" />
              </span>
              <span className="hidden sm:inline">24/7 Emergency &amp; Critical Care</span>
              <span className="sm:hidden">Emergency</span>
              <Clock className="hidden h-4 w-4 sm:inline" />
              <span className="hidden text-white/90 sm:inline">Always open</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.emergencyPhone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-sm font-bold transition-colors hover:bg-white/25"
              >
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.emergencyPhone}
              </a>
              <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss emergency banner"
                className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
