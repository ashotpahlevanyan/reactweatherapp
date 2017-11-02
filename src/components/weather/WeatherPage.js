import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';
import WeatherList from './WeatherList';

class WeatherPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {weather} = this.props;

    return(
      <div>
        <h2>The weather from weather-js API</h2>
        <WeatherList weather={weather} />
      </div>
    );
  }
}

WeatherPage.propTypes = {
  weather: PropTypes.array.isRequired
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

