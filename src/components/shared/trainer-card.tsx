import { Award, BriefcaseBusiness, Users } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/shared/star-rating";
import type { Trainer } from "@/lib/types";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  const initials = trainer.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <CardContent className="flex flex-1 flex-col items-center gap-3 p-6 text-center">
        <Avatar className="size-20 bg-accent">
          <AvatarFallback className="bg-accent font-heading text-xl font-bold text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-heading text-base font-bold text-foreground">{trainer.name}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{trainer.role}</p>
        </div>
        <StarRating rating={trainer.rating} size="size-3.5" />
        <div className="flex flex-wrap justify-center gap-1.5">
          {trainer.expertise.map((e) => (
            <span
              key={e}
              className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {e}
            </span>
          ))}
        </div>
        <div className="mt-auto flex w-full items-center justify-center gap-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <BriefcaseBusiness className="size-3.5 text-primary" aria-hidden /> {trainer.experience}
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5 text-primary" aria-hidden /> {trainer.students.toLocaleString("en-IN")}+ students
          </span>
          <span className="flex items-center gap-1">
            <Award className="size-3.5 text-primary" aria-hidden /> {trainer.batches}+ batches
          </span>
        </div>
      </CardContent>
    </Card>
  );
}