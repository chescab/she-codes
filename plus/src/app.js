/* 
🙀 Bonus Feature
Display a fake temperature (i.e 17) in Celsius and add a link to convert it to 
Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. 
When clicking on Celsius, it should convert it back to Celsius.*/


function currentTime() {
  let currentTime = new Date();
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  let fulltime = currentTime.getHours() + ':' + minutes;

  return fulltime;
}

let timeNow = document.querySelector('#time-now');
timeNow.innerHTML = `${currentTime()}`;

function formatDate() {
  let now = new Date();
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  day = days[now.getDay()];

  return day;
}

let currentDay = document.querySelector('#day');
currentDay.style.fontColor = '#EAD1CC';
currentDay.innerHTML = `${formatDate()}`;

let currentCity = document.querySelector('#search-form');
currentCity.addEventListener('submit', function searchCity(e) {
  e.preventDefault();
  let searchInput = document.querySelector('#search-input');
  let city = document.querySelector('#city');
  city.innerHTML = searchInput.value;
});


let fahrenheit = document.querySelector('#fahrenheit');
fahrenheit.addEventListener('click', function convertToFahrenheit(e) {
  e.preventDefault();
  let temperatureElement = document.querySelector('#temperature');
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9 / 5 + 32));
});