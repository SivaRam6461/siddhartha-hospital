import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 pt-32">
      <div className="text-center">
        <p className="text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get
          you back to safety.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
