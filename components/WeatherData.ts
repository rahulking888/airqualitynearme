// utils/WeatherData.ts

export async function WeatherData(lat: number, lon: number) {
  try {
    const apiKey = process.env.weatherkey; 
    if (!apiKey) {
      throw new Error("OpenWeather API key is missing");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=en`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
