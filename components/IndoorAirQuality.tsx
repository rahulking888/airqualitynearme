
type qualityProps = {
  aqi: number;
  place: string;
 
};

export default function IndoorAirQuality({
  aqi,
  place
}: qualityProps) {
  const paraText =
    aqi <= 50
      ? `Indoor air quality in homes and offices in ${place} is generally good. The air tends to be clean fresh and safe to breathe. Maintaining this quality is important, regular ventilation by opening windows keeping spaces dust free using air purifiers and adding indoor plants can help sustain a healthy and comfortable indoor environment. Even when air quality is good, factors like stagnant ventilation pet dander and built up chemicals from household products can slowly affect indoor air over time. Following simple preventive practices ensures a safe and comfortable environment for everyone.`
      : aqi <= 100
      ? `Indoor air quality in homes and offices in ${place} can be moderate. While the air is usually acceptable, sensitive individuals such as children the elderly or people with respiratory issues may experience mild discomfort. Indoor air can be influenced by stagnant ventilation pet dander cooking smoke accumulated dust and built up chemicals from paints cleaning products or furniture. To improve indoor air, ensure regular airflow by opening windows minimize the use of chemical cleaners use air purifiers and maintain clean surfaces. Being mindful of these factors can help protect the health and comfort of everyone indoors.`
      : `Indoor air quality in homes and offices in ${place} may be poor at times. Prolonged exposure to indoor pollutants can affect health particularly for sensitive groups causing respiratory discomfort allergies fatigue or other issues. Common contributors include stagnant ventilation pet dander cooking fumes mold accumulated dust and built up chemicals from household products. To reduce indoor air pollution, minimize time in poorly ventilated areas use high quality air purifiers clean surfaces regularly and ensure adequate airflow in every room. Taking these steps can help create a safer and healthier indoor environment for everyone.`;

  return (
    <div >
      <p className="mt-4">{paraText}</p>
     
    </div>
  );
}
