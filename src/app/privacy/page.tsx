import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeader } from "@/components/shared/section-header";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    title: "1. Information we collect",
    body: "When you submit an enquiry, demo request or review through our website we collect the details you provide: name, phone number, email address, preferred branch, course of interest and any message you choose to share. We also collect basic, anonymous analytics (pages visited, browser type) to improve the site.",
  },
  {
    title: "2. How we use your information",
    body: "Your contact details are used solely to respond to your enquiry: to call or message you about courses, batches, demo classes, fees and placement support. We do not sell, rent or trade your personal data to any third party.",
  },
  {
    title: "3. How we store your information",
    body: "Enquiry records are stored securely and retained only as long as needed to serve your request. Access is restricted to authorised FITA counsellors who require it to support you.",
  },
  {
    title: "4. Your choices",
    body: "You may ask us to correct or delete your personal data at any time by writing to " + brand.email + ". You can also opt out of marketing messages with a single reply to any message.",
  },
  {
    title: "5. Changes to this policy",
    body: "We may update this policy occasionally. The latest revision always appears on this page with an updated date.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            align="left"
            eyebrow="Legal"
            title="Privacy Policy"
            sub="Last updated: Sep 2026"
          />
        </div>
      </section>
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading text-lg font-bold text-foreground">{s.title}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
        <p className="rounded-xl bg-muted/60 p-4 text-sm text-muted-foreground">
          Questions? Contact{" "}
          <a href={`mailto:${brand.email}`} className="font-semibold text-primary hover:underline">
            {brand.email}
          </a>{" "}
          or call {brand.phone}.
        </p>
        <Link href="/" className="text-sm font-medium text-primary hover:underline">
          ← Back to home
        </Link>
      </section>
    </>
  );
}