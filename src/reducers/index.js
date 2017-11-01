import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import weather from './weatherReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  weather,
  ajaxCallsInProgress
});

export default rootReducer;
