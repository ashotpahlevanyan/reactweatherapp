import React, {PropTypes} from "react";

class Switch extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checked: props.checked,
      shape: props.shape
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }

  render() {
    return (
      <label className="switch" onClick={this.onClick}>
        <input type="checkbox" checked={this.checked}/>
        <span className={"slider " + this.state.shape}></span>
      </label>
    );
  }
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  shape: PropTypes.string
};

export default Switch;

