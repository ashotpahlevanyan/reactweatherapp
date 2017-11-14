import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/weather" activeClassName="active">Weather</Link>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};
export default Header;
