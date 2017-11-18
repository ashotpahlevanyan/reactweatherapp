import React from "react";
import {Link} from "react-router";

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Weather Application</h1>
        <p>React Redux and React Router in ES6 for ultra responsive Weather Application
          utilizing OpenWeatherMap api data </p>
        <Link to="weather" className="btn btn-primary btn-lg">Go To Weather</Link>
      </div>
    );
  }
}

export default HomePage;

