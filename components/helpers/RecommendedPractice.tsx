import React from "react";
import { IndoorRelatedCities } from "../IndoorRelatedCities";

type RecommendedPracticesProps = {
  city: string;
};

const RecommendedPractices: React.FC<RecommendedPracticesProps> = ({ city}) => {
  // Optional: slight variation for intro sentence
  const introOptions = [
    `To maintain healthy indoor air in ${city}, consider these practices:`,
    `Here are some recommended air quality practices for homes in ${city}:`,
    `Residents of ${city} can follow these tips to ensure better indoor air quality:`,
  ];
  const intro = introOptions[Math.floor(Math.random() * introOptions.length)];

  const practices = [
    `Check daily AQI for ${city} before opening windows.`,
    "Use smart air quality monitors to track indoor pollutants.",
    "Follow seasonal maintenance for HVAC systems to reduce dust and mold accumulation.",
  ];

  return (
    <div >
      <h3 className="text-xl font-bold mb-3">Recommended Air Quality Practices for Homes</h3>
      <p className="mb-3">{intro}</p>
      <ul className="list-disc list-inside space-y-1">
        {practices.map((practice, i) => (
          <li key={i}>{practice}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default RecommendedPractices;
