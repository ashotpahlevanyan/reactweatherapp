import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import SearchForm from '../common/SearchForm';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';

class WeatherDarkPage extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }
  onFormSubmit(event) {
    console.log("form submitted");
  }
  render() {
    //const {weather} = this.props;
    return(
      <div className="container darkWeather">
        <h1 className="header">Dark Weather Application</h1>
        {/*<form className="form">*/}
          {/*<input type="text" placeholder="Find your location" className="search"/>*/}
          {/*<button type="submit" className="buttonPrimary">Find</button>*/}
        {/*</form>*/}
        <SearchForm value="Yerevan" onSubmit={this.onFormSubmit}/>
        <div className="weatherWrapper clearfix">
          <div className="current pull-left">
            <h4 className="currentHeader clearfix">
              <span className="day pull-left">Monday</span>
              <span className="date pull-right">6 Oct</span>
            </h4>
            <div className="content">
              <div className="location">New York</div>
              <div className="weatherData">
                <div className="temperature">23 <sup>o</sup>C</div>
                <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
              </div>
              <ul className="otherData">
                <li><i className="wi wi-umbrella"></i>20%</li>
                <li><i className="wi wi-strong-wind"></i>18km/h</li>
                <li><i className="direction wi wi-wind-direction"></i>East</li>
              </ul>
            </div>
          </div>
          <ul className="forecast pull-right week">
            <li>
              <h4 className="currentHeader">Tuesday</h4>
              <div className="sky"><i className="wi wi-day-sunny"></i></div>
              <div className="temperature high">23<sup>o</sup>C</div>
              <div className="temperature low">18<sup>o</sup></div>
            </li>
            <li>
              <h4 className="currentHeader">Wednesday</h4>
              <div className="sky"><i className="wi wi-day-fog"></i></div>
              <div className="temperature high">23<sup>o</sup>C</div>
              <div className="temperature low">18<sup>o</sup></div>
            </li>
            <li>
              <h4 className="currentHeader">Thursday</h4>
              <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
              <div className="temperature high">23<sup>o</sup>C</div>
              <div className="temperature low">18<sup>o</sup></div>
            </li>
            <li>
              <h4 className="currentHeader">Friday</h4>
              <div className="sky"><i className="wi wi-day-rain-wind"></i></div>
              <div className="temperature high">23<sup>o</sup>C</div>
              <div className="temperature low">18<sup>o</sup></div>
            </li>
            <li>
              <h4 className="currentHeader">Saturday</h4>
              <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
              <div className="temperature high">23<sup>o</sup>C</div>
              <div className="temperature low">18<sup>o</sup></div>
            </li>
            <li>
              <h4 className="currentHeader">Sunday</h4>
              <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
              <div className="temperature high">23<sup>o</sup>C</div>
              <div className="temperature low">18<sup>o</sup></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WeatherDarkPage;

// WeatherDarkPage.propTypes = {
//   weather: PropTypes.array.isRequired
// };
//
// function mapStateToProps(state, ownProps) {
//   return {
//     weather: state.weather
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions : bindActionCreators(weatherActions, dispatch)
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(WeatherDarkPage);
