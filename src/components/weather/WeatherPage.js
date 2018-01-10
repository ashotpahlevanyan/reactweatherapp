import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';
import WeatherList from './WeatherList';
import WeatherDarkPage from './WeatherDarkPage';
import WeatherDarkPageHourly from './WeatherDarkPageHourly';
import Switch from '../common/Switch';
import WeatherHeader from './WeatherHeader';

class WeatherPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      city: "Bucharest",
      searchedCity: "Bucharest",
      weekWeather: [],
      checked : true
    };

    this.handleSwitchClick = this.handleSwitchClick.bind(this);
  }

  handleSwitchClick (event) {
    this.setState({
      checked : !this.state.checked
    });
  }

  render() {
    const {weather} = this.props;
    return(
      <div>
        {/*<WeatherDarkPageHourly />*/}
        <WeatherDarkPage />
        <WeatherHeader weather={weather} />
        <div className="switchContainer">
          <span>Daily</span>
          <Switch checked={false} shape="round" onClick={this.handleSwitchClick}/>
          <span>Hourly</span>
        </div>

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

