import { cityData } from "@/lib/LocaldataofCities";
import { pollutantInfo } from "@/lib/data";

type SecondParagraphProps = {
  city: string;
  place: string;
  mainPollutant: string; // keep as string for flexibility
};

// Map incoming pollutant names to keys in pollutantInfo
const keyMap: Record<string, keyof typeof pollutantInfo> = {
  "PM2.5": "PM2_5",
  "PM2_5": "PM2_5",
  PM10: "PM10",
  NO2: "NO2",
  SO2: "SO2",
  O3: "O3",
  CO: "CO",
};

export default function SecondParagraph({
  city,
  place,
  mainPollutant,
}: SecondParagraphProps) {
  const lowerCity = city.toLowerCase();
  const data = cityData[lowerCity as keyof typeof cityData];

  // If no matching city found, return nothing
  if (!data) {
    return null;
  }

  // Map pollutant to correct key
  const pollutantKey = keyMap[mainPollutant];
  const info = pollutantKey ? pollutantInfo[pollutantKey] : undefined;

  // If pollutant data not found, return fallback
  if (!info) {
    return (
      <p>
        In {place}, the local environment defined by {data.city_feature} along with
        its {data.climate_description} plays a major role in shaping air pollution
        patterns. The dominant pollutant information is currently unavailable.
      </p>
    );
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
