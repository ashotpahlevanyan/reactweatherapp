import React, {PropTypes} from 'react';
//import {Link} from 'react-router';
import WeatherIcon from './WeatherIcon';

function getDate(dateString) {
  let dateArr = dateString.split(' ');
  return {
    date: dateArr[0],
    time: dateArr[1].substr(0,5)
  };
}

const WeatherListRow = ({weath}) => {
  return (
    <tr>
      {/*<td>{weath.location.name}</td>
      <td>{weath.location.lat}</td>
      <td>{weath.location.long}</td>
      <td>{weath.current.temperature}</td>
      <td>{weath.current.skytext}</td>
      <td>{weath.current.date}</td>
      <td>{weath.current.feelslike}</td>
      <td>{weath.current.humidity}</td>
      <td>{weath.current.winddisplay}</td>*/}
      {/*<td>{weath.city.id}</td>*/}
      {/*<td>{weath.city.name}</td>*/}
      {/*<td>{weath.city.country}</td>*/}
      <td>{getDate(weath.dt_txt).date}</td>
      <td>{weath.main.temp}</td>
      <td>{weath.main.temp_max}</td>
      <td>{weath.main.temp_min}</td>
      <td>{weath.wind.deg}</td>
      <td>{weath.wind.speed}</td>
      <td>{weath.weather[0].main}</td>
      <td>{weath.main.humidity}</td>
      <td>{weath.weather[0].description}</td>
      <td><WeatherIcon icon ={weath.weather[0].icon}/></td>
    </tr>
  );
};

WeatherListRow.propTypes = {
  weath: PropTypes.object.isRequired
};

export default WeatherListRow;
