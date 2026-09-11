import type { Metadata } from "next";
import { CheckCircle, Clock, MessageCircle, Phone, Shield, Zap } from "lucide-react";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquire Now",
  description:
    "Talk to a FITA Academy counsellor — get course guidance, batch schedules, fees and placement details within 30 minutes.",
  alternates: { canonical: "/enquire" },
};

const promises = [
  { icon: Zap, title: "30-min callback", text: "A counsellor calls you within 30 minutes during business hours." },
  { icon: Shield, title: "Zero obligation", text: "Free demo class — sit in, experience the teaching, then decide." },
  { icon: CheckCircle, title: "Personalised plan", text: "We map your background to the right course, batch and timeline." },
];

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

      {/* Promise cards */}
      <section className="border-b border-border bg-mist">
        <div className="container-x py-8">
          <ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {promises.map((p) => (
                <div key={p.title} className="card-premium glass-card flex items-start gap-4 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{p.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_380px]">
          <ScrollReveal>
            <EnquiryForm intent="enquiry" defaultCourse={course ?? ""} />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <aside className="space-y-5">
              {/* Quick contact */}
              <div className="card-premium glass-card p-6">
                <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                  Prefer to talk right now?
                </h2>
                <div className="mt-4 space-y-3">
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-primary/30 hover:shadow-[var(--e2)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{brand.phone}</p>
                      <p className="text-xs text-muted-foreground">Call now</p>
                    </div>
                  </a>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-emerald-500/30 hover:shadow-[var(--e2)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
                      <MessageCircle className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">WhatsApp us</p>
                      <p className="text-xs text-muted-foreground">Quick reply</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Mon – Sat</p>
                      <p className="text-xs text-muted-foreground">9:00 AM – 8:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="card-premium glass-card p-6">
                <h2 className="font-heading text-base font-bold tracking-tight text-foreground">
                  What happens next?
                </h2>
                <ol className="mt-4 space-y-4">
                  {[
                    { num: "01", title: "A counsellor calls you", text: "Within 30 minutes during business hours." },
                    { num: "02", title: "We map your path", text: "Background, goals → right course & batch." },
                    { num: "03", title: "Free demo class", text: "Sit in, experience the teaching, no obligation." },
                  ].map((step) => (
                    <li key={step.num} className="flex items-start gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 font-heading text-xs font-bold text-primary">
                        {step.num}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Trust signals */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
                <p className="font-heading text-2xl font-black text-primary">10,000+</p>
                <p className="mt-1 text-sm text-muted-foreground">students placed across India</p>
                <div className="mt-3 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="size-4 text-amber-400">★</span>
                  ))}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">4.8/5 from 500+ reviews</p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
