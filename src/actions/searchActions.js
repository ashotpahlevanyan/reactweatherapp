/* eslint-disable no-console */

import * as types from './actionTypes';
import {loadWeather} from './weatherActions';

export function searchLocationSubmit(location) {
  return {type: types.SEARCH_LOCATION, location};
}

export function searchLocation(location) {
  loadWeather(location);
}
