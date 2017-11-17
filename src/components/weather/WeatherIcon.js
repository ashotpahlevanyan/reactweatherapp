import React, {PropTypes} from 'react';

class WeatherIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  calculateClass(icon) {
    let calculatedClass = "wi ";
    switch(icon) {
      case '01d':
        calculatedClass += "wi-day-sunny";
        break;
      case '01n':
        calculatedClass += "wi-night-clear";
        break;
      case '02d':
        calculatedClass += "wi-day-cloudy";
        break;
      case '02n':
        calculatedClass += "wi-night-cloudy";
        break;
      case '03d':
      case '03n':
        calculatedClass += "wi-cloud";
        break;
      case '04d':
      case '04n':
        calculatedClass += "wi-cloudy";
        break;
      case '09d':
        calculatedClass += "wi-day-showers";
        break;
      case '09n':
        calculatedClass += "wi-night-showers";
        break;
      case '10d':
        calculatedClass += "wi-day-rain";
        break;
      case '10n':
        calculatedClass += "wi-night-rain";
        break;
      case '11d':
        calculatedClass += "wi-day-thunderstorm";
        break;
      case '11n':
        calculatedClass += "wi-night-thunderstorm";
        break;
      case '13d':
        calculatedClass += "wi-day-snow";
        break;
      case '13n':
        calculatedClass += "wi-night-snow";
        break;
      case '50d':
        calculatedClass += "wi-day-fog";
        break;
      case '50n':
        calculatedClass += "wi-night-fog";
        break;
      default:
        calculatedClass += "wi-day-sunny";
    }
    return calculatedClass;
  }

  render () {
    const icon = this.props.icon;
    let calculatedClass = this.calculateClass(icon);
    return (
      <i className={calculatedClass}></i>
    );
  }
}
WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default WeatherIcon;
