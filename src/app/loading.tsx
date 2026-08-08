import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Skeleton className="mx-auto h-6 w-40 rounded-full" />
        <Skeleton className="mx-auto mt-6 h-14 w-full max-w-3xl" />
        <Skeleton className="mx-auto mt-5 h-6 w-full max-w-xl" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
