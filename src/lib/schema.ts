import { z } from "zod";
import { departments } from "./constants";

const departmentTitles = departments.map((d) => d.title) as [string, ...string[]];

export const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit phone number")
    .max(15, "Enter a valid phone number")
    .regex(/^[+\d][\d\s-]{8,}$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  department: z.enum(departmentTitles, {
    errorMap: () => ({ message: "Please select a department" })
  }),
  doctor: z.string().optional(),
  date: z
    .string()
    .min(1, "Please choose a preferred date")
    .refine((d) => {
      const picked = new Date(d);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return picked >= today;
    }, "Date cannot be in the past"),
  time: z.string().min(1, "Please select a time slot"),
  message: z.string().max(500, "Message is too long").optional()
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM"
];
