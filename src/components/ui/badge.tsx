import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "teal" | "outline" | "emergency";
}) {
  const variants = {
    default: "bg-primary/10 text-primary border border-primary/20",
    teal: "bg-teal/10 text-teal border border-teal/20",
    outline: "border border-border text-muted-foreground",
    emergency: "bg-destructive/10 text-destructive border border-destructive/20"
  };
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
