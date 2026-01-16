import { NextResponse } from "next/server";
import FetchLocationData from "@/components/FetchLoacationData";
import { CitySchema } from "@/components/helpers/CitySchema";

export const runtime = "nodejs";

function titleCase(slug: string) {
  return slug
    .replace(/-/g, " ")
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Nav Baar //
function Nav() {
  return `
<header class="site-header">
  <div class="container nav-wrap">
    <a href="/" class="logo">AirQualityNearMe</a>

    <!-- Mobile toggle -->
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav class="nav">
      <a href="/current-air-quality">Current AQI</a>
      <a href="/indoor-air-quality">Indoor AQI</a>
      <a href="/about">About</a>
    </nav>
  </div>
</header>
`;
}


// footer
function Footer() {
  return `
<footer class="site-footer">
  © ${new Date().getFullYear()} AirQualityNearMe.org · All rights reserved
</footer>
`;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;   // 👈 MUST
  const citySlug = city;




  const cityName = titleCase(citySlug);
  const siteURL = "https://airqualitynearme.org";

  const {
    aqi,
    pm2_5,
    condition,
    temp,
    humidity,
    ws,
    state,
    country,
    mainPollutant,
  } = await FetchLocationData(cityName);

  const schemaData = CitySchema({
    City: cityName,
    citySlug,
    Aqi: aqi,
    Pm2five: pm2_5,
    Temp: temp,
    Humidity: humidity,
    Ws: ws,
    Condition: condition,
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title>Current Air Quality Index (AQI) ${cityName}</title>
<meta name="description" content="Live air quality in ${cityName}. AQI ${aqi} (${condition}), PM2.5 ${pm2_5} µg/m³, Temperature ${temp}°C." />

<link rel="canonical" href="${siteURL}/current-air-quality/${citySlug}" />
<link rel="stylesheet" href="/seo.css" />

<script type="application/ld+json">
${JSON.stringify(schemaData)}
</script>
</head>

<body>
${Nav()}

<section class="hero">
  <div class="container">
    <h1>Current Air Quality in ${cityName}</h1>
    <p>${cityName}, ${state}, ${country} · Live AQI Updates</p>
  </div>
</section>

<main class="container">
  <div class="card">
    <div class="stats">
      <div class="stat"><strong>${aqi}</strong>AQI (${condition})</div>
      <div class="stat"><strong>${pm2_5}</strong>PM2.5 µg/m³</div>
      <div class="stat"><strong>${temp}°C</strong>Temperature</div>
      <div class="stat"><strong>${humidity}%</strong>Humidity</div>
      <div class="stat"><strong>${ws} km/h</strong>Wind Speed</div>
      <div class="stat"><strong>${mainPollutant}</strong>Main Pollutant</div>
    </div>

    <a class="cta" href="/indoor-air-quality/${citySlug}">
      Indoor Air Quality in ${cityName} →
    </a>
  </div>
</main>

${Footer()}
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}
