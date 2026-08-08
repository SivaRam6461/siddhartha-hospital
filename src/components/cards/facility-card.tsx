import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import type { Facility } from "@/lib/constants";

export function FacilityCard({ facility, index = 0 }: { facility: Facility; index?: number }) {
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={facility.image}
            alt={facility.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {facility.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {facility.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
