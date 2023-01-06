import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Logo from './images/logo.svg';

const Header = (props) => {
  return (
    <header className='flex items-center font-karla text-sm md:text-xl'>
      <img src={Logo} alt='Little Lemon Restaurant' className='p-4' />
      <Nav />
    </header>
  );
};

Header.propTypes = {};

export default Header;
