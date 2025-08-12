import React from "react";

interface AirQualityBarProps {
  value: number | string;
}

const AirQualityBar: React.FC<AirQualityBarProps> = ({ value }) => {
  const segments = [
    { start: 0, end: 50, label: "Good", color: "#4caf50" },
    { start: 50, end: 100, label: "Moderate", color: "#ffeb3b" },
    { start: 100, end: 150, label: "Poor", color: "#ff9800" },
    { start: 150, end: 200, label: "Unhealthy", color: "#f44336" },
    { start: 200, end: 300, label: "Severe", color: "#9c27b0" },
    { start: 300, end: 300, label: "Hazardous", color: "#b71c1c" },
  ];

  const maxAQI = 300;
  const numeric = Number(value);
  const safeValue = Number.isFinite(numeric)
    ? Math.max(0, Math.min(numeric, maxAQI))
    : 0;

  const pointerPercent = (safeValue / maxAQI) * 100;

  return (
    <div>
      {/* Conditions Row */}
      <div style={{ display: "flex" }}>
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 12,
              fontWeight: "normal",
            }}
          >
            {seg.label}
          </div>
        ))}
      </div>

      {/* Bar */}
      <div style={{ position: "relative", display: "flex", height: 5, borderRadius:8}}>
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              backgroundColor: seg.color,
            }}
          />
        ))}
        {/* Pointer */}
        <div
          style={{
            position: "absolute",
            top: -2.5,
            left: `${pointerPercent}%`,
            width: 10,
            height: 10,
            background: "#fff",
            border: `2px solid #333333`,
           
            borderRadius: 5,
            transform: "translateX(-50%)",
            transition: "left 0.3s ease",
          }}
        />
      </div>

      {/* Numbers Row */}
      <div style={{ display: "flex", fontSize: 14 }}>
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{seg.start}</span>
            {i === segments.length - 1 && <span>{seg.end}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQualityBar;
