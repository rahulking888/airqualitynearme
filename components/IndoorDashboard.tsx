import React from "react";

type PollutantInfo = {
  source: string;
  health: string;
};

export const pollutantInfo: Record<string, PollutantInfo> = {
  PM2_5: {
    source: "vehicular emissions, biomass burning, and road dust",
    health: "breathing problems, throat irritation, fatigue",
  },
  PM10: {
    source: "construction dust, unpaved roads, and industrial activities",
    health: "coughing, eye irritation, reduced lung capacity",
  },
  NO2: {
    source: "vehicle exhaust, power plants, industrial combustion",
    health: "lung irritation, asthma aggravation, reduced immunity",
  },
  SO2: {
    source: "burning of coal, biomass, and fossil fuels",
    health: "eye irritation, throat discomfort, coughing fits",
  },
  O3: {
    source: "sunlight reacting with vehicle and industrial emissions",
    health: "chest pain, coughing, breathing difficulty",
  },
  CO: {
    source: "incomplete combustion from vehicles and stoves",
    health: "headache, dizziness, reduced oxygen levels in blood",
  },
};

type IndoorDashboardProps = {
  city: string;
  aqi: number;
  dominantPollutant: keyof typeof pollutantInfo;
  pm25?: number;
  pm10?: number;
  co?: number;
  no2?: number;
  o3?: number;
  so2?: number;
};

const IndoorDashboard: React.FC<IndoorDashboardProps> = ({
  city,
  aqi,
  dominantPollutant,
  pm25,
  pm10,
  co,
  no2,
  o3,
  so2,
}) => {
  const dominantPollutantName = dominantPollutant.replace("_", "."); // PM2_5 → PM2.5
  const source = pollutantInfo[dominantPollutant].source;
  const health = pollutantInfo[dominantPollutant].health;

  const pollutants = [
    { name: "PM2.5", value: pm25, unit: "µg/m³", color: "#FF3E3E" },
    { name: "PM10", value: pm10, unit: "µg/m³", color: "#FFB200" },
    { name: "CO", value: co, unit: "ppm", color: "#00BFFF" },
    { name: "NO2", value: no2, unit: "ppb", color: "#32CD32" },
    { name: "O3", value: o3, unit: "ppm", color: "#8A2BE2" },
    { name: "SO2", value: so2, unit: "ppb", color: "#FF69B4" },
  ].filter((p) => p.value !== undefined);

  // Circle / Gauge settings
  const radius = 100;
  const stroke = 14;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const gaugeCircumference = (270 / 360) * circumference;
  const progress = Math.min(aqi, 500);
  const strokeDashoffset = gaugeCircumference - (progress / 500) * gaugeCircumference;

  const getAQIColor = (value: number) => {
    if (value <= 50) return "#16A34A"; // green
    if (value <= 100) return "#FACC15"; // yellow
    if (value <= 150) return "#F97316"; // orange
    if (value <= 200) return "#DC2626"; // red
    return "#6B21A8"; // purple
  };
  const aqiColor = getAQIColor(aqi);

  return (
    <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto">
      {/* Dashboard */}
      <div className="flex flex-col md:flex-row bg-white p-5 rounded-2xl w-full gap-6">
        {/* Left Gauge AQI */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center md:w-64 w-full">
          <div className="relative">
            <svg height={radius * 2} width={radius * 2}>
              {/* Background Arc */}
              <circle
                stroke="#E5E7EB"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${gaugeCircumference} ${circumference}`}
                strokeDashoffset={0}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                transform={`rotate(135 ${radius} ${radius})`}
              />
              {/* Progress Arc */}
              <circle
                stroke={aqiColor}
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${gaugeCircumference} ${circumference}`}
                style={{ strokeDashoffset, transition: "stroke-dashoffset 1s ease-in-out" }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                transform={`rotate(135 ${radius} ${radius})`}
              />
              {/* AQI Number */}
              <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="34" fontWeight="bold" fill="#111">
                {aqi}
              </text>
              <text
                x="50%"
                y={radius * 2 - 22}
                textAnchor="middle"
                fontSize="20"
                fontWeight="600"
                fill="#555"
              >
                AQI
              </text>
            </svg>
          </div>
        </div>

        {/* Right Side Pollutant Boxes */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          {pollutants.map((p, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-xl flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium text-sm md:text-base">{p.name}</span>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
              </div>
              <div className="text-gray-900 font-bold text-lg md:text-xl">
                {p.value} {p.unit}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Line */}
      <p className="text-gray-600 text-sm md:text-base mx-auto">
        Note: All readings represent current indoor air conditions in {city}.
      </p>

      {/* Dynamic Dominant Pollutant Paragraph */}
      <p className="bg-gray-50 p-4 rounded-xl text-gray-800 shadow-sm">
        Currently, the dominant pollutant in <strong>{city}</strong> is{" "}
        <strong>{dominantPollutantName}</strong>, which primarily originates from {source}. This
        pollutant can infiltrate indoor spaces, causing {health}. Using HEPA filters, proper
        ventilation, and monitoring indoor air can help reduce its impact.
      </p>
    </div>
  );
};

export default IndoorDashboard;
