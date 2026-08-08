"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = (dir: Direction, distance: number) => {
  switch (dir) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "article" | "span";
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  once = true,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  const initial = reduce ? {} : { opacity: 0, ...offset(direction, distance) };
  const animate = reduce ? {} : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  stagger?: number;
  once?: boolean;
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  once = true,
  ...props
}: StaggerProps) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : stagger }
    }
  };
  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 24,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offset(direction, distance) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };
  return (
    <motion.div className={cn(className)} variants={item} {...(props as any)}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  once = true,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? {} : { opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
