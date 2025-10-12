// components/helpers/Intro4Indoor.tsx
import { cityData } from "@/lib/LocaldataofCities";
import Image from "next/image";

type IntroProps = {
  city: string;
  aqi: number;
  place: string;
  category: string;
  fulltitle:string;
};

function getOverallQualityPhrase(aqi: number): string {
  if (aqi <= 50) {
    return "favorable for most residents";
  } else if (aqi <= 100) {
    return "acceptable, but sensitive individuals may be affected";
  } else if (aqi <= 150) {
    return "moderate and may cause health issues for sensitive groups";
  } else if (aqi <= 200) {
    return "poor and caution is advised for everyone indoors";
  } else if (aqi <= 300) {
    return "very poor, with significant health risks indoors";
  } else {
    return "hazardous, and residents should take maximum precautions";
  }
}

export default function Intro4Indoor({
  city,
  aqi,
  place,
  category,
  fulltitle
}: IntroProps) {
  const lowerCity = city.toLowerCase();
  const data = cityData[lowerCity as keyof typeof cityData];
  const overallQualityPhrase = getOverallQualityPhrase(aqi);
  if (data) {
    // ✅ City matched — return city-specific paragraph
    return (
      <div>
        <p className="mt-4">
          {place} is known for its {data.city_feature}. Indoor air quality in{" "}
          {place} is influenced by the {data.climate_description}. Major
          contributors to indoor pollution include {data.pollution_cause}, while
          local factors such as {data.local_factor} further affect how
          pollutants accumulate indoors.
        </p>

        {/* ✅ Show image only if available */}
        {data.image && (
          <div className="mt-6 ">
            <figure className="my-6">
              <Image
                src={data.image}
                alt={`Indoor air quality in ${city}`}
                width={600}
                height={315}
                className="mx-auto rounded-xl"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                {fulltitle.replace("Indoor Air Quality ", "")}
              </figcaption>
            </figure>
          </div>
        )}
        <h2 className="text-2xl font-bold mt-5">
          {place} Indoor Air Quality Overview
        </h2>

        <p className="mt-3">
          As of the latest readings, {place} has an air quality index (AQI) of{" "}
          {aqi}, indicating {category} air conditions. While the overall air
          quality is {overallQualityPhrase}, indoor spaces can still trap
          pollutants that may impact health over time.
        </p>

        <ul className="list-disc list-inside mt-3">
          <li>
            {data.pollution_cause.split(",")[0]} seeping indoors from nearby
            roads and highways
          </li>
          <li>
            {data.pollution_cause.split(",")[1]} formation, especially during
            warm months
          </li>
          <li>
            {data.pollution_cause.split(",")[2]} entering homes during dry
            seasons
          </li>
        </ul>

        <p className="mt-3">
          Improving ventilation, using high-quality air filters, and avoiding
          indoor smoke sources can significantly reduce exposure in {city}.
          Considering {data.local_factor}, controlling humidity and seasonal
          dust can further help maintain clean indoor air.
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
