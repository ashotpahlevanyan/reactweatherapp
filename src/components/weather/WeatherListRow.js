import React, {PropTypes} from 'react';
//import {Link} from 'react-router';
import WeatherIcon from '../common/WeatherIcon';
import DirectionIcon from '../common/DirectionIcon';
import DirectionText from '../common/DirectionText';

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
      <td>{weath.dt_txt}</td>
      <td>{weath.main.temp}</td>
      <td>{weath.main.temp_max}</td>
      <td>{weath.main.temp_min}</td>
      <td>{weath.wind.deg} <DirectionIcon angle={weath.wind.deg} /><DirectionText angle={weath.wind.deg} /></td>
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
