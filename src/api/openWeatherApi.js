let API_KEY = "468f937be26c4d91fe63cc0f4b7c0c12";
let apiUrl = "http://api.openweathermap.org/data/2.5/";
let cityId = 616051;
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

let fetchWeather = function(city) {
  let weeklyWeatherUrl =
    `${apiUrl}/forecast?id=${cityId}&units=metric&cnt=7&APPID=${API_KEY}`;

  return fetch(weeklyWeatherUrl).then((response) => response.json());

};

export {fetchWeather};
