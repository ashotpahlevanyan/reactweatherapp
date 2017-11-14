
let citiesFile = '../data/city.list.json';

let fetchCities = function () {
  let data = require(`json!..{citiesFile}`);
  return data;
};

export {fetchCities};
