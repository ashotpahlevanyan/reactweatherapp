import React, {PropTypes} from 'react';

class WindDirectionIcon extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  calculateClass(angle) {
    let calculatedClass = "wi wi-wind ";
    calculatedClass += "from-" + Math.round(angle) + "-deg";
    return calculatedClass;
  }

  render () {
    const angle = this.props.angle;
    let calculatedClass = this.calculateClass(angle);
    return (
      <i className={calculatedClass}></i>
    );
  }
}
WindDirectionIcon.propTypes = {
  angle: PropTypes.number.isRequired
};

export default WindDirectionIcon;
