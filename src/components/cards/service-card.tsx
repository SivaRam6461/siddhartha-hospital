import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/30 hover:shadow-card">
        <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-teal/5 transition-transform duration-500 group-hover:scale-150" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/10 to-primary/10 text-teal transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Reveal>
  );
}
