import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/constants";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
      <div className="flex gap-0.5" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/85">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </span>
        <span>
          <span className="block text-sm font-semibold text-foreground">{testimonial.name}</span>
          <span className="block text-xs text-muted-foreground">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
