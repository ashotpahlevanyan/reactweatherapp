import {combineReducers} from 'redux';
import weather from './weatherReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  weather,
  ajaxCallsInProgress
});

export default rootReducer;
