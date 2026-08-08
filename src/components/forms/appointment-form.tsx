"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { appointmentSchema, timeSlots, type AppointmentFormValues } from "@/lib/schema";
import { departments, doctors } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function AppointmentForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { department: undefined, time: "", date: "", name: "", phone: "", email: "" }
  });

  const selectedDept = watch("department");
  const doctorsForDept = React.useMemo(() => {
    if (!selectedDept) return [];
    const slug = departments.find((d) => d.title === selectedDept)?.slug;
    if (!slug) return doctors;
    const matches = doctors.filter((d) =>
      d.specialization.toLowerCase().includes(selectedDept.toLowerCase().split(" ")[0])
    );
    return matches.length ? matches : doctors;
  }, [selectedDept]);

  async function onSubmit(values: AppointmentFormValues) {
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1500));
      // eslint-disable-next-line no-console
      console.log("Appointment request:", values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-soft"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-teal">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-foreground">Appointment Requested!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you. Our care team will call you shortly to confirm your appointment details.
        </p>
        <Button className="mt-6" onClick={() => setStatus("idle")}>
          Book Another
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
      noValidate
    >
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-5 flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4" />
            Something went wrong. Please try again or call us directly.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message} required>
          <Input placeholder="Your name" aria-invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message} required>
          <Input
            type="tel"
            placeholder="+91 00000 00000"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <Input
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
        <Field label="Department" error={errors.department?.message} required>
          <Select
            onValueChange={(v) => {
              setValue("department", v as any, { shouldValidate: true });
              setValue("doctor", "");
            }}
          >
            <SelectTrigger aria-invalid={!!errors.department}>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((d) => (
                <SelectItem key={d.slug} value={d.title}>
                  {d.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred Doctor (optional)">
          <Select
            onValueChange={(v) => setValue("doctor", v)}
            disabled={!selectedDept}
          >
            <SelectTrigger>
              <SelectValue placeholder={selectedDept ? "Select doctor" : "Pick department first"} />
            </SelectTrigger>
            <SelectContent>
              {doctorsForDept.map((d) => (
                <SelectItem key={d.name} value={d.name}>
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred Date" error={errors.date?.message} required>
          <Input type="date" aria-invalid={!!errors.date} {...register("date")} />
        </Field>
        <Field label="Time Slot" error={errors.time?.message} required>
          <Select onValueChange={(v) => setValue("time", v, { shouldValidate: true })}>
            <SelectTrigger aria-invalid={!!errors.time}>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message (optional)">
            <Textarea
              placeholder="Briefly describe your concern..."
              {...register("message")}
            />
          </Field>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        variant="teal"
        className="mt-6 w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" /> Request Appointment
          </>
        )}
      </Button>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
        <CalendarDays className="h-3.5 w-3.5" />
        For emergencies call our 24/7 line immediately.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className={cn(required && "after:ml-0.5 after:text-destructive after:content-['*']")}>
        {label}
      </Label>
      {children}
      {error && <span className="text-xs font-medium text-destructive">{error}</span>}
    </div>
  );
}
