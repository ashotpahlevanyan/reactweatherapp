import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.location, action) {
  switch (action.type) {
    case types.SEARCH_LOCATION:
      return action.location;

    default:
      return state;
  }
}
