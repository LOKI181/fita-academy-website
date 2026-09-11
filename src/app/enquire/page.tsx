import type { Metadata } from "next";
import { Clock, MessageCircle, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { PageHero } from "@/components/shared/page-hero";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquire Now",
  description:
    "Talk to a FITA Academy counsellor — get course guidance, batch schedules, fees and placement details within 30 minutes.",
  alternates: { canonical: "/enquire" },
};

export default async function EnquirePage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string; branch?: string }>;
}) {
  const { course } = await searchParams;

  return (
    <>
      <PageHero
        ghost="ENQUIRE"
        eyebrow="Free counselling"
        title={
          <>
            Ask us <span className="gradient-text">anything</span>
          </>
        }
        sub="Fees, batches, placement or career direction — a counsellor will call you back within 30 minutes (9 AM – 8:30 PM)."
      />

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_380px]">
          <EnquiryForm intent="enquiry" defaultCourse={course ?? ""} />

          <aside className="space-y-5">
            <div className="surface p-6">
              <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                Prefer to talk right now?
              </h2>
              <ul className="mt-4 space-y-3 text-[0.875rem]">
                <li>
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    <Phone className="size-4" aria-hidden />
                    {brand.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 font-semibold text-success transition-opacity hover:opacity-80"
                  >
                    <MessageCircle className="size-4" aria-hidden />
                    WhatsApp us
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-muted-foreground">
                  <Clock className="size-4 text-primary" aria-hidden />
                  Mon–Sat · 9:00 AM – 8:30 PM
                </li>
              </ul>
            </div>

            <div className="surface p-6">
              <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                What happens next?
              </h2>
              <ol className="mt-4 space-y-3 text-[0.875rem] text-muted-foreground">
                {[
                  "A counsellor calls you within 30 minutes.",
                  "We map your background to the right course & batch.",
                  "You can sit a free demo class — no obligation.",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      className="grid size-6 shrink-0 place-items-center rounded-full bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] text-[0.7rem] font-bold text-primary"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}