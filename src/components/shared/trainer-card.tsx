import { Award, BriefcaseBusiness, Users } from "lucide-react";

import { StarRating } from "@/components/shared/star-rating";
import type { Trainer } from "@/lib/types";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  const initials = trainer.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <article className="surface group flex h-full flex-col p-6">
      <div className="flex items-center gap-4">
        <span
          className="grid size-14 shrink-0 place-items-center rounded-2xl font-heading text-lg font-black text-white shadow-[var(--e2)]"
          style={{ background: "linear-gradient(135deg, var(--azure), var(--azure-deep))" }}
          aria-hidden
        >
          {initials}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-heading text-base font-bold tracking-tight text-foreground">
            {trainer.name}
          </h3>
          <p className="mt-0.5 truncate text-[0.8125rem] text-muted-foreground">
            {trainer.role}
          </p>
          <div className="mt-1.5">
            <StarRating rating={trainer.rating} size="size-3.5" />
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {trainer.expertise.map((e) => (
          <span
            key={e}
            className="rounded-full border border-border bg-mist px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
          >
            {e}
          </span>
        ))}
      </div>

      <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
        <div>
          <dt className="sr-only">Experience</dt>
          <dd className="flex flex-col items-center gap-1">
            <BriefcaseBusiness className="size-3.5 text-primary" aria-hidden />
            <span className="text-[0.7rem] font-semibold text-foreground">
              {trainer.experience}
            </span>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Students trained</dt>
          <dd className="flex flex-col items-center gap-1">
            <Users className="size-3.5 text-primary" aria-hidden />
            <span className="text-[0.7rem] font-semibold text-foreground">
              {trainer.students.toLocaleString("en-IN")}+
            </span>
          </dd>
        </div>
        <div>
          <dt className="sr-only">Batches taken</dt>
          <dd className="flex flex-col items-center gap-1">
            <Award className="size-3.5 text-primary" aria-hidden />
            <span className="text-[0.7rem] font-semibold text-foreground">
              {trainer.batches}+
            </span>
          </dd>
        </div>
      </dl>
    </article>
  );
}