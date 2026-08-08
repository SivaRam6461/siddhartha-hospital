"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse } from "lucide-react";

export function PageLoader() {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden="true" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center"
          >
            <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-teal text-white shadow-glow">
              <HeartPulse className="h-9 w-9" />
              <span className="absolute inset-0 animate-pulse-ring rounded-3xl bg-primary/30" />
            </span>
            <p className="mt-6 text-lg font-bold tracking-tight text-foreground">
              Siddhartha Hospitals
            </p>
            <div className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-teal"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
