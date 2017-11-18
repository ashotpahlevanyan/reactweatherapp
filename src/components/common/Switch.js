import React, {PropTypes} from "react";

const Switch = ({checked, onClick, shape }) => {
  return (
    <label className="switch" onClick={onClick}>
      <input type="checkbox" checked={checked}/>
      <span className={"slider " + shape}></span>
    </label>
  );
};

Switch.propTypes = {
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  shape: PropTypes.string
};

export default Switch;
