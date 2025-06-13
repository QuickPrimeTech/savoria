import { Section, Header, Title, SubTitle } from "@/components/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/data";

export default function FAQSection() {
  return (
    <Section className="section-padding bg-secondary/30">
      <Header>
        <Title>Frequently Asked Questions</Title>
        <SubTitle>
          Have questions about dining at Savoria? We have answers! Explore our
          FAQ section to find out more about our menu, reservations, and more.
        </SubTitle>
      </Header>
      <div className="max-w-3xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
