import React from 'react';
import PropTypes from 'prop-types';
import Logo from './images/logo.svg';
import Nav from './Nav';

const Footer = () => {
  return (
    <footer>
      <div>
        <Nav />
      </div>
      <div>
        <h4>Links</h4>
        550, Wood Ave,<br />
        Newjersey<br /><br />

        Phone Number<br />
        Email
      </div>
      <div>
      <h4>Social Media</h4>
      550, Wood Ave,<br />
        Newjersey<br /><br />

        Phone Number<br />
        Email
        
      </div>
    </footer>
  );
};

export default Footer;
