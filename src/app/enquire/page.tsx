import type { Metadata } from "next";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { SectionHeader } from "@/components/shared/section-header";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquire Now",
  description:
    "Talk to a FITA Academy counsellor — get course guidance, batch schedules, fees and placement details within 30 minutes.",
};

export default async function EnquirePage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string; branch?: string }>;
}) {
  const { course } = await searchParams;
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Free counselling"
            title="Ask us anything"
            sub="Fees, batches, placement or career direction — a counsellor will call you back within 30 minutes (9 AM – 8:30 PM)."
          />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <EnquiryForm intent="enquiry" defaultCourse={course ?? ""} />
        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <h2 className="font-heading text-base font-bold text-foreground">
              Prefer to talk right now?
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="font-semibold text-primary hover:underline">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-success hover:underline">
                  WhatsApp us
                </a>
              </li>
              <li className="text-muted-foreground">Mon–Sat · 9:00 AM – 8:30 PM</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
            <h2 className="font-heading text-base font-bold text-foreground">What happens next?</h2>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5">
              <li>A counsellor calls you within 30 minutes.</li>
              <li>We map your background to the right course & batch.</li>
              <li>You can sit a free demo class — no obligation.</li>
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}