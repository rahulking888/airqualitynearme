import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
//import Navigation from "@/components/Navigation";
import NewNavigation from "@/components/NewNavigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Air Quality Near Me",
  description:
    "Air Quality Near Me shows real-time air quality for your location or any city or place. Check current AQI, PM2.5, humidity, and temperature instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Air Quality Near Me",
  "alternateName": "Current AQI Near Me",
  "url": "https://airqualitynearme.org/",
  "description": "Air Qualit yNear Me shows real-time air quality for your location or any city or place. Check current air quality index (AQI), PM2.5, humidity, and temperature instantly.",
  "inLanguage": "en",
  "publisher": {
    "@type": "Organization",
    "name": "Air Quality Near Me",
    "url": "https://airqualitynearme.org/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://airqualitynearme.org/logo.png"
    }
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61579195018666",
    "https://x.com/air_quality_now",
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://airqualitynearme.org/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
  return (
    <html lang="en" suppressHydrationWarning >
      
      <head>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      </head>
      
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <NewNavigation />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-BF1PGSRTWP" />
      </body>
    </html>
  );
}
