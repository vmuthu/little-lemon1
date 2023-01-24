import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

const ConfirmedBooking = (props) => {
  return (
    <article className='flex flex-col font-markazi m-4'>
      <p className='text-3xl'>Your booking is confirmed!</p>

      <a className='text-xl text-blue-600' onClick={props.handler} href='#'>
        Back to Reservations
      </a>
    </article>
  );
};

ConfirmedBooking.propTypes = {};

export default ConfirmedBooking;
