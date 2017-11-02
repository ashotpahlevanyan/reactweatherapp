import React, {PropTypes} from 'react';
import WeatherListRow from './WeatherListRow';

const WeatherList = ({weather}) => {
  return(
    <table className="table">
      <thead>
      <tr>
        <th>Location</th>
        <th>Lat</th>
        <th>Long</th>
        <th>Temperature</th>
        <th>Sky text</th>
        <th>Date</th>
        <th>Feels like</th>
        <th>Humidity</th>
        <th>Wind</th>
      </tr>
      </thead>
      <tbody>
      {weather.map(weath =>
        <WeatherListRow key={weath.location.name} weath={weath} />
      )}
      </tbody>
    </table>
  );
};

WeatherList.propTypes = {
  weather: PropTypes.array.isRequired
};

export default WeatherList;
