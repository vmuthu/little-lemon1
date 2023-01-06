import React from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
  return (
    <nav>
      <ul className='flex'>
        <li className='mx-1 md:mx-6'>
          <a>Home</a>
        </li>
        <li className='mr-1 md:mr-6'>
          <a>About</a>
        </li>
        <li className='mr-1 md:mr-6'>
          <a>Menu</a>
        </li>
        <li className='mr-1 md:mr-6'>
          <a>Reservations</a>
        </li>
        <li className='mr-1 md:mr-6'>
          <a>Order Online</a>
        </li>
        <li className='mr-1 md:mr-6'>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
