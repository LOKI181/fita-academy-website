import Link from "next/link";
import { Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <span className="grid size-16 place-items-center rounded-2xl bg-accent text-primary">
        <Compass className="size-8" aria-hidden />
      </span>
      <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight text-foreground">404</h1>
      <p className="mt-3 max-w-md text-lg text-muted-foreground">
        That page doesn&apos;t exist — but your career path does. Let&apos;s get you back
        on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/courses">Browse courses</Link>
        </Button>
      </div>
    </section>
  );
}