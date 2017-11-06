import React, {PropTypes} from 'react';
import WeatherListRow from './WeatherListRow';

const WeatherList = ({weather}) => {
  return(
    <table className="table">
      <thead>
      <tr>
        <td>Day Time Hour</td>
        <td>Temperature</td>
        <td>Max Temperature</td>
        <td>Min Temperature</td>
        <td>Wind direction</td>
        <td>Wind Speed</td>
        <td>Sky Text</td>
        <td>Humidity</td>
        <td>Sky</td>
        <td>Sky Icon</td>
      </tr>
      </thead>
      <tbody>
      {weather.map(weath =>
        <WeatherListRow key={weath.dt_txt} weath={weath} />
      )}
      </tbody>
    </table>
  );
};

WeatherList.propTypes = {
  weather: PropTypes.array.isRequired
};

export default WeatherList;
