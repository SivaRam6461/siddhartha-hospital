"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ComponentProps<typeof Button> {
  strength?: number;
}

export function MagneticButton({
  strength = 0.35,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });

  function onMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: sx, y: sy }} className={cn("inline-flex", className)}>
      <Button
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={className}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
