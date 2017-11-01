import React, {PropTypes} from 'react';
import * as weatherActions from '../../actions/weatherActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class WeatherPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const weather = this.props;
    const weatherJson = JSON.stringify(weather);

    return(
      <div>
        <h2>The weather from weather-js API</h2>
        <div>{weatherJson}</div>
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

