import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Logo from './logo.png';

const Header = (props) => {
  return (
    <header>
      <img src={Logo} alt='Little Lemon Restaurant' />
      <Nav />
    </header>
  );
};

Header.propTypes = {};

export default Header;
