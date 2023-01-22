import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from './images/logo.svg';
import Hamburger from './images/icon_hamburger_menu.svg';

const Nav = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <a href='/'>
        <img src={Logo} alt='Little Lemon Restaurant' className='p-4' />
      </a>
      <nav>
        <section className='MOBILE-MENU flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <img src={Hamburger} alt="Hamburger menu" />
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className='absolute top-0 right-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='flex flex-col items-center justify-between min-h-[150px]'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/menu'>Menu</a>
              </li>
              <li>
                <a href='/reservations'>Reservations</a>
              </li>
              <li>
                <a href='/orderonline'>Order Online</a>
              </li>
              <li>
                <a href='/login'>Login</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className='DESKTOP-MENU hidden space-x-6 lg:flex'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/menu'>Menu</a>
          </li>
          <li>
            <a href='/reservations'>Reservations</a>
          </li>
          <li>
            <a href='/orderonline'>Order Online</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 50vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
};

Nav.propTypes = {};

export default Nav;
