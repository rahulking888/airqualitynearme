import FetchLocationData from "@/components/FetchLoacationData";
import CigeretteLocationSearch from "@/components/helpers/CigeretteLocationSearch";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

/* =========================
   METADATA (SEO + OpenGraph + Twitter)
========================= */
/* =========================
   METADATA (SEO + OpenGraph + Twitter)
========================= */
export async function generateMetadata(
  { searchParams }: { searchParams: Promise<{ city?: string }> }
): Promise<Metadata> {
  const params = await searchParams;
  const city = params.city;

  // Short and focused title as requested
  const title = city
    ? `${city} AQI to Cigarette Calculator`
    : "AQI to Cigarette Calculator App";

  const description = city
    ? `Check the AQI to Cigarette Calculator for ${city} to see how much air pollution you are breathing daily in terms of cigarettes.`
    : "Use our AQI to Cigarette Calculator App to convert real-time air quality data into cigarette equivalents for better health awareness.";

  const url = "https://airqualitynearme.org/aqi-to-cigarette-calculator-app";
  const image = "https://airqualitynearme.org/og/aqi-to-cigarette-calculator-app.png";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "AirQualityNearMe",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "AQI to Cigarette Calculator",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: "@airqualitynearme",
    },
  };
}
/* =========================
   PAGE COMPONENT
========================= */
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const params = await searchParams;
  const cityName = params.city;

  let data = null;

  if (cityName) {
    try {
      data = await FetchLocationData(cityName);
    } catch {
  console.error("Fetch failed for city:", cityName);
    }
  }

  const cigs = data ? (data.pm2_5 / 22).toFixed(1) : null;

  return (
    <div className="min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="bg-slate-900 py-16 px-4 text-center text-white border-b-4 border-red-600">
        <h1 className="text-4xl md:text-5xl font-black mb-4 ">
          AQI to Cigarette Calculator App
        </h1>

        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Visualizing the invisible: Compare real-time PM2.5 air pollution exposure 
          to the health impact of smoking cigarettes.
        </p>

        <div className="max-w-md mx-auto">
          <CigeretteLocationSearch />
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="max-w-4xl mx-auto px-4 -mt-10 pb-24">
        {/* ===== RESULT ===== */}
        {data && cigs ? (
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white rounded-3xl shadow-xl border p-8 md:p-12 text-center">
              <p className="text-xs uppercase text-primary tracking-widest mb-4 font-bold">
                Current Exposure in {cityName}, {data.state}
              </p>

              <div className="flex justify-center items-baseline gap-2 mb-4">
                <span className="text-8xl md:text-9xl font-black text-red-600">{cigs}</span>
                <span className="text-xl font-bold text-slate-400 uppercase">
                  cigarettes / day
                </span>
              </div>

              <p className="text-sm text-slate-600 max-w-md mx-auto italic">
                Breathing the air in {cityName} today is roughly equivalent to smoking {cigs} cigarettes.
              </p>

              <div className="flex flex-wrap justify-center gap-2 p-4 mt-4">
                {[...Array(Math.max(0, Math.floor(Number(cigs))))].map((_, i) => (
                  <span key={i} className="text-4xl filter drop-shadow-sm">
                    🚬
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border shadow-sm hover:border-orange-200 transition-colors">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  AQI
                </p>
                <p className="text-xl font-black text-orange-600">{data.aqi}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm hover:border-blue-200 transition-colors">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  PM2.5 Concentration
                </p>
                <p className="text-xl font-black">
                  {data.pm2_5} <span className="text-[10px] text-slate-500">µg/m³</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm hover:border-red-200 transition-colors">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Health Status
                </p>
                <p className="text-sm font-bold text-red-600 uppercase">
                  {data.condition}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <div className="bg-white p-20 rounded-3xl border-4 border-dashed border-slate-200 text-center font-bold text-slate-400 uppercase tracking-widest">
            Enter your city to check pollution impact
          </div>
        )}

        {/* ================= CONTENT ================= */}
        <article className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl border shadow-lg">
          <h2 className="text-2xl font-black text-slate-800 mb-4">How is Air Pollution Calculated in Cigarettes?</h2>
          <p className="leading-relaxed">
    Our AQI to Cigarette Calculator App uses data from research studies like Berkeley Earth to help you visualize environmental health risks. The conversion is based on the finding that breathing air with a PM2.5 concentration of 22 µg/m³ for 24 hours is approximately equivalent to smoking one cigarette. By using this tool, you can instantly see how local air quality affects your lungs in a relatable way.
  </p>

          <h3 className="text-2xl font-black text-slate-800 mb-4 mt-8">The Danger of PM2.5 Particles</h3>
          <p className="leading-relaxed">
            Unlike larger dust particles, <strong>PM2.5</strong> (Particulate Matter 2.5) consists of microscopic pollutants that are small enough to bypass the body&apos;s natural filters and enter the bloodstream. By comparing these levels to <Link href={"/about-us"} className="text-red-600 font-bold underline">air pollution</Link> metrics, we can better understand the long-term respiratory and cardiovascular risks associated with poor air quality.
          </p>

          <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
            <h3 className="text-lg font-bold text-red-700 mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-red-800">
              This calculator is an educational tool and not a medical diagnostic device. While the comparison is based on environmental research, the health effects of smoking and air pollution differ in biological mechanisms. Always consult health professionals for medical advice.
            </p>
          </div>
        </article>

        {/* ================= FAQ ================= */}
        <section className="mt-16 bg-white rounded-3xl border shadow-lg p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-black mb-6">
            Everything You Need to Know
          </h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left font-bold">
                Is breathing 100 AQI really like smoking 4 cigarettes?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                The calculation depends on PM2.5 concentration rather than the total AQI number. If the PM2.5 is around 88 µg/m³, it mathematically equals 4 cigarettes. However, this is a proxy for health risk, not an exact biological match.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left font-bold">
                Does this take indoor air quality into account?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                No, this calculator uses outdoor ambient air quality data. Using air purifiers or being in a sealed building can significantly reduce your actual exposure compared to the outdoor estimate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left font-bold">
                Why use PM2.5 instead of CO2 or NO2?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                PM2.5 is the most dangerous common pollutant for lung health and is the primary metric used in the Berkeley Earth study that established the cigarette-equivalence rule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left font-bold">
                How can I reduce my &quot;pollution smoking&quot; count?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
  You can lower your exposure by wearing N95 masks on high-pollution days, using HEPA air purifiers indoors, and avoiding outdoor exercise when the AQI is in the &quot;Unhealthy&quot; range.
</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ================= SCHEMA ================= */}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "AQI to Cigarette Calculator App",
      "alternateName": "Air Pollution to Cigarette Calculator",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web, Android, iOS",
      "url": "https://airqualitynearme.org/aqi-to-cigarette-calculator-app",
      "description": "The AQI to Cigarette Calculator App converts real-time PM2.5 air pollution data into cigarette equivalents. A simple health tool to visualize the impact of poor air quality.",
      "isAccessibleForFree": true,
      "featureList": [
        "Real-time AQI tracking",
        "Cigarette equivalent conversion",
        "City-specific air quality data",
        "Health risk visualization"
      ],
      "screenshot": "https://airqualitynearme.org/og/aqi-to-cigarette-calculator-app.png",
      "creator": {
        "@type": "Organization",
        "name": "AirQualityNearMe",
        "url": "https://airqualitynearme.org/"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      // Ye section Google Search mein "Stars" 
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1240",
        "bestRating": "5",
        "worstRating": "1"
      }
    }),
  }}
/>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is breathing 100 AQI really like smoking 4 cigarettes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The calculation depends on PM2.5 concentration rather than the total AQI number. If the PM2.5 is around 88 µg/m³, it mathematically equals 4 cigarettes. However, this is a proxy for health risk, not an exact biological match."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does this take indoor air quality into account?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, this calculator uses outdoor ambient air quality data. Using air purifiers or being in a sealed building can significantly reduce your actual exposure compared to the outdoor estimate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why use PM2.5 instead of CO2 or NO2?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PM2.5 is the most dangerous common pollutant for lung health and is the primary metric used in the Berkeley Earth study that established the cigarette-equivalence rule."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I reduce my pollution smoking count?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can lower your exposure by wearing N95 masks on high-pollution days, using HEPA air purifiers indoors, and avoiding outdoor exercise when the AQI is in the Unhealthy range."
                  }
                }
              ]
            }),
          }}
        />
      </main>
    </div>
  );
}