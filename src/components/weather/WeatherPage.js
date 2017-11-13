import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';
import WeatherList from './WeatherList';
import WeatherDarkPage from './WeatherDarkPage';

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
        {/*<div className="weatherWidget clearfix">
          <div className="leftSide">
            <div className="date">Friday,</div>
            <div className="date">August 23 rd</div>
            <span className="sky"></span>
          </div>
          <div className="rightSide">
            <div className="temperature celsius">12<span className="unit"><sup>o</sup>C</span></div>
            <div className="location">Paris, France</div>
            <div className="wind">
              <span className="windDirection west"></span>
              <span className="windSpeed">12 mph</span>
            </div>
          </div>
          <ul className="forecast">
            <li>
              <span className="day">Monday</span>
              <span className="cloud rainy"></span>
              <span className="temperature">15<sup>o</sup></span>
            </li>
            <li>
              <span className="day">Tuesday</span>
              <span className="cloud sunny"></span>
              <span className="temperature">16<sup>o</sup></span>
            </li>
            <li>
              <span className="day">Wednesday</span>
              <span className="cloud cloudy"></span>
              <span className="temperature">13<sup>o</sup></span>
            </li>
            <li>
              <span className="day">Thursday</span>
              <span className="cloud rainy"></span>
              <span className="temperature">12<sup>o</sup></span>
            </li>
            <li>
              <span className="day">Friday</span>
              <span className="cloud overrcast"></span>
              <span className="temperature">18<sup>o</sup></span>
            </li>
          </ul>
        </div>*/}
        {/*<div className="weatherContainer">
          <form className="form">
            <fieldset className="searchFields">
              <div className="form-group">
                <i className="glyphicon glyphicon-search"></i>
                <input type="text" className="form-control search" placeholder="Type City to get Weather"/>
              </div>
              <ul className="suggestedLocations">
                <li>Cities</li>
                <li>Yerevan</li>
                <li>New York</li>
                <li>Montevideo</li>
                <li>Stockholm</li>
              </ul>
              <button type="submit" className="btn btn-primary searchButton">Search</button>
            </fieldset>
          </form>
        </div>*/}
        <WeatherDarkPage />
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

