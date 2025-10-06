// components/helpers/Intro4Indoor.tsx
import { cityData } from "@/lib/LocaldataofCities";
import Image from "next/image";

type IntroProps = {
  city: string;
  aqi: number;
  place: string;
  category: string;
};

export default function Intro4Indoor({ city, aqi, place, category }: IntroProps) {
  const lowerCity = city.toLowerCase();
  const data = cityData[lowerCity as keyof typeof cityData];

  if (data) {
    // ✅ City matched — return city-specific paragraph
    return (
      <div>
        <p className="mt-4">
          In {city}, the {data.city_feature} combined with {data.climate_description} influences indoor air conditions. Major contributors to indoor pollution include {data.pollution_cause}. Local factors such as {data.local_factor} further affect how pollutants accumulate indoors.

        </p>
        

        {/* ✅ Show image only if available */}
        {data.image && (
          <div className="mt-6 ">
            <Image
              src={data.image}
              alt={`Indoor air quality in ${city}`}
              width={600}
              height={315}
              className="mx-auto"
            />
          </div>
        )}
        <h2 className="text-2xl font-bold mt-4">Indoor air quality in {place}</h2>
        <p className="mt-3">
          According to the latest readings, {place} has an air quality index of {aqi}, which represents {category} air conditions. Major indoor air challenges in {place} come from {data.pollution_cause}. Using clean filters, avoiding indoor smoke, and allowing fresh air flow during safe hours can reduce the impact of pollutants on daily life.
        </p>
      </div>
    );
  }

  // ❌ City not found — fallback to AQI-based text
  const paraText =
    aqi <= 50
      ? `Indoor air quality in homes and offices in ${place} is generally good. The air tends to be clean, fresh, and safe to breathe. Maintaining this quality is important. Regular ventilation by opening windows, keeping spaces dust-free, using air purifiers, and adding indoor plants can help sustain a healthy and comfortable indoor environment. Even when air quality is good, factors like stagnant ventilation, pet dander, and built-up chemicals from household products can slowly affect indoor air over time. Following simple preventive practices ensures a safe and comfortable environment for everyone.`
      : aqi <= 100
      ? `Indoor air quality in homes and offices in ${place} can be moderate. While the air is usually acceptable, sensitive individuals such as children, the elderly, or people with respiratory issues may experience mild discomfort. Indoor air can be influenced by stagnant ventilation, pet dander, cooking smoke, accumulated dust, and built-up chemicals from paints, cleaning products, or furniture. To improve indoor air, ensure regular airflow by opening windows, minimize the use of chemical cleaners, use air purifiers, and maintain clean surfaces. Being mindful of these factors can help protect the health and comfort of everyone indoors.`
      : `Indoor air quality in homes and offices in ${place} may be poor at times. Prolonged exposure to indoor pollutants can affect health, particularly for sensitive groups, causing respiratory discomfort, allergies, fatigue, or other issues. Common contributors include stagnant ventilation, pet dander, cooking fumes, mold, accumulated dust, and built-up chemicals from household products. To reduce indoor air pollution, minimize time in poorly ventilated areas, use high-quality air purifiers, clean surfaces regularly, and ensure adequate airflow in every room. Taking these steps can help create a safer and healthier indoor environment for everyone.`;

  return <p className="mt-4">{paraText}</p>;
}
