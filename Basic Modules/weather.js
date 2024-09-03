// weather.js
export async function getWeather(location) {
  const response = await fetch(
    `https://api.example.com/weather?location=${location}`
  );
  const data = await response.json();
  return data;
}
