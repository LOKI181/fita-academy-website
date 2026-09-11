import type { Metadata } from "next";

import { CareerAssistant } from "@/components/site/career-assistant";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "AI Career Assistant",
  description:
    "Answer 3 questions and get a personalised course recommendation from FITA Academy's AI career assistant.",
  alternates: { canonical: "/career-assistant" },
};

export default function CareerAssistantPage() {
  return (
    <>
      <PageHero
        ghost="CAREER"
        eyebrow="Free · no sign-up"
        title={
          <>
            Find the <span className="gradient-text">right course</span> for you
          </>
        }
        sub="Tell us where you are and where you want to be — we'll match you to courses that fit your background, goals and timeline."
        stats={[
          { value: "3", label: "Quick questions" },
          { value: "< 1 min", label: "Time needed" },
          { value: "120+", label: "Courses matched" },
          { value: "0 ₹", label: "Always free" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <CareerAssistant />
          </div>
        </div>
      </section>
    </>
  );
}