import type { Metadata } from "next";
import {Inter, Playfair_Display} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const inter = Inter({subsets: ["latin"], variable: "--font-inter"});

const playfair = Playfair_Display({subsets: ["latin"], variable: "--font-playfair"});



export const metadata: Metadata = {
  title: "Air Quality Near Me",
  description: "With 'Air Quality Near Me' check current air quality pollution levels in your area. Get accurate AQI, PM2.5 and weather updates instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation/>
           {children}
           <Footer/>
          </ThemeProvider>
        
      </body>
    </html>
  );
}
