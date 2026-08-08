import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1.5 py-4 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <ChevronRight className="h-4 w-4 opacity-50" />
            {item.href === "current" ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-primary">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
