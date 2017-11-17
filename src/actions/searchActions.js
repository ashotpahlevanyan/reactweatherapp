import * as types from './actionTypes';

export function search(value) {
  return {type: types.SEARCH, value};
}
