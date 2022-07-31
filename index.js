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
