import AirQualityDashboard from "@/components/AirQualityDashboard";
import Faqs from "@/components/Faqs";
import FetchLocationData from "@/components/FetchLoacationData";
import { RelatedCities } from "@/components/RelatedCities";
import { CitySchema } from "@/components/helpers/CitySchema";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SecondParagraph from "@/components/SecondParagraph";

// Shared Promise Start
async function getData(place: string) {
  return FetchLocationData(place);
}
// Shared Promise End

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const siteURL = "https://airqualitynearme.org";
  const cityName = city
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const { aqi, pm2_5, condition, temp, humidity, ws } = await getData(cityName);

  return {
    title: `Current Air Quality Index (AQI) ${cityName}`,
    description: `The current air quality in ${cityName} is AQI ${aqi} (${condition}). PM2.5: ${pm2_5} µg/m³, Temperature: ${temp}°C, Humidity: ${humidity}%, Wind: ${ws} Km/h - live updates`,
    alternates: {
      canonical: `${siteURL}/current-air-quality/${city}`,
      languages: {
        "en-US": `${siteURL}/current-air-quality/${city}`,
        "x-default": `${siteURL}/current-air-quality/${city}`,
      },
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityName = city
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const {
    aqi,
    pm2_5,
    condition,
    temp,
    state,
    country,
    humidity,
    ws,
    mainPollutant,
  } = await getData(cityName);

  //Schema and Breadcrumbs data start
  const schemaData = CitySchema({
    City: cityName,
    citySlug: city,
    Aqi: aqi,
    Pm2five: pm2_5,
    Temp: temp,
    Humidity: humidity,
    Ws: ws,
    Condition: condition,
  });

  return (
    <main className="p-0">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <AirQualityDashboard
        place={cityName}
        state={state}
        country={country}
        aqi={aqi}
        temp={temp}
        humidity={humidity}
        ws={ws}
        mainPollutant={mainPollutant}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SecondParagraph
          city={city}
          place={cityName}
          mainPollutant={
            mainPollutant as keyof typeof import("@/lib/data").pollutantInfo
          }
        />

        <Link
          href={`/indoor-air-quality/${city}`}
          className="group inline-flex items-center gap-2 text-primary font-medium transition-colors duration-300 hover:text-pink-600 mt-4"
        >
          Indoor air quality {cityName}
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <RelatedCities country={country} currentPlace={cityName} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold mb-3">
          Frequently Asked Questions about Air Quality {cityName}
        </h3>
        <Faqs place={cityName} aqi={aqi} status={condition} />
      </div>
    </main>
  );
}
