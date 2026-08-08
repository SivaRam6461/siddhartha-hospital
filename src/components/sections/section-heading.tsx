import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Stagger
      className={cn("flex max-w-2xl flex-col gap-4", alignment, className)}
    >
      {eyebrow && (
        <StaggerItem>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        </StaggerItem>
      )}
      <StaggerItem>
        <h2 className="text-balance text-heading font-bold text-foreground">{title}</h2>
      </StaggerItem>
      {description && (
        <StaggerItem>
          <p className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </StaggerItem>
      )}
    </Stagger>
  );
}
