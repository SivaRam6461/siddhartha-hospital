"use client";

import * as React from "react";
import {
  animate,
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform
} from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const formatted =
      value >= 1000
        ? Math.round(latest).toLocaleString("en-IN")
        : Math.round(latest).toString();
    return `${prefix}${formatted}${suffix}`;
  });

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1]
    });
    return controls.stop;
  }, [inView, value, duration, reduce, count]);

  return (
    <span ref={ref} className={className}>
      <CounterText value={rounded} fallback={`${prefix}${value}${suffix}`} />
    </span>
  );
}

function CounterText({
  value,
  fallback
}: {
  value: any;
  fallback: string;
}) {
  const [text, setText] = React.useState(fallback);
  React.useEffect(() => {
    const unsub = value.on("change", (v: string) => setText(v));
    return unsub;
  }, [value]);
  return <>{text}</>;
}
