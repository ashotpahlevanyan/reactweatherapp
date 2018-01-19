import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';
import WeatherList from './list/WeatherList';
import WeatherDarkPageHourly from './dark/WeatherDarkPageHourly';

class WeatherPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const {weather} = this.props;

    return(
      <div>
        <WeatherDarkPageHourly />
        <WeatherList weather={weather.list} />
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

