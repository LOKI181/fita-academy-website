"use client";

import { AlertTriangle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="grid size-16 place-items-center rounded-2xl bg-destructive/10 text-destructive">
            <AlertTriangle className="size-8" aria-hidden />
          </span>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Application error
          </h1>
          <p className="max-w-md text-sm text-muted-foreground">
            {error.message || "A critical error occurred. Please refresh the page."}
          </p>
          <button
            onClick={reset}
            className="mt-4 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Refresh page
          </button>
        </div>
      </body>
    </html>
  );
}