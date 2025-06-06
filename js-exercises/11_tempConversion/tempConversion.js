const convertToCelsius = function (fahrenheit) {
  return roundToOneDP(((fahrenheit - 32) * 5) / 9);
};

const convertToFahrenheit = function (celsius) {
  return roundToOneDP((celsius * 9) / 5 + 32);
};

const roundToOneDP = function (num) {
  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
