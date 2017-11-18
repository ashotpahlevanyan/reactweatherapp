import {combineReducers} from 'redux';
import weather from './weatherReducer';
import location from './searchReducer';

const rootReducer = combineReducers({
  weather,
  location
});

export default rootReducer;
