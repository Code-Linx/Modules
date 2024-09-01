// app.js
import { getWeather } from "./weather.js";
import { updateUI } from "./ui.js";

async function init() {
  const weatherData = await getWeather("New York");
  updateUI(weatherData);
}

init();
