"use client";

import { cn } from "@/lib/utils";

export function BlobField({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -left-20 top-10 h-72 w-72 animate-blob rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 animate-blob rounded-full bg-teal/20 blur-3xl [animation-delay:6s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-blob rounded-full bg-blue-400/15 blur-3xl [animation-delay:12s]" />
    </div>
  );
}

export function AnimatedWaves({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-32 overflow-hidden", className)}>
      <svg
        className="absolute bottom-0 w-[200%] animate-wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          className="text-primary/10"
          d="M0,64 C240,120 480,0 720,48 C960,96 1200,16 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 w-[200%] animate-wave [animation-delay:-7s]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          className="text-teal/10"
          d="M0,80 C200,40 420,110 720,72 C1020,34 1240,104 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}

export function FloatingIcon({
  className,
  children,
  delay = 0
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      className={cn("absolute hidden animate-float lg:block", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid-pattern [background-size:34px_34px] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
        className
      )}
      aria-hidden="true"
    />
  );
}

