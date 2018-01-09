import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as weatherActions from '../../actions/weatherActions';

class WeatherDarkPageHourly extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    //const {weather} = this.props;
    return(
      <div className="container darkWeatherHourly">
        <div className="weatherWrapper">
          <div className="current">
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
          <div className="tableWrapper">
            <table className="table forecast">
              <thead>
                <tr className="mainHeader">
                  <th colSpan="9">Forecast</th>
                </tr>
                <tr>
                  <th>Date</th>
                  <th>00:00</th>
                  <th>03:00</th>
                  <th>06:00</th>
                  <th>09:00</th>
                  <th>12:00</th>
                  <th>15:00</th>
                  <th>18:00</th>
                  <th>21:00</th>
                </tr>
              </thead>
              <tbody>
                <tr className="day">
                  <td>
                    <h4 className="dayOfWeek">Tuesday</h4>
                    <h4 className="date">Jan 11, 2017</h4>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sunny"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-fog"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-rain-wind"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                </tr>
                <tr className="day">
                  <td>
                    <h4 className="dayOfWeek">Tuesday</h4>
                    <h4 className="date">Jan 12, 2017</h4>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sunny"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-fog"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-rain-wind"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                </tr>
                <tr className="day">
                  <td>
                    <h4 className="dayOfWeek">Tuesday</h4>
                    <h4 className="date">Jan 13, 2017</h4>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sunny"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-fog"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-rain-wind"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                </tr>
                <tr className="day">
                  <td>
                    <h4 className="dayOfWeek">Tuesday</h4>
                    <h4 className="date">Jan 14, 2017</h4>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sunny"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                    <div className="humidity">
                      <span><i className="wi wi-umbrella"></i>20 %</span>
                    </div>
                    <div className="wind">
                      <i className="wi wi-wind towards-23-deg"></i>18 m/s
                    </div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-fog"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-rain-wind"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                </tr>
                <tr className="day">
                  <td>
                    <h4 className="dayOfWeek">Tuesday</h4>
                    <h4 className="date">Jan 15, 2017</h4>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sunny"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-fog"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-rain-wind"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-day-sleet-storm"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                  <td>
                    <div className="sky"><i className="wi wi-solar-eclipse"></i></div>
                    <div className="temperature high">23<sup>o</sup>C</div>
                    <div className="temperature low">18<sup>o</sup></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDarkPageHourly;

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
