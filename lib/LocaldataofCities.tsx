export type CityInfo = {
  city_feature: string;
  climate_description: string;
  pollution_cause: string;
  local_factor: string;
  image?: string; // optional
};

export const cityData: Record<string, CityInfo> = {
  westminster: {
  city_feature: "suburban community with proximity to Denver and the mountain foothills",
  climate_description: "a semi arid climate with cold winters, warm summers, and high elevation",
  pollution_cause: "vehicle emissions, regional ozone formation, and wildfire smoke during dry seasons",
  local_factor: "elevation induced temperature inversions, low humidity, and seasonal snowmelt stagnation",
  image: "/air-quality/westminster.webp",
},
  delhi: {
    city_feature: "busy roads and industrial zones",
    climate_description: "extreme temperature variation",
    pollution_cause: "outdoor smog and dust entering homes",
    local_factor: "outdoor PM2.5 and seasonal smog",
  },
  mumbai: {
    city_feature: "coastal climate and dense population",
    climate_description: "high humidity throughout the year",
    pollution_cause: "sea salt particles and vehicle emissions",
    local_factor: "humidity and mold formation",
  },
  jaipur: {
    city_feature: "dry weather and tourist attractions",
    climate_description: "arid conditions",
    pollution_cause: "sand dust and poor ventilation",
    local_factor: "dust storms and temperature swings",
  },
};
