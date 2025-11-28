

export type CityInfo = {
  description: string;
  pollutionInsight: string;
  image?: string;
};

export const cityData: Record<string, CityInfo> = {
  //---------------------United states-----------------------------------------
  //Illinois
  orland_park: {
  description:
    "Orland Park is a peaceful suburban area in Illinois, southwest of Chicago, known for its calm neighborhoods, green parks, and lively shopping and dining spots. People enjoy a balanced lifestyle here, with nature trails, sports complexes, and forest preserves offering plenty of outdoor activities across all four seasons. Winters are cold with snowfall, summers are warm and humid, and spring and autumn bring refreshing weather that makes the village scenic and vibrant.",
  pollutionInsight:
    "Air quality in Orland Park stays mostly in a comfortable range, but certain factors can influence it from time to time. Traffic from nearby highways, heating during the winter months, and industrial activity from the Chicago region can lead to a rise in pollution levels. Seasonal pollen and humidity may also affect breathing comfort. Natural breezes often help clear the air, yet mornings and evenings during peak traffic or still weather can show slightly higher AQI readings.",
},
}