import { Reveal } from "@/components/animations/reveal";
import { BlobField, GridPattern } from "@/components/animations/decorations";

export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pt-16">
      <div className="absolute inset-0 bg-secondary/40" />
      <BlobField className="opacity-50" />
      <GridPattern className="opacity-40" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </span>
          )}
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-balance text-heading font-extrabold text-foreground">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
