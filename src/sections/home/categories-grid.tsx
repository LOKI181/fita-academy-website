import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { CategoryIcon } from "@/components/shared/category-icon";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { categories } from "@/lib/content";

export function CategoriesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader
        eyebrow="Explore by track"
        title="Career tracks that match your goal"
        sub="Whether you're starting fresh or upgrading skills — pick a track and we'll build the roadmap with you."
      />
      <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <StaggerItem key={cat.slug}>
            <Link href={`/courses/${cat.slug}`} className="group block">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <CategoryIcon name={cat.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary">
                      {cat.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{cat.blurb}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2 text-sm">
                    <span className="text-xs font-medium text-primary">
                      {cat.courses} courses
                    </span>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}