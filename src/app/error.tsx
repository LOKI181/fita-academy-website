"use client";

import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <span className="grid size-20 place-items-center rounded-2xl bg-destructive/10 text-destructive">
        <AlertTriangle className="size-10" aria-hidden />
      </span>
      <h1 className="mt-6 font-heading text-3xl font-bold text-foreground">
        Something went wrong
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      {error.digest ? (
        <p className="mt-2 font-mono text-xs text-muted-foreground/60">
          Error ID: {error.digest}
        </p>
      ) : null}
      <div className="mt-8 flex gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}