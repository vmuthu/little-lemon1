import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const Header = (props) => {
  return (
    <header className='flex items-center font-karla text-sm md:text-xl'>
      <Nav />
    </header>
  );
};

Header.propTypes = {};

export default Header;
