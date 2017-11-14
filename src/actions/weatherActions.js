import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import {fetchWeather} from '../api/openWeatherApi';

let cityId = 616051;
export function loadWeatherSuccess(weather) {
  return {type: types.LOAD_WEATHER_SUCCESS, weather};
}

export function loadWeather() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return fetchWeather(cityId).then(weather => {
      console.log(weather);
      dispatch(loadWeatherSuccess(weather));
    }).catch(error => {
      throw(error);
    });
  };
}
