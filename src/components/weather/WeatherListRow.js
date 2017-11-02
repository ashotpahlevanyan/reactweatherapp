import React, {PropTypes} from 'react';
//import {Link} from 'react-router';

const WeatherListRow = ({weath}) => {
  return (
    <tr>
      <td>{weath.location.name}</td>
      <td>{weath.location.lat}</td>
      <td>{weath.location.long}</td>
      <td>{weath.current.temperature}</td>
      <td>{weath.current.skytext}</td>
      <td>{weath.current.date}</td>
      <td>{weath.current.feelslike}</td>
      <td>{weath.current.humidity}</td>
      <td>{weath.current.winddisplay}</td>
    </tr>
  );
};

WeatherListRow.propTypes = {
  weath: PropTypes.object.isRequired
};

export default WeatherListRow;
