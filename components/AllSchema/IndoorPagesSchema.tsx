type schemaProps = {
  City: string;
  Aqi: number;
  Temp: number | null;
  Humidity: number;
  Ws: number | null;
  Pm2five: number;
  Pm10?: number;
  NO2?: number;
  SO2?: number;
  CO?: number;
  O3?: number;
  Condition: string;
  citySlug: string;
  fullTitle: string;
};

export function IndoorPagesSchema({
  City,
  Aqi,
  Pm2five,
  Pm10,
  NO2,
  SO2,
  CO,
  O3,
  Temp,
  Humidity,
  Ws,
  Condition,
  citySlug,
  fullTitle,
}: schemaProps) {
  const safeProperty = (name: string, value: string | number | null | undefined, unit?: string) =>
    value !== null && value !== undefined
      ? {
          "@type": "PropertyValue",
          name,
          value: unit ? `${value} ${unit}` : `${value}`,
        }
      : null;

  return [
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: fullTitle,
      description: `Check the latest insights on indoor air quality ${City}. Understand pollutants, ventilation tips, and ways to improve indoor environments for better health and comfort.`,
      url: `https://airqualitynearme.org/indoor-air-quality/${citySlug}`,
      datePublished: "2025-08-08T00:00:00.000Z",
      dateModified: new Date().toISOString(),
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        url: "https://airqualitynearme.org",
        name: "Air Quality Near Me",
      },
      author: { "@type": "Organization", name: "Air Quality Near Me" },
      publisher: { "@type": "Organization", name: "Air Quality Near Me" },
      mainEntity: {
        "@type": "Thing",
        name: `Indoor Air Quality Data for ${City}`,
        additionalProperty: [
          safeProperty("Aqi", Aqi),
          safeProperty("Air Quality Status", Condition),
          safeProperty("PM2.5", Pm2five, "µg/m³"),
          safeProperty("PM10", Pm10, "µg/m³"),
          safeProperty("NO2", NO2, "µg/m³"),
          safeProperty("SO2", SO2, "µg/m³"),
          safeProperty("CO", CO, "ppm"),
          safeProperty("O3", O3, "µg/m³"),
          safeProperty("Humidity", Humidity, "%"),
          safeProperty("Temperature", Temp, "°C"),
          safeProperty("Wind Speed", Ws, "km/h"),
        ].filter(Boolean),
      },
    },

    // Breadcrumb Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://airqualitynearme.org" },
        {
          "@type": "ListItem",
          position: 2,
          name: fullTitle,
          item: `https://airqualitynearme.org/indoor-air-quality/${citySlug}`,
        },
      ],
    },

    // Dataset Schema
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: `Current Air Quality Index (Aqi) for ${City}`,
      description: `Indoor air quality data for ${City}. Check indoor air quality updates`,
      url: `https://airqualitynearme.org/indoor-air-quality/${citySlug}`,
      creator: { "@type": "Organization", name: "Air Quality Near Me", url: "https://airqualitynearme.org" },
      license: "https://creativecommons.org/licenses/by/4.0/",
      spatialCoverage: { "@type": "Place", name: City },
      variableMeasured: [
        safeProperty("Aqi", Aqi, "Index"),
        safeProperty("PM2.5", Pm2five, "µg/m³"),
        safeProperty("PM10", Pm10, "µg/m³"),
        safeProperty("NO2", NO2, "ppb"),
        safeProperty("SO2", SO2, "ppb"),
        safeProperty("CO", CO, "ppm"),
        safeProperty("O3", O3, "ppm"),
        safeProperty("Temperature", Temp, "°C"),
        safeProperty("Humidity", Humidity, "%"),
        safeProperty("Wind Speed", Ws, "km/h"),
      ].filter(Boolean),
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
          name: `What are the common indoor pollutants in ${City}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Common indoor pollutants in ${City} include PM2.5, PM10, CO₂, mold, allergens, and carbon monoxide.`,
          },
        },
        {
          "@type": "Question",
          name: `How can I improve indoor air quality in ${City}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `To improve indoor air quality in ${City}, ensure proper ventilation, use air purifiers, reduce smoking indoors, and maintain optimal humidity levels.`,
          },
        },
        {
          "@type": "Question",
          name: `Is indoor air quality linked to health issues in ${City}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, poor indoor air quality in ${City} can cause respiratory issues, allergies, headaches, and worsen asthma conditions.`,
          },
        },
      ],
    },
  ];
}
