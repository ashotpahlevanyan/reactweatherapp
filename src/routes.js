import React from "react";
import {Route, IndexRoute} from "react-router";
import App from './components/App';
import HomePage from './components/home/HomePage';
// import AboutPage from './components/about/AboutPage';
// import CoursesPage from './components/course/CoursesPage';
// import ManageCoursePage from './components/course/ManageCoursePage'; // eslint-disable-line import/no-named-as-default
import WeatherPage from './components/weather/WeatherPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="weather" component={WeatherPage} />
  </Route>
);
