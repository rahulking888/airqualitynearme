import Showdata from "@/components/Showdata";
import HomepageSchema from "@/components/HomepageSchema";


    export const metadata = {
    title: "Air Quality Near Me",
    description: "Get real-time air quality index (AQI) data, PM2.5, humidity, temperature, and pollution levels for cities across the world. Updated instantly.",
    alternates: {
      canonical: "https://airqualitynearme.org/"
    }
  };


export default function Home() {
  //Schema data start
  const schemaData = HomepageSchema();
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <main>
        <Showdata />
      </main>
    </div>
  );
}
