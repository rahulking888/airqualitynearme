// app/city/[city]/page.tsx

import CitySearch from "@/components/CitySearch";

// type Props = {
//   params: {
//     city: string;
//   };
// };




export default async function CityPage({ params }: {params: Promise<{city: string}>} ) {
  const {city} = await params;
//const slug = decodeURIComponent(params.city);
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

  function airQuality(aqi: number) {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Poor";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Severe";
    return "Hazardous";
  }

  function aqiToPM25(aqi: number) {
    const breakpoints = [
      { aqiLow: 0, aqiHigh: 50, concLow: 0.0, concHigh: 12.0 },
      { aqiLow: 51, aqiHigh: 100, concLow: 12.1, concHigh: 35.4 },
      { aqiLow: 101, aqiHigh: 150, concLow: 35.5, concHigh: 55.4 },
      { aqiLow: 151, aqiHigh: 200, concLow: 55.5, concHigh: 150.4 },
      { aqiLow: 201, aqiHigh: 300, concLow: 150.5, concHigh: 250.4 },
      { aqiLow: 301, aqiHigh: 400, concLow: 250.5, concHigh: 350.4 },
      { aqiLow: 401, aqiHigh: 500, concLow: 350.5, concHigh: 500.4 },
    ];

    for (const bp of breakpoints) {
      if (aqi >= bp.aqiLow && aqi <= bp.aqiHigh) {
        return (
          ((bp.concHigh - bp.concLow) / (bp.aqiHigh - bp.aqiLow)) *
            (aqi - bp.aqiLow) +
          bp.concLow
        );
      }
    }

    return null;
  }

  return (
    <div className="p-6 text-center">
      <CitySearch />
      <h2 className="font-bold text-3xl m-10 font-serif">
        {location.city || cityName} current air Quality
      </h2>
      <p>City: {location.city || cityName}</p>
      <p>State: {aqiData?.data?.state}</p>
      <p>Country: {aqiData?.data?.country}</p>
      <p className="font-bold text-primary">Current AQI: {pollution.aqius}</p>
      <p>Air Quality is: {airQuality(pollution.aqius)}</p>
      <p>PM 2.5: {aqiToPM25(pollution.aqius)?.toFixed(1)}</p>
      <p>Temperature: {aqiData.data.current.weather.tp} °C</p>
      <p>Wind speed: {aqiData.data.current.weather.ws} km/h</p>
      <p>Humidity: {aqiData.data.current.weather.hu} %</p>
    </div>
  );
}