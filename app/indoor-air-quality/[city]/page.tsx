import FetchLocationData from "@/components/FetchLoacationData";
import IndoorAirQuality from "@/components/IndoorAirQuality";
import IndoorDashboard from "@/components/IndoorDashboard";
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
  const imageUrl = `https://airniza.com/api/image?title=${encodeURIComponent(
    fullTitle
  )}`;

  return {
    title: fullTitle,
    description: metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${titleCity} Air Quality Index (AQI) and Air Pollution`,
      description: metaDescription,
      url: pageUrl,
      siteName: "Air Quality Near Me",
      locale: "en_US",
      type: "website",
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titleCity} Air Quality Index (AQI) and Air Pollution`,
      description: metaDescription,
      images: [imageUrl],
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
  const { aqi, pm2_5, pm10, so2, no2, o3 } = await getData(cityName);
  let titleCity = cityName;

  if (location?.country === "United States") {
    const stateName = location?.state?.toLowerCase();
    const stateCode = stateName ? stateCodesUSA[stateName] : undefined;
    if (stateCode) {
      titleCity = `${cityName}, ${stateCode}`;
    }
  }

  const fullTitle = `Indoor Air Quality ${titleCity}`;
  const imageUrl = `/api/image?title=${encodeURIComponent(fullTitle)}`;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold">{fullTitle}</h1>
      <IndoorAirQuality aqi={aqi} place={cityName}/>

      {/* ✅ Dynamic image below H1 */}
      <div className="mt-6">
        <img
          src={imageUrl}
          alt={fullTitle}
          width={600}
          height={315}
          className="mx-auto border rounded-lg shadow-lg"
        />
      </div>
      <div className="py-10">
        <h2 className="text-2xl font-bold">Outdoor Factors</h2>
        <IndoorDashboard
          aqi={aqi}
          pm25={pm2_5}
          pm10={pm10}
          no2={no2}
          co={no2}
          so2={so2}
          o3={o3}
        />
      </div>
    </main>
  );
}
