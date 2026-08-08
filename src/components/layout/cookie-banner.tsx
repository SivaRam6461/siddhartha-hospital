"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-x-4 bottom-4 z-[55] mx-auto max-w-2xl rounded-2xl border border-border bg-card/95 p-5 shadow-card backdrop-blur-xl sm:inset-x-6 lg:inset-x-auto lg:right-6 lg:bottom-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Cookie className="h-5 w-5" />
            </span>
            <div className="flex-1 text-sm text-muted-foreground">
              <p className="flex items-center gap-1.5 font-semibold text-foreground">
                <ShieldCheck className="h-4 w-4 text-teal" />
                We value your privacy
              </p>
              <p className="mt-1 leading-relaxed">
                We use cookies to enhance your browsing experience and analyze site traffic. By
                continuing, you agree to our use of cookies.
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <Button variant="outline" size="sm" onClick={accept}>
                Decline
              </Button>
              <Button size="sm" onClick={accept}>
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
