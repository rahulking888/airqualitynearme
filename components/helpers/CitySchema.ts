type schemaProps = {
  City: string;
  Aqi: number;
  Temp: number | null;
  Humidity: number;
  Ws: number | null;
  Pm2five: number;
  Condition:string;
}

export function CitySchema ({City,Aqi,Pm2five,Temp,Humidity,Ws,Condition}:schemaProps) {
  
  return [
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Current Air Quality Index (Aqi) ${City}`,
      description: `Check live Aqi, PM2.5, humidity, temperature, and wind speed in ${City}. Updated in real-time with the latest air quality data.`,
      url: `https://airqualitynearme.org/current-air-quality/${City}`,
      keywords: [`current air quality ${City}`, `Live AQI ${City}`, `${City} air quality`, `${City} air quality index`, `air quality ${City}`, `what is the air quality today ${City}` ],
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
        name: `Air Quality Data for ${City}`,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Aqi",
            value: `${Aqi}`,
          },
          {
            "@type": "PropertyValue",
            name: "Air Quality Status",
            value: `${Condition}`,
          },
          {
            "@type": "PropertyValue",
            name: "PM2.5",
            value: `${Pm2five}`,
          },
          {
            "@type": "PropertyValue",
            name: "Humidity",
            value: `${Humidity}%`,
          },
          {
            "@type": "PropertyValue",
            name: "Temperature",
            value: `${Temp} °C`,
          },
          {
            "@type": "PropertyValue",
            name: "Wind Speed",
            value: `${Ws} km/h`,
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
          name: `${City}`,
          item: `https://airqualitynearme.org/current-air-quality/${City}`,
        },
      ],
    },

    // Dataset Schema
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: `Current Air Quality Index (Aqi) for ${City}`,
      description: `Live Aqi and PM2.5 data for ${City}. Check real-time air quality updates`,
      url: `https://airqualitynearme.org/current-air-quality/${City}`,
      creator: {
        "@type": "Organization",
        name: "Air Quality Near Me",
        url: "https://airqualitynearme.org",
      },
      license: "https://creativecommons.org/licenses/by/4.0/",
      spatialCoverage: {
        "@type": "Place",
        name: `${City}`,
      },
      variableMeasured: [
        {
          "@type": "PropertyValue",
          name: "Aqi",
          value: `${Aqi}`,
          unitText: "Aqi",
        },
        {
          "@type": "PropertyValue",
          name: "PM2.5",
          value: `${Pm2five}`,
          unitText: "µg/m³",
        },
        {
          "@type": "PropertyValue",
          name: "Temperature",
          value: `${Temp}`,
          unitText: "°C",
        },
        {
          "@type": "PropertyValue",
          name: "Humidity",
          value: `${Humidity}`,
          unitText: "%",
        },
        {
          "@type": "PropertyValue",
          name: "Wind Speed",
          value: `${Ws}`,
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
          name: `What is the current Aqi level in ${City}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Aqi in ${City} today is ${Aqi}, which is considered ${Condition}.`,
          },
        },
        {
          "@type": "Question",
          name: `What is the main cause of air pollution in ${City}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `The most common sources of air pollution in ${City} include traffic emissions, industrial activities, burning of fossil fuels, and natural factors such as dust and weather conditions.`,
          },
        },
        {
          "@type": "Question",
          name: `What is a safe Aqi level?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `An Aqi below 50 is considered safe and healthy.`,
          },
        },
        {
          "@type": "Question",
          name: `When is ${City} air quality worst?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Air quality in ${City} often becomes worse during colder months, when pollution is trapped near the ground, or during periods of high emissions and unfavorable weather.`,
          },
        },
      ],
    },
  ];



}