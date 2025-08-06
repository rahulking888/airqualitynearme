"use client"
import { useEffect, useState } from "react";
import { Getaqi } from "./Getaqi"

export default function Showaqi () {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (() =>{

    Getaqi().then ((response) => {
      setdata(response);
      setLoading(false);
    });
  }, []);
  if (loading) return <h2 className="text-center font-bold text-5xl mt-7">Loading</h2>
  const city = data.data.city;
  const state = data.data.state;
  const country = data.data.country;
  const aqi = data.data.current.pollution.aqius;
  const temp = data.data.current.weather.tp;
  const humidity = data.data.current.weather.hu;
  const ws = data.data.current.weather.ws;

  //air quality status function start
  function airQuality (aqi) {
    if (aqi <= 50) {
      return "Good"
    } else if (aqi <= 100) {
      return "Moderate"
    }
    else if (aqi <= 150) {
      return "Poor"
    }
    else if (aqi <= 200) {
      return "Unhealthy"
    }
    else if (aqi <= 300) {
      return "Severe"
    }
    else if (aqi >= 301) {
      return "Hazardous"
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
        { aqiLow: 401, aqiHigh: 500, concLow: 350.5, concHigh: 500.4 }
    ];

    for (const bp of breakpoints) {
        if (aqi >= bp.aqiLow && aqi <= bp.aqiHigh) {
            return ((bp.concHigh - bp.concLow) / (bp.aqiHigh - bp.aqiLow)) *
                   (aqi - bp.aqiLow) + bp.concLow;
        }
    }

    return null; // for Invalid AQI
}





  return <div className="text-center">
    <h2 className="font-bold text-3xl m-10 font-serif">Air Quality index {city}</h2>
    <p>City: {city}</p>
    <p>State: {state}</p>
    <p>Country: {country}</p>
    <p>AQI: {aqi}</p>
    <p>Air Quality is: {airQuality(aqi)} </p>
    <p>PM 2.5- {aqiToPM25(aqi).toFixed(1)}</p>
    <p>Temperature: {temp} °C</p>
    <p>Wind speed: {ws} km/h</p>
    <p>Humidity: {humidity} % </p>
  </div>
}