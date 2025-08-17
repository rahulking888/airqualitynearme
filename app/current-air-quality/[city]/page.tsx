import AirQualityDashboard from "@/components/AirQualityDashboard";
import Faqs from "@/components/Faqs";
import FetchCityData from "@/components/FetchCityData";
import { CitySchema } from "@/components/helpers/CitySchema";

// Shared Promise Start
async function getData(place: string) {
  return FetchCityData(place);
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
  const { aqi, pm25, condition, temp, humidity, ws } = await getData(cityName);

  return {
    title: `Current Air Quality Index (AQI) ${cityName}`,
    description: `The current air quality in ${cityName} is AQI ${aqi} (${condition}). PM2.5: ${pm25} µg/m³, Temperature: ${temp}°C, Humidity: ${humidity}%, Wind: ${ws} Km/h - live updates`,
    alternates: {
      canonical: `${siteURL}/current-air-quality/${city}`,
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

  const { aqi, pm25, condition, temp, state, country, humidity, ws } =
    await getData(cityName);

  //Schema and Breadcrumbs data start
  const schemaData = CitySchema({
    City: cityName,
    Aqi: aqi,
    Pm2five: pm25,
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
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-3">
          Frequently Asked Questions about Air Quality {cityName}
        </h2>
        <Faqs place={cityName} aqi={aqi} status={condition} />
      </div>
    </main>
  );
}
