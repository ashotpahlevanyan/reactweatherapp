import WeatherApi from '../api/mockWeatherApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';


export function loadWeatherSuccess(weather) {
  return {type: types.LOAD_WEATHER_SUCCESS, weather};
}

export function loadWeather() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return WeatherApi.getWeather().then(weather => {
      dispatch(loadWeatherSuccess(weather));
    }).catch(error => {
      throw(error);
    });
  };
}
