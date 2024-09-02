// ui.js
export function updateUI(data) {
  const locationElement = document.getElementById("location");
  const temperatureElement = document.getElementById("temperature");

  locationElement.textContent = data.location;
  temperatureElement.textContent = `${data.temperature} °C`;
}
