import WeatherApi from '../api/mockWeatherApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import {fetchWeather} from '../api/openWeatherApi';


export function loadWeatherSuccess(weather) {
  return {type: types.LOAD_WEATHER_SUCCESS, weather};
}

export function loadWeather() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return fetchWeather("London").then(weather => {
      console.log(weather);
      dispatch(loadWeatherSuccess(weather.list));
    }).catch(error => {
      throw(error);
    });
  };
}
