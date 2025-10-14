import React from "react";

type IndoorAirSectionsProps = {
  city: string;
  dominantPollutant: string; // e.g., "PM2_5"
};

const IndoorAirSections: React.FC<IndoorAirSectionsProps> = ({ city, dominantPollutant }) => {
  const pollutantName = dominantPollutant.replace("_", ".");

  // --- Seasonal Variation Phrases ---
  const winterPhrases = [
    `In winter, indoor heating in ${city} can increase CO levels. Closed windows may trap dust and VOCs.`,
    `During colder months, homes in ${city} may see elevated CO from heating and accumulated dust indoors.`,
    `Winter in ${city} can trap indoor pollutants due to closed windows and heating systems, slightly raising CO and dust levels.`
  ];

  const summerPhrases = [
    `In summer, higher outdoor ozone can enter homes in ${city}, and air conditioning may limit natural ventilation.`,
    `Hot months in ${city} can lead to indoor ozone infiltration while air conditioning reduces fresh airflow.`,
    `During summer, ${city} experiences increased indoor ozone levels due to outdoor air, with AC limiting natural ventilation.`
  ];

  const wildfirePhrases = [
    `During wildfire season, ${pollutantName} spikes indoors from smoke, requiring air purifiers and limited ventilation.`,
    `Wildfires can raise indoor ${pollutantName} levels in ${city}. Using air purifiers and keeping windows closed is recommended.`,
    `In wildfire periods, ${city} homes may experience high ${pollutantName} indoors; air purifiers and controlled ventilation help reduce exposure.`
  ];

  const randomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  const seasonal = {
    winter: randomItem(winterPhrases),
    summer: randomItem(summerPhrases),
    wildfire: randomItem(wildfirePhrases),
  };

  // --- Improve Indoor Air Section ---
  const improveIntroOptions = [
    `Residents of ${city} can take practical steps to maintain clean indoor air:`,
    `Here are some effective ways for ${city} residents to improve indoor air quality:`,
    `To ensure healthier indoor air, people in ${city} can follow these steps:`,
  ];
  const improveIntro = randomItem(improveIntroOptions);

  const improveTips = [
    "Use HEPA filters in HVAC systems and portable air purifiers.",
    "Ventilate smartly—open windows when outdoor AQI is good.",
    "Avoid indoor smoke—limit burning candles, incense, and smoking indoors.",
    "Control humidity—use dehumidifiers in damp areas to prevent mold.",
    "Minimize VOCs from paints, cleaning agents, and synthetic furniture.",
    "Indoor plants like spider plants or peace lilies can slightly improve air quality.",
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Seasonal Variation Section */}
      <div >
        <h3 className="text-xl font-bold mb-3">Seasonal Variation of Indoor Air Quality</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>{seasonal.winter}</li>
          <li>{seasonal.summer}</li>
          <li>{seasonal.wildfire}</li>
        </ul>
      </div>

      {/* Improve Indoor Air Section */}
      <div>
        <h3 className="text-xl font-bold mb-3">
          How to Improve Indoor Air Quality
        </h3>
        <p className="mb-3">{improveIntro}</p>
        <ol className="list-decimal list-inside space-y-1">
          {improveTips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default IndoorAirSections;
