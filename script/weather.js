const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "d9ed76e4a2f946894e03bc2bedb91ba4";

weatherForm.addEventListener("submit", async event => {

  event.preventDefault();

  const city = cityInput.value;

  if(city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    }
    catch (error) {
      console.log(error);
      displayError(error)
    }

  } else {
    displayError("Please enter a city");
  }

});

async function getWeatherData(city) {

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  if(!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();

}

function displayWeatherInfo(data) {

  const {name: city,
         main: {temp, humidity}, 
         weather: [{description, id}]} = data;
  
  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const discriptionDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${((temp - 273.15)*(9/5) + 32).toFixed(1)}°F`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  discriptionDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList = "cityDisplay display-6 fw-bold mb-4";
  tempDisplay.classList = "tempDisplay display-6 fw-bold m-0 mb-3";
  humidityDisplay.classList = "humidityDisplay m-0 fw-bold mb-2";
  discriptionDisplay.classList = "discriptionDisplay m-0 fst-italic h3 fw-bold mb-2";
  weatherEmoji.classList = "weatherEmoji m-0 display-1";

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(discriptionDisplay);
  card.appendChild(weatherEmoji);

  // console.log(data);

}

function getWeatherEmoji(weatherId) {
  
  switch(true) {
    case(weatherId >= 200 && weatherId < 300):
      return "⛈️";
    case(weatherId >= 300 && weatherId < 400):
      return "🌧️";
    case(weatherId >= 500 && weatherId < 600):
      return "🌧️";
    case(weatherId >= 600 && weatherId < 700):
      return "❆";
    case(weatherId >= 600 && weatherId < 700):
      return "🌪️";
    case(weatherId === 800):
      return "☀️";
    case(weatherId >= 801 && weatherId < 810):
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(message) {

  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList = ("errorDisplay m-0 h5 fw-bold opacity-75");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}