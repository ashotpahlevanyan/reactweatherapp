import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';
import WeatherList from './WeatherList';
import WeatherDarkPage from './WeatherDarkPage';
import Switch from '../common/Switch';
import WeatherHeader from './WeatherHeader';

class WeatherPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      city: "Bucharest",
      searchedCity: "Bucharest",
      weekWeather: []
    };
  }

  render() {
    const {weather} = this.props;
    return(
      <div>
        <WeatherHeader weather={weather} />
        <div className="switchContainer">
          <span>Daily</span>
          <Switch checked shape="round"/>
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

