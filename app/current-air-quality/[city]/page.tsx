import AirQualityDashboard from "@/components/AirQualityDashboard";
import Faqs from "@/components/Faqs";
import FetchCityData from "@/components/FetchCityData";



// Shared Promise Start
async function getData (place:string) {
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
    const {aqi, pm25, condition, temp, humidity,ws} = await getData(cityName);

  return {
    title: `Current Air Quality Index (AQI) ${cityName}`,
    description: `The current air quality in ${cityName} is AQI ${aqi} (${condition}). PM2.5: ${pm25} µg/m³, Temperature: ${temp}°C, Humidity: ${humidity}%, Wind: ${ws} Km/h - live updates`,
    alternates: {
      canonical: `${siteURL}/current-air-quality/${city}`
    }
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

  

  const {aqi, pm25, condition, temp, state, country, humidity, ws} = await getData(cityName);

  //Schema and Breadcrumbs data start
  const schemaData = [
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Current Air Quality Index (AQI) ${cityName}`,
      description: `Check live AQI, PM2.5, humidity, temperature, and wind speed in ${cityName}. Updated in real-time with the latest air quality data.`,
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
            value: `${aqi}`,
          },
          {
            "@type": "PropertyValue",
            name: "Air Quality Status",
            value: `${condition}`,
          },
          {
            "@type": "PropertyValue",
            name: "PM2.5",
            value: `${pm25}`,
          },
          {
            "@type": "PropertyValue",
            name: "Humidity",
            value: `${humidity}%`,
          },
          {
            "@type": "PropertyValue",
            name: "Temperature",
            value: `${temp} °C`,
          },
          {
            "@type": "PropertyValue",
            name: "Wind Speed",
            value: `${ws} km/h`,
          },
        ],
      },
    },

    // Breadcrumb Schema
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

    // Dataset Schema
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: `Current Air Quality Index (AQI) for ${cityName}`,
      description: `Live AQI and PM2.5 data for ${cityName}. Check real-time air quality updates`,
      url: `https://airqualitynearme.org/current-air-quality/${cityName}`,
      creator: {
        "@type": "Organization",
        name: "Air Quality Near Me",
        url: "https://airqualitynearme.org",
      },
      license: "https://creativecommons.org/licenses/by/4.0/",
      spatialCoverage: {
        "@type": "Place",
        name: `${cityName}`,
      },
      variableMeasured: [
        {
          "@type": "PropertyValue",
          name: "AQI",
          value: `${aqi}`,
          unitText: "AQI",
        },
        {
          "@type": "PropertyValue",
          name: "PM2.5",
          value: `${pm25}`,
          unitText: "µg/m³",
        },
        {
          "@type": "PropertyValue",
          name: "Temperature",
          value: `${temp}`,
          unitText: "°C",
        },
        {
          "@type": "PropertyValue",
          name: "Humidity",
          value: `${humidity}`,
          unitText: "%",
        },
        {
          "@type": "PropertyValue",
          name: "Wind Speed",
          value: `${ws}`,
          unitText: "km/h",
        },
      ],
      measurementTechnique: "Standard air quality measurement methods",
      dateModified: new Date().toISOString(),
    },

    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What is the current AQI level in ${cityName}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The AQI in ${cityName} today is ${aqi}, which is considered ${condition}.`,
          },
        },
        {
          "@type": "Question",
          name: `What is the main cause of air pollution in ${cityName}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The most common sources of air pollution in ${cityName} include traffic emissions, industrial activities, burning of fossil fuels, and natural factors such as dust and weather conditions.`,
          },
        },
        {
          "@type": "Question",
          name: `What is a safe AQI level?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `An AQI below 50 is considered safe and healthy.`,
          },
        },
        {
          "@type": "Question",
          name: `When is ${cityName} air quality worst?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Air quality in ${cityName} often becomes worse during colder months, when pollution is trapped near the ground, or during periods of high emissions and unfavorable weather.`,
          },
        },
      ],
    },
  ];

   







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
