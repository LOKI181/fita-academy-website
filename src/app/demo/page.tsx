import type { Metadata } from "next";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Book a Free Demo Class",
  description:
    "Book a free demo class at FITA Academy — attend a real training session before you enroll. Classroom or live online, any branch.",
  alternates: { canonical: "/demo" },
};

export default async function DemoPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>;
}) {
  const { course } = await searchParams;

  return (
    <>
      <PageHero
        ghost="DEMO"
        eyebrow="Free demo class"
        title={
          <>
            See how a FITA class runs — <span className="gradient-text">before you enroll</span>
          </>
        }
        sub="No charges, no obligation. Pick a course, sit in on a live session with real trainers and decide with full information."
        stats={[
          { value: "0 ₹", label: "Demo cost" },
          { value: "60 min", label: "Session length" },
          { value: "Live", label: "Real batch" },
          { value: "Any", label: "Branch or online" },
        ]}
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <EnquiryForm intent="demo" defaultCourse={course ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
}