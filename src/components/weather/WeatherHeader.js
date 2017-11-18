import React, {PropTypes} from "react";
import {connect} from 'react-redux';

class WeatherHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {weather} = this.props;
    return(
      <div className="headerWrapper">
        <h2>The weather from weather-js API, Location Information</h2>
        <table className="table">
          <tbody>
          <tr>
            <td>City</td>
            <td>{weather.city.name}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{weather.city.country}</td>
          </tr>
          <tr>
            <td>City ID</td>
            <td>{weather.city.id}</td>
          </tr>
          <tr>
            <td>Lat</td>
            <td>{weather.city.coord.lat}</td>
          </tr>
          <tr>
            <td>Lon</td>
            <td>{weather.city.coord.lon}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

WeatherHeader.propTypes = {
  weather: PropTypes.objectOf({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      coord: PropTypes.objectOf({
        lat: PropTypes.string.isRequired,
        lon: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHeader);
