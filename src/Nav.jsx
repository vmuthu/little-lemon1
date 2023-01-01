import React from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
