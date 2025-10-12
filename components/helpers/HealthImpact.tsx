import React from "react";

type HealthImpactProps = {
  city: string;
};

const HealthImpact: React.FC<HealthImpactProps> = ({ city }) => {
  // Optional: slightly vary the intro to avoid duplicate content
  const introOptions = [
    `Even in cities like ${city} with generally good air quality, long-term exposure to indoor pollutants can affect:`,
    `In ${city}, residents may experience health effects from prolonged indoor air pollution, even if overall air quality is good:`,
    `Despite good outdoor air quality in ${city}, indoor pollutants can have lasting health impacts on residents:`,
  ];
  const intro = introOptions[Math.floor(Math.random() * introOptions.length)];

  const impacts = [
    "Respiratory health (asthma, allergies, coughing)",
    "Heart health due to fine particulate matter",
    "Children and elderly, who are more sensitive to pollutants",
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mt-4">Health Impacts of Poor Indoor Air</h3>
      <p className="mb-1 mt-2">{intro}</p>
      <ul className="list-disc list-inside space-y-1 mb-3">
        {impacts.map((impact, i) => (
          <li key={i}>{impact}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthImpact;
