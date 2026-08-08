"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarDays, ChevronDown, HeartPulse } from "lucide-react";
import { navLinks, departments, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openMega, setOpenMega] = React.useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  React.useEffect(() => {
    setMobileOpen(false);
    setOpenMega(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mt-3 flex w-full items-center justify-between rounded-2xl border backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "glass-strong border-border/70 py-2.5 pl-4 pr-3 shadow-card"
              : "border-white/50 bg-white/75 py-3 pl-4 pr-3 shadow-soft dark:border-white/10 dark:bg-white/5"
          )}
        >
          <Link href="/" className="group flex items-center gap-3" aria-label={siteConfig.name}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal text-white shadow-glow">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                Siddhartha
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                Multi Speciality
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.slice(0, 4).map((link) =>
              link.href === "/departments" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenMega(true)}
                  onMouseLeave={() => setOpenMega(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                      pathname.startsWith(link.href) ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openMega && "rotate-180"
                      )}
                    />
                  </button>
                  <MegaMenu open={openMega} />
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary sm:flex"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">{siteConfig.phoneDisplay}</span>
            </a>
            <ThemeToggle className="hidden sm:inline-flex" />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/appointment">
                <CalendarDays className="h-4 w-4" />
                Book Appointment
              </Link>
            </Button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-border bg-card p-4 shadow-card lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary",
                    pathname === link.href ? "bg-secondary text-primary" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
              <ThemeToggle />
              <Button asChild className="flex-1">
                <Link href="/appointment">
                  <CalendarDays className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MegaMenu({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.18 }}
          className="absolute left-1/2 top-full z-50 mt-3 w-[min(680px,90vw)] -translate-x-1/2"
        >
          <div className="rounded-3xl border border-border bg-card/95 p-5 shadow-card backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between px-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Our Departments
              </p>
              <Link
                href="/departments"
                className="text-xs font-semibold text-foreground/70 hover:text-primary"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3">
              {departments.slice(0, 9).map((dept) => (
                <Link
                  key={dept.slug}
                  href={`/departments#${dept.slug}`}
                  className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-secondary"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <dept.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground/80">{dept.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
