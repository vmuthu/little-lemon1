import React from 'react';
import PropTypes from 'prop-types';

const BookingsList = (props) => {
  return (
    <article className='font-markazi text-lg pb-2 md:text-xl'>
      <h2 className='font-markazi text-4xl pb-2 md:text-5xl md:pb-4'>
        Existing Bookings
      </h2>
      {(!props.bookings.booked || props.bookings.booked.length === 0) && (
        <span>No bookings found</span>
      )}
      {props.bookings.booked && props.bookings.booked.length > 0 && (
        <table aria-label='List of existing bookings' data-testid="test-bookings-list">
          <thead className='font-markazi text-xl md:text-2xl'>
            <tr>
              <td>Date</td>
              <td>Time</td>
              <td>Guests</td>
              <td>Occasion</td>
            </tr>
          </thead>
          <tbody>
            {props.bookings.booked.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.bookingDate}</td>
                  <td>{item.bookingTime}</td>
                  <td>{item.guests}</td>
                  <td>{item.occasion}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </article>
  );
};

export default BookingsList;
