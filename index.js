let currentTime = new Date();

let date = document.querySelector("#date");

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
date.innerHTML = `${day}, ${hours}:${minutes}`;

function enterCity(event) {
  event.preventDefault();

  let inputSearch = document.querySelector("#search-city");
  let city = inputSearch.value;

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${inputSearch.value}`;

  let apiKey = "346b39f6aa7acee58b3437a1fb89c2e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
}

let searchCity = document.querySelector("#enter-city");
searchCity.addEventListener("submit", enterCity);

let findCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", enterCity);

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let apiKey = "346b39f6aa7acee58b3437a1fb89c2e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  let temper = Math.round(response.data.main.temp);
  let descript = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let feel = Math.round(response.data.main.feels_like);
  let wind = response.data.wind.speed;

  let temperature = document.querySelector("#number");
  temperature.innerHTML = temper;
  let description = document.querySelector("#description");
  description.innerHTML = descript;
  let humiditymain = document.querySelector("#humidity");
  humiditymain.innerHTML = humidity;

  let feeling = document.querySelector("#feel");
  feeling.innerHTML = feel;
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = wind;
}

let currentButton = document.querySelector("#button");
currentButton.addEventListener("click", getLocation);
