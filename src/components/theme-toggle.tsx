"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-secondary",
        className
      )}
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )
      ) : (
        <span className="h-5 w-5" />
      )}
    </button>
  );
}
