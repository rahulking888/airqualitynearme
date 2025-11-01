import { IndoorPagesSchema } from "@/components/AllSchema/IndoorPagesSchema";
import FetchLocationData from "@/components/FetchLoacationData";
import HealthImpact from "@/components/helpers/HealthImpact";
import RecommendedPractices from "@/components/helpers/RecommendedPractice";
import SeasonalVariation from "@/components/helpers/SeasonalVariations";
import IndoorDashboard from "@/components/IndoorDashboard";
import IndoorFAQ from "@/components/IndoorFAQ";
import { IndoorRelatedCities } from "@/components/IndoorRelatedCities";
import Intro4Indoor from "@/components/Intro4Indoor";
import stateCodesUSA from "@/lib/data";

// ✅ Shared Promise to fetch location data
async function getData(place: string) {
  return FetchLocationData(place);
}

// ✅ Metadata
export async function generateMetadata({
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

  const siteURL = "https://airqualitynearme.org";
  const pageUrl = `${siteURL}/indoor-air-quality/${city}`;

  const location = await getData(cityName);

  let titleCity = cityName;

  if (location?.country === "United States") {
    const stateName = location?.state?.toLowerCase();
    const stateCode = stateName ? stateCodesUSA[stateName] : undefined;
    if (stateCode) {
      titleCity = `${cityName}, ${stateCode}`;
    }
  }

  const fullTitle = `Indoor Air Quality ${titleCity}`;
  const metaDescription = `Check the latest insights on indoor air quality ${cityName}. Understand pollutants, ventilation tips, and ways to improve indoor environments for better health and comfort.`;

  // ✅ Dynamic image URL
  

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: pageUrl,
      languages: {
      'en-US': pageUrl,
      'x-default': pageUrl,
    },
    },
    openGraph: {
      title: `${titleCity} Air Quality Index (AQI) and Air Pollution`,
      description: metaDescription,
      url: pageUrl,
      siteName: "Air Quality Near Me",
      locale: "en_US",
      type: "website",
     
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleCity} Air Quality Index (AQI) and Air Pollution`,
      description: metaDescription,
     
    },
  };
}

// ✅ Page Component
export default async function IndoorCityPage({
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

  const location = await getData(cityName);
  const country = location.country
  const { aqi, pm2_5, pm10, so2, no2, o3,ws,condition, temp, humidity,mainPollutant } = await getData(cityName);
  let titleCity = cityName;

  if (location?.country === "United States") {
    const stateName = location?.state?.toLowerCase();
    const stateCode = stateName ? stateCodesUSA[stateName] : undefined;
    if (stateCode) {
      titleCity = `${cityName}, ${stateCode}`;
    }
  }

  const fullTitle = `Indoor Air Quality ${titleCity}`;

  //Schema and Breadcrumbs data start
    const schemaData = IndoorPagesSchema({
      City: cityName,
      citySlug: city,
      Aqi: aqi,
      Pm2five: pm2_5,
      Temp: temp,
      Humidity: humidity,
      Ws: ws,
      Condition: condition,
      fullTitle: fullTitle,
    });
  
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <h1 className="text-3xl font-bold">{fullTitle}</h1>
      <Intro4Indoor city={city} aqi={aqi} place={cityName} category={condition} fulltitle={fullTitle}/>
      
      <div className="py-10">
        <h2 className="text-2xl font-bold">{cityName} Air Quality Data</h2>
        <IndoorDashboard
          aqi={aqi}
          pm25={pm2_5}
          pm10={pm10}
          no2={no2}
          co={no2}
          so2={so2}
          o3={o3}
          dominantPollutant={mainPollutant}
          city={cityName}
         
        />
      </div>
      <SeasonalVariation city={cityName} dominantPollutant={mainPollutant} />
       <HealthImpact city={cityName}/>
      <RecommendedPractices city={cityName}/>
      <IndoorRelatedCities currentPlace={city} country={country} fulltitle={fullTitle}/>
      <IndoorFAQ place={cityName}/>

    </main>
  );
}
