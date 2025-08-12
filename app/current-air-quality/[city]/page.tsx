import RadiationBall from "@/components/RadiationBall";
import AirQualityBar from "@/components/AirQualityBar";
import { Button } from "@/components/ui/button";

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

  return {
    title: `Current Air Quality ${cityName}`,
    description: `Check the current air quality in ${cityName}: AQI, PM 2.5 and humidity levels. Stay updated and protect your health.`,
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
  const cityName = city.replace(/-/g, " ");

  // Radar API call
  const radarRes = await fetch(
    `https://api.radar.io/v1/geocode/forward?query=${cityName}`,
    {
      headers: {
        Authorization: process.env.RADAR_SECRET_KEY || "",
      },
      cache: "no-store",
    }
  );

  const radarData = await radarRes.json();
  const location = radarData.addresses?.[0];

  if (!location) {
    return <h2>Location not found.</h2>;
  }

  // AirVisual API call
  const aqiRes = await fetch(
    `https://api.airvisual.com/v2/nearest_city?lat=${location.latitude}&lon=${location.longitude}&key=${process.env.apikey}`,
    {
      cache: "no-store",
    }
  );

  const aqiData = await aqiRes.json();
  const pollution = aqiData?.data?.current?.pollution;

  if (!pollution) {
    return <h2>Air quality data not available.</h2>;
  }

  function airQuality(aqi: number) {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Poor";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Severe";
    return "Hazardous";
  }

  function aqiToPM25(aqi: number) {
    const breakpoints = [
      { aqiLow: 0, aqiHigh: 50, concLow: 0.0, concHigh: 12.0 },
      { aqiLow: 51, aqiHigh: 100, concLow: 12.1, concHigh: 35.4 },
      { aqiLow: 101, aqiHigh: 150, concLow: 35.5, concHigh: 55.4 },
      { aqiLow: 151, aqiHigh: 200, concLow: 55.5, concHigh: 150.4 },
      { aqiLow: 201, aqiHigh: 300, concLow: 150.5, concHigh: 250.4 },
      { aqiLow: 301, aqiHigh: 400, concLow: 250.5, concHigh: 350.4 },
      { aqiLow: 401, aqiHigh: 500, concLow: 350.5, concHigh: 500.4 },
    ];

    for (const bp of breakpoints) {
      if (aqi >= bp.aqiLow && aqi <= bp.aqiHigh) {
        return (
          ((bp.concHigh - bp.concLow) / (bp.aqiHigh - bp.aqiLow)) *
            (aqi - bp.aqiLow) +
          bp.concLow
        );
      }
    }

    return null;
  }
  //Schema and Breadcrumbs data start
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Current Air Quality in ${cityName}`,
      description: `Check AQI, PM2.5, humidity, temperature in ${cityName}. Updated every hour.`,
      url: `https://airqualitynearme.org/current-air-quality/${cityName}`,
      datePublished: "2025-08-08T00:00:00.000Z",
      dateModified: new Date().toISOString(),
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: "Air Quality Near Me",
      },
      publisher: {
        "@type": "Organization",
        name: "Air Quality Near Me",
      },
      mainEntity: {
        "@type": "Thing",
        name: `Air Quality Data for ${cityName}`,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "AQI",
            value: `${pollution.aqius}`,
          },
          {
            "@type": "PropertyValue",
            name: "Air Quality Status",
            value: `${airQuality(pollution.aqius)}`,
          },
          {
            "@type": "PropertyValue",
            name: "PM2.5",
            value: `${aqiToPM25(pollution.aqius)?.toFixed(1)}`,
          },
          {
            "@type": "PropertyValue",
            name: "Humidity",
            value: `${aqiData.data.current.weather.hu}`,
          },
          {
            "@type": "PropertyValue",
            name: "Temperature",
            value: `${aqiData.data.current.weather.tp}°C`,
          },
          {
            "@type": "PropertyValue",
            name: "Wind Speed",
            value: `${aqiData.data.current.weather.ws} km/h`,
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://airqualitynearme.org",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: `${cityName}`,
          item: `https://airqualitynearme.org/current-air-quality/${cityName}`,
        },
      ],
    },
  ];
  //Schema and Breadcrumbs data end

  return (
    <main className="p-3">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 w-full ">
        {/* Left Section - AQI */}
        <div className="flex-1 text-center md:text-left">
          <span className="bg-red-500 text-white px-3 py-1 text-xs rounded uppercase tracking-wide  ">
            LIVE
          </span>
          <h1 className="text-2xl font-bold font-serif mt-3">
            Current Air Quality {location.city || cityName}
          </h1>
          <div className="flex flex-wrap justify-between flex-1">
            {/* radiation ball and aqi start */}
            <div className="flex flex-col  ">
              <div className="flex text-center items-center  gap-2">
                <span>
                  <RadiationBall />
                </span>
                <p className="font-bold ">Live AQI</p>
              </div>
              <div>
                <span className="text-5xl font-bold">{pollution.aqius}</span>
                <span className="text-muted-foreground text-[12px]">
                  (US-AQI)
                </span>
              </div>
            </div>
            {/* radiation ball and aqi end */}
            <div className="text-center">
              <p>Air Quality is</p>
              <Button  className="bg-amber-400 text-2xl">{airQuality(pollution.aqius)}</Button>
            </div>
             
          </div>
         

          <div className="mt-4 text-sm md:text-base">
            <p className="font-bold">
              PM2.5:{" "}
              <span className="font-semibold text-muted-foreground">
                {" "}
                {aqiToPM25(pollution.aqius)?.toFixed(1)} µg/m³
              </span>
            </p>
          </div>

          {/* AQI Scale Bar */}
          <div className="mt-4">
            <AirQualityBar value={pollution.aqius} />
          </div>
        </div>

        {/* Right Section - Weather */}
        <div className="flex-1 bg-yellow-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-muted-foreground">Temperature</div>
          <p className="text-2xl font-semibold">
            {aqiData.data.current.weather.tp}°C
          </p>
          

          <div className="mt-4 grid grid-cols-3 gap-4 text-sm md:text-base">
            <div>
              <p className="font-semibold">
                {aqiData.data.current.weather.hu}%
              </p>
              <p className="text-gray-500">Humidity</p>
            </div>
            <div>
              <p className="font-semibold">
                {aqiData.data.current.weather.ws} km/h
              </p>
              <p className="text-gray-500">Wind</p>
            </div>
            <div>
              <p className="font-semibold">2</p>
              <p className="text-gray-500">UV Index</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
