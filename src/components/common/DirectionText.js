import React, {PropTypes} from 'react';

class DirectionText extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  calculateText(angle) {
    let calculatedText = "";
    if((angle >= 337.5 && angle < 360 ) || ( angle >= 0 && angle < 22.5 )) {
      calculatedText = "East";
    }
    if(angle >= 22.5 && angle < 67.5) {
      calculatedText = "North East";
    }
    if(angle >= 67.5 && angle < 112.5) {
      calculatedText = "North";
    }
    if(angle >= 112.5 && angle < 157.5) {
      calculatedText = "North West";
    }
    if(angle >= 157.5 && angle < 202.5) {
      calculatedText = "West";
    }
    if(angle >= 202.5 && angle < 247.5) {
      calculatedText = "South West";
    }
    if(angle >= 247.5 && angle < 292.5) {
      calculatedText = "South";
    }
    if(angle >= 292.5 && angle < 337.5 ) {
      calculatedText = "South East";
    }

    return calculatedText;
  }

  render () {
    const angle = this.props.angle;
    let calculatedText = this.calculateText(angle);
    return (
      <span>{calculatedText}</span>
    );
  }
}
DirectionText.propTypes = {
  angle: PropTypes.number.isRequired
};

export default DirectionText;
