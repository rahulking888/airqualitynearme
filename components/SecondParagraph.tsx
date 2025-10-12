import { cityData } from "@/lib/LocaldataofCities";
import { pollutantInfo } from "@/lib/data";

type SecondParagraphProps = {
  city: string;
  place: string;
  mainPollutant: keyof typeof pollutantInfo;
};

export default function SecondParagraph({
  city,
  place,
  mainPollutant,
}: SecondParagraphProps) {
  const info = pollutantInfo[mainPollutant];
  const lowerCity = city.toLowerCase();
  const data = cityData[lowerCity as keyof typeof cityData];

  // ✅ If no matching city found, return nothing
  if (!data) {
    return null;
  }

  return (
    <p>
      In {place}, the local environment defined by {data.city_feature} along with
      its {data.climate_description} plays a major role in shaping air pollution
      patterns. The dominant pollutant in this region is {mainPollutant}, mainly
      coming from {info.source}. This pollutant tends to accumulate under certain
      weather conditions and worsens the air quality. Continuous exposure to{" "}
      {mainPollutant} can cause {info.health}, especially among people with
      respiratory issues, children, and the elderly.
    </p>
  );
}
