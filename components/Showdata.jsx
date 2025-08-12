"use client";
import { useEffect, useState } from "react";
import { Getaqi } from "./Getaqi";
import MapComponent from "./MapComponent";
import RadiationBall from "./RadiationBall";
import { Button } from "./ui/button";
import AirQualityBar from "./AirQualityBar";

export default function Showaqi() {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Getaqi().then((response) => {
      setdata(response);
      setLoading(false);
    });
  }, []);
  if (loading)
    return <h2 className="text-center font-bold text-5xl mt-7">Loading</h2>;
  const city = data.data.city;
  const state = data.data.state;
  const country = data.data.country;
  const aqi = data.data.current.pollution.aqius;
  const temp = data.data.current.weather.tp;
  const humidity = data.data.current.weather.hu;
  const ws = data.data.current.weather.ws;
  const latitude = data.data.location.coordinates[1];
  const longitude = data.data.location.coordinates[0];

  //air quality status function start
  function airQuality(aqi) {
    if (aqi <= 50) {
      return "Good";
    } else if (aqi <= 100) {
      return "Moderate";
    } else if (aqi <= 150) {
      return "Poor";
    } else if (aqi <= 200) {
      return "Unhealthy";
    } else if (aqi <= 300) {
      return "Severe";
    } else if (aqi >= 301) {
      return "Hazardous";
    }
  }

  //PM 2.5 conversion start

  function aqiToPM25(aqi) {
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

    return null; // for Invalid AQI
  }

  return (
     <main className="relative min-h-screen ">
      {/* Map section */}
      <div className="relative h-[67vh]">
        <MapComponent lati={latitude} longi={longitude} zoom={11} />
      </div>

      {/* Overlapping AQI content */}
      <div className="relative z-10 -mt-40 max-w-7xl ml-10 mr-10 mx-auto p-6 bg-white rounded-xl shadow-lg">
              {/* Left Section - AQI */}
              <div className="flex-1 text-center md:text-left">
                <span className="bg-red-500 text-white px-3 py-1 text-xs rounded uppercase tracking-wide  ">
                  LIVE
                </span>
                <h1 className="text-2xl font-bold font-serif mt-3">
                  Current Air Quality {city}
                </h1>
                <div className="flex flex-wrap justify-between flex-1">
                  {/* radiation ball and aqi start */}
                  <div className="flex flex-col  ">
                    <div className="flex text-center items-center  gap-2">
                      <span>
                        <RadiationBall />
                      </span>
                      <p className="font-bold ">Live AQI</p>
                    </div>
                    <div>
                      <span className="text-5xl font-bold">{aqi}</span>
                      <span className="text-muted-foreground text-[12px]">
                        (US-AQI)
                      </span>
                    </div>
                  </div>
                  {/* radiation ball and aqi end */}
                  <div className="text-center">
                    <p>Air Quality is</p>
                    <Button  className="bg-amber-400 text-2xl">{airQuality(aqi)}</Button>
                  </div>
                   
                </div>
               
      
                <div className="mt-4 text-sm md:text-base">
                  <p className="font-bold">
                    PM2.5:{" "}
                    <span className="font-semibold text-muted-foreground">
                      {" "}
                      {aqiToPM25(aqi)?.toFixed(1)} µg/m³
                    </span>
                  </p>
                </div>
      
                {/* AQI Scale Bar */}
                <div className="mt-4">
                  <AirQualityBar value={aqi} />
                </div>
              </div>
      
              {/* Right Section - Weather */}
              <div className="flex-1 bg-yellow-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-muted-foreground">Temperature</div>
                <p className="text-2xl font-semibold">
                  {temp}°C
                </p>
                
      
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm md:text-base">
                  <div>
                    <p className="font-semibold">
                      {humidity}%
                    </p>
                    <p className="text-gray-500">Humidity</p>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {ws} km/h
                    </p>
                    <p className="text-gray-500">Wind</p>
                  </div>
                  <div>
                    <p className="font-semibold">2</p>
                    <p className="text-gray-500">UV Index</p>
                  </div>
                </div>
              </div>
            </div>

      {/* Rest of the page */}

      </main>
  );
}
