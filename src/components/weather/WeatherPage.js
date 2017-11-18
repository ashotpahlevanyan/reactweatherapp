/*eslint-disable no-console*/

import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchForm from '../common/SearchForm';
import * as searchActions from '../../actions/searchActions';
import * as weatherActions from '../../actions/weatherActions';

class WeatherPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      city: "Yerevan",
      searchedCity: ""
    };

    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
  }

  handleSearchFormSubmit(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <SearchForm placeholder="Type Your Location"
                    defaultValue={this.state.searchedCity}
                    handleSearchFormSubmit={this.handleSearchFormSubmit}
        />
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
    actions : bindActionCreators(searchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
