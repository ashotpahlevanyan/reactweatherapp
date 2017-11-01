import delay from './delay';

// var weather = require('weather-js');
//
// // Options:
// // search:     location name or zipcode
// // degreeType: F or C
//
// let actualWeather;
// weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
//   if(err) console.log(err);
//
//   console.log(JSON.stringify(result, null, 2));
//   actualWeather = JSON.stringify(result, null, 2);
// });


const weather = [
  {
    "location": {
      "name": "San Francisco, CA",
      "lat": "37.777",
      "long": "-122.42",
      "timezone": "-7",
      "alert": "",
      "degreetype": "F",
      "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
    },
    "current": {
      "temperature": "70",
      "skycode": "32",
      "skytext": "Sunny",
      "date": "2017-03-14",
      "observationtime": "13:15:00",
      "observationpoint": "San Francisco, California",
      "feelslike": "70",
      "humidity": "59",
      "winddisplay": "3 mph West",
      "day": "Tuesday",
      "shortday": "Tue",
      "windspeed": "3 mph",
      "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/32.gif"
    },
    "forecast": [
      {
        "low": "52",
        "high": "69",
        "skycodeday": "31",
        "skytextday": "Clear",
        "date": "2017-03-13",
        "day": "Monday",
        "shortday": "Mon",
        "precip": ""
      },
      {
        "low": "52",
        "high": "70",
        "skycodeday": "34",
        "skytextday": "Mostly Sunny",
        "date": "2017-03-14",
        "day": "Tuesday",
        "shortday": "Tue",
        "precip": "10"
      },
      {
        "low": "56",
        "high": "63",
        "skycodeday": "26",
        "skytextday": "Cloudy",
        "date": "2017-03-15",
        "day": "Wednesday",
        "shortday": "Wed",
        "precip": "20"
      },
      {
        "low": "50",
        "high": "64",
        "skycodeday": "28",
        "skytextday": "Mostly Cloudy",
        "date": "2017-03-16",
        "day": "Thursday",
        "shortday": "Thu",
        "precip": "10"
      },
      {
        "low": "53",
        "high": "67",
        "skycodeday": "32",
        "skytextday": "Sunny",
        "date": "2017-03-17",
        "day": "Friday",
        "shortday": "Fri",
        "precip": "10"
      }
    ]
  }
];

class WeatherApi {
  static getWeather() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], weather));
      }, delay);
    });
  }
}

export default WeatherApi;


