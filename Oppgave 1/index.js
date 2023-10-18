//Oppgave 1

const tempInput = document.getElementById("tempInput")
const tofahrenheitbtn = document.getElementById("to-fahrenheit-btn")
const tocelsiusbtn = document.getElementById("to-celsius-btn")
const result = document.getElementById("result")

function convertToCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function convertToFahrenheit(temp) {
  return temp * (9 / 5) + 32;
}

tocelsiusbtn.addEventListener("click", function () {
  const temp = parseFloat(tempInput.value);
  const celsius = convertToCelsius(temp);
  result.textContent = `${temp} grader Fahrenheit tilsvarer ${celsius.toFixed(1)} grader Celsius.`;
});

tofahrenheitbtn.addEventListener("click", function () {
  const temp = parseFloat(tempInput.value);
  const fahrenheit = convertToFahrenheit(temp);
  result.textContent = `${temp} grader Celsius tilsvarer ${fahrenheit.toFixed(1)} grader Fahrenheit.`;
});