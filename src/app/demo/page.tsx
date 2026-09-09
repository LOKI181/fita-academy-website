import type { Metadata } from "next";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = {
  title: "Book a Free Demo Class",
  description:
    "Book a free demo class at FITA Academy — attend a real training session before you enroll. Classroom or live online, any branch.",
};

export default async function DemoPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course } = await searchParams;
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Free demo class"
            title="See how a FITA class runs — before you enroll"
            sub="No charges, no obligation. Pick a course, sit in on a live session with real trainers and decide with full information."
          />
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <EnquiryForm intent="demo" defaultCourse={course ?? ""} />
      </section>
    </>
  );
}