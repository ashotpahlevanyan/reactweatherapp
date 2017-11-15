import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';
import WeatherList from './WeatherList';
import WeatherDarkPage from './WeatherDarkPage';
import Switch from '../common/Switch';

class WeatherPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {weather} = this.props;
    return(
      <div>
        <h2>The weather from weather-js API</h2>
        <h3>City: {weather.city.name}, {weather.city.country}, ID: {weather.city.id},
          Lat: {weather.city.coord.lat}, Lon: {weather.city.coord.lon}</h3>
        <div className="switchContainer">
          <span>Daily</span>
          <Switch checked={true} shape="round"/>
          <span>Hourly</span>
        </div>

        <WeatherList weather={weather.list} />

        <WeatherDarkPage />
      </div>

    );


  }
}

WeatherPage.propTypes = {
  weather: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(weatherActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);

