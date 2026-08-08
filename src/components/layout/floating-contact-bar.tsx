"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, CalendarDays, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FloatingContactBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            <FloatingAction
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              label="Call Us"
              icon={<Phone className="h-5 w-5" />}
              className="bg-primary text-primary-foreground"
            />
            <FloatingAction
              href="https://wa.me/918842470000"
              label="WhatsApp"
              icon={<MessageCircle className="h-5 w-5" />}
              className="bg-[#25D366] text-white"
            />
            <FloatingAction
              href="/appointment"
              label="Book Appointment"
              icon={<CalendarDays className="h-5 w-5" />}
              className="bg-teal text-teal-foreground"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal text-white shadow-glow transition-transform hover:scale-105"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </button>
    </div>
  );
}

function FloatingAction({
  href,
  label,
  icon,
  className
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  className: string;
}) {
  const external = href.startsWith("http") || href.startsWith("tel:");
  const Comp = external ? "a" : Link;
  return (
    <motion.a
      href={href}
      target={external && href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ x: -4 }}
      className={cn(
        "group flex items-center gap-3 rounded-full py-3 pl-4 pr-5 shadow-card",
        className
      )}
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </motion.a>
  );
}
