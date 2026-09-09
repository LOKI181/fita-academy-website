import type { Metadata } from "next";

import { CareerAssistant } from "@/components/site/career-assistant";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "AI Career Assistant",
  description:
    "Answer 3 questions and get a personalised course recommendation from FITA Academy's AI career assistant.",
};

export default function CareerAssistantPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Free · no sign-up"
            title="Find the right course for you"
            sub="Tell us where you are and where you want to be — we'll match you to courses that fit your background, goals and timeline."
          />
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <CareerAssistant />
      </section>
    </>
  );
}