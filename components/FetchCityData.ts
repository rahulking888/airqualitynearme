import AqiStatus from "./AqiStatus";
import Pm25Converter from "./Pm25Converter";

export default async function FetchCityData (city:string) {
  const radarRes = await fetch(
    `https://api.radar.io/v1/geocode/forward?query=${city}`,
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
    throw new Error ("Location not found..")
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
    throw new Error ("Air Quality  data is not available..")
  }
  
  const pm2_5 = Pm25Converter(pollution.aqius);
  const {condition} = AqiStatus(pollution.aqius)
  

  return {
    aqi: pollution.aqius,
    pm25: pm2_5?.toFixed(1),
    condition: condition,
    temp: aqiData.data.current.weather.tp,
    humidity: aqiData.data.current.weather.hu,
    ws:aqiData.data.current.weather.ws,
    state: location.state,
    country: location.country
  }
}
