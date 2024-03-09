const num = document.querySelector('#num');
const celcius = document.querySelector('#celcius');
const fahrenheit = document.querySelector('#fahrenheit');
const answer = document.querySelector('#answer');
const mySubmit = document.querySelector('#mySubmit');

// C = (F - 32) (5/9)
// F = C(9/5) + 32

function celciusToFahrenheit(celcius) {
  celcius = Number(celcius);
  let answer = (celcius * (9/5)) + 32;
  return answer.toFixed(1);
}

function fahrenheitToCelsius(fahrenheit) {
  fahrenheit = Number(fahrenheit);
  let answer = (fahrenheit - 32) * (5/9)
  return answer.toFixed(1);
}

mySubmit.addEventListener("click", () => {

  if (!num.value) {
    window.alert("ENTER A NUMBER!");
  } else if (celcius.checked) {
    answer.textContent = celciusToFahrenheit(num.value) + "°F";
  } else if (fahrenheit.checked) {
    answer.textContent = fahrenheitToCelsius(num.value) + "°C";
  } else {
    window.alert("SELECT CONVERSION!");
  }
});