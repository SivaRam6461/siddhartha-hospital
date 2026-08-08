import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";
import { Reveal } from "@/components/animations/reveal";
import { BlobField } from "@/components/animations/decorations";

export function FaqSection({ heading = "Frequently asked questions" }: { heading?: string }) {
  return (
    <section className="section-pad relative overflow-hidden bg-secondary/40" id="faq">
      <BlobField className="opacity-40" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title={heading} />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-4" defaultValue="item-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
