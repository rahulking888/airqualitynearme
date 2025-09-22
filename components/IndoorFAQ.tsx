import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type faqProps = {
  place: string;
};

export default function IndoorFAQ({ place}: faqProps) {
  return (
    <div className="pl-4 pr-4">
      <h3 className="font-bold text-2xl">Frequently asked questions about indoor air quality {place}</h3>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p>
              <span className="font-bold">Q.1</span> What are the common indoor pollutants in {place}?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              <span className="font-bold">Ans: </span>
               Common indoor pollutants in {place} include PM2.5, PM10, CO₂, mold, allergens, and carbon monoxide.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p>
              <span className="font-bold">Q.2</span> How can I improve indoor air quality in {place}?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              <span className="font-bold">Ans:</span> To improve indoor air quality in {place}, ensure proper ventilation, use air purifiers, reduce smoking indoors, and maintain optimal humidity levels.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger><p><span className="font-bold">Q.3</span> Is indoor air quality linked to health issues in {place}?</p></AccordionTrigger>
          <AccordionContent><p><span className="font-bold">Ans:</span> Yes, poor indoor air quality in {place} can cause respiratory issues, allergies, headaches, and worsen asthma conditions.</p>
           
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
