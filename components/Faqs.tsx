import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type faqProps = {
  place: string;
  aqi: number;
  status: string;
};

export default function Faqs({ place, aqi, status }: faqProps) {
  return (
    <div className="pl-4 pr-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p>
              <span className="font-bold">Q.1</span> What is the current AQI
              level in {place}?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              <span className="font-bold">Ans: </span>
               The AQI in {place} today is <span className="font-bold">{aqi}</span>, which is considered <span className="font-bold">{status}</span>.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p>
              <span className="font-bold">Q.2</span> What is the main cause of air pollution in {place}?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              <span className="font-bold">Ans:</span> The most common sources of air pollution in {place} include traffic emissions, industrial activities, burning
              of fossil fuels, and natural factors such as dust and weather
              conditions.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger><p><span className="font-bold">Q.3</span> What is a safe AQI level?</p></AccordionTrigger>
          <AccordionContent><p><span className="font-bold">Ans:</span> An AQI below 50 is considered safe and healthy.</p>
           
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger><p><span className="font-bold">Q.4</span> When is {place} air quality worst?</p>
           
          </AccordionTrigger>
          <AccordionContent>
            <p><span className="font-bold">Ans:</span> Air quality in {place} often becomes worse during colder months, when pollution is trapped near the ground, or during periods of high
            emissions and unfavorable weather.</p>
            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
