import { Button } from "@/components/ui/button";
import { CareerAssistant } from "@/components/site/career-assistant";
import { SectionHeader } from "@/components/shared/section-header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CareerAssistantSection() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="AI Career Assistant"
              title="Not sure which course fits? Take the 3-question match."
              sub="Tell us your background, goal and time — our assistant matches you to the courses worth your time, in under a minute. No sign-up needed."
            />
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/career-assistant">
                  Try the career assistant <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <CareerAssistant />
        </div>
      </div>
    </section>
  );
}