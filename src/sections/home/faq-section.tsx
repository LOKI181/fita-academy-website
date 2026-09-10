import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";
import { homeFaqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <SectionHeader
          eyebrow="FAQs"
          title="Frequently asked questions"
          sub="Everything students usually ask before enrolling."
        />
        <Accordion type="single" collapsible className="mt-10">
          {homeFaqs.map((f) => (
            <AccordionItem key={f.question} value={f.question}>
              <AccordionTrigger className="text-left font-medium">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}