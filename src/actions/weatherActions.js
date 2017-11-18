import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import {fetchWeather} from '../api/openWeatherApi';


export function loadWeatherSuccess(weather) {
  return {type: types.LOAD_WEATHER_SUCCESS, weather};
}

export function loadWeather(cityId) {
  let city = (cityId) ? cityId: 616051; // Yerevan

  return dispatch => {
    dispatch(beginAjaxCall());
    return fetchWeather(city).then(weather => {
      console.log(weather);
      dispatch(loadWeatherSuccess(weather));
    }).catch(error => {
      throw(error);
    });
  };
}
