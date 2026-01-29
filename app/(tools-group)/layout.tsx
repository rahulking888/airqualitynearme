import { Inter, Playfair_Display } from "next/font/google";
import "@/globals.css"
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
//import Navigation from "@/components/Navigation";
import ToolsNav from "@/components/ToolsNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});



export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en-US" >
      <head>
        

        {/* ✅ RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="AirQualityNearMe RSS Feed"
          href="/rss"
        />
      </head>

      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ToolsNav />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-BF1PGSRTWP" />
      </body>
    </html>
  );
}
