import { stats } from "@/lib/constants";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { Counter } from "@/components/animations/counter";

export function StatsBand() {
  return (
    <section className="relative -mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card/80 p-8 shadow-card backdrop-blur-xl md:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
              </StaggerItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
