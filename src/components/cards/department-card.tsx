import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Department } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

export function DepartmentCard({
  department,
  index = 0
}: {
  department: Department;
  index?: number;
}) {
  const { title, icon: Icon, description, highlights, slug } = department;
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <Link
        href={`/departments#${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-teal/10 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-teal group-hover:text-white">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="relative mt-4 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {h}
            </span>
          ))}
        </div>
        <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
          Explore
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </Reveal>
  );
}
