import React, {PropTypes} from 'react';

const WeatherItem = ({weather}) => {

    return (
      <div>
        <label>Location</label>
      </div>
    );
};

WeatherItem.propTypes = {
  weather: PropTypes.object.isRequired
};

export default WeatherItem;
