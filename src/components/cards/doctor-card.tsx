import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Languages, Award, Clock } from "lucide-react";
import type { Doctor } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";

export function DoctorCard({ doctor, index = 0 }: { doctor: Doctor; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={doctor.image}
            alt={`${doctor.name}, ${doctor.specialization}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            {doctor.experience}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">{doctor.name}</h3>
          <p className="mt-1 text-sm font-medium text-primary">{doctor.qualification}</p>
          <p className="mt-3 text-sm text-muted-foreground">{doctor.specialization}</p>
          <div className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <p className="flex items-center gap-2">
              <Award className="h-3.5 w-3.5 text-teal" /> {doctor.experience} experience
            </p>
            <p className="flex items-center gap-2">
              <Languages className="h-3.5 w-3.5 text-teal" /> {doctor.languages.join(", ")}
            </p>
          </div>
          <Link
            href="/appointment"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <CalendarDays className="h-4 w-4" />
            Book Appointment
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
