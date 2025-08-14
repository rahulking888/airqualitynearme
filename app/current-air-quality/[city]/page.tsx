import RadiationBall from "@/components/RadiationBall";
import AirQualityBar from "@/components/AirQualityBar";
import { Button } from "@/components/ui/button";
import AqiStatus from "@/components/AqiStatus";
import Image from "next/image";
import { MdWaterDrop } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";
import { MdOutlineWindPower } from "react-icons/md";
import Pm25Converter from "@/components/Pm25Converter";

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

  const { condition, fore, ic } = AqiStatus(pollution.aqius);
   const pm25 = Pm25Converter(pollution.aqius);
  
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
            value: `${condition}`,
          },
          {
            "@type": "PropertyValue",
            name: "PM2.5",
            value: `${pm25?.toFixed(1)}`,
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

      <div
        style={{
          backgroundImage: `linear-gradient(to bottom left, ${fore}66 0%, white 50%)`,
        }}
        className="grid grid-cols-1 relative w-full mx-auto p-6 rounded-xl shadow-lg md:grid-cols-7 gap-4"
      >
        {/* Left Section - AQI */}
        <div className="md:col-span-4">
          <span className="bg-red-500 text-white px-3 py-1 text-xs rounded uppercase tracking-wide">
            LIVE
          </span>

          <h1 className="text-2xl font-bold font-serif mt-3">
            Current Air Quality {city}
          </h1>
          <div className="flex flex-wrap items-center justify-between flex-1 gap-4">
            {/* Radiation ball and AQI */}
            <div className="flex flex-col">
              <div className="flex text-center items-center gap-2">
                <span>
                  <RadiationBall />
                </span>
                <p className="font-bold">Live AQI</p>
              </div>
              <div>
                <span style={{ color: fore }} className="text-5xl font-bold">
                  {pollution.aqius}
                </span>
                <span className="text-muted-foreground text-[12px]">
                  (US-AQI)
                </span>
              </div>
            </div>

            {/* Air Quality Status closer to AQI */}
            <div className="text-center">
              <p>Air Quality is</p>
              <Button className="text-xl"
                style={{ backgroundColor: fore }}
              >
                {condition}
              </Button>
            </div>
          </div>

          {/* PM2.5 */}
          <div className="mt-4 text-sm md:text-base">
            <p className="font-bold">
              PM2.5:
              <span className="font-semibold text-muted-foreground">
                {" "}
                {pm25?.toFixed(1)} µg/m³
              </span>
            </p>
          </div>

          {/* AQI Scale Bar */}
          <div className="mt-4">
            <AirQualityBar value={pollution.aqius} />
          </div>
        </div>

        {/* Right Section - Weather (Glassmorphism) */}
        <div
          className="md:col-span-3 p-0 sm:p-4 md:p-6"
          //  style={{
          //    background: "rgba(255, 255, 255, 0.15)",
          //    backdropFilter: "blur(10px)",
          //    WebkitBackdropFilter: "blur(10px)",
          //    border: "1px solid rgba(255, 255, 255, 0.3)",
          //  }}
             >
          <div className="flex flex-col items-center">
            <div>
              <Image
              src={`/aqi-icons/${ic}.webp`}
              width={140}
              height={140}
              alt={`Current air Quality ${city}`}
               />
            </div>
            <div
              className="flex flex-row justify-between w-full mt-4 border-t border-gray-300 pt-4"
              style={{
                background: "#fcfcfc",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                //border: "1px solid rgba(255, 255, //255, 0.3)",
              }}
              >
              <div className="flex-[1] md:flex-1 flex items-center justify-center">
                <div className="flex items-center gap-1">
                  <FaTemperatureLow className="text-primary"/>
                  <span className="font-semibold">{aqiData.data.current.weather.tp}°C</span>
                </div>
              </div>

              <div className="flex-[0.9] md:flex-1 border-l border-gray-300 flex items-center justify-center">
                <div className="flex items-center gap-1">
                  <MdWaterDrop className="text-primary"/>
                  <span className="font-semibold">{aqiData.data.current.weather.hu}% </span>
                </div>
              </div>

              <div className="flex-[1.4] md:flex-1 border-l border-gray-300 flex items-center justify-center">
               <div className="flex items-center gap-1">
                  <MdOutlineWindPower className="text-primary"/>
                  <span className="font-semibold">{aqiData.data.current.weather.ws} Km/h </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
