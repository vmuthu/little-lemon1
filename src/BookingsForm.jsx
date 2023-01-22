import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

const BookingsForm = ({ onBookingChangeHandler, availableList }) => {
  const [bookingDate, setBookingDate] = React.useState('');
  const [bookingTime, setBookingTime] = React.useState('');
  const [occasion, setOccation] = React.useState('');
  const [guests, setGuests] = React.useState(0);
  const [enableReservation, setEnableReservation] = useState(false);
  function handleDateChange(e) {
    const dateValue = e.target.value;
    setBookingDate(dateValue); // state variable updated here
  }

  function handleTimeChange(e) {
    const timeValue = e.target.value;
    setBookingTime(timeValue); // state variable updated here
  }

  function handleGuestsChange(e) {
    const guestsVal = e.target.value;
    setGuests(guestsVal); // state variable updated here
  }

  function handleOccasion(e) {
    const occasionValue = e.target.value;
    setOccation(occasionValue); // state variable updated here
  }

  function submitReservation(e) {
    e.preventDefault();
    onBookingChangeHandler(bookingDate, bookingTime, guests, occasion);
    setBookingDate('');
    setBookingTime('');
    setGuests(0);
    setOccation('');
  }
  useEffect(() => {
    updateButton(bookingDate, bookingTime, occasion, guests);
  }, [bookingDate, bookingTime, occasion, guests]);

  function updateButton(bkdate, bktime, ocsion, gsts) {
    console.log(availableList);
    const foundBooking = availableList?.filter(
      (bk) => bk.bookingDate === bkdate && 
      bk.bookingTimes.indexOf(bktime) > -1
    );
    const enableButton =
      (foundBooking && foundBooking.length > 0) & (ocsion !== '') &&
      gsts > 0;
    setEnableReservation(enableButton);
  }

  return (
    <article className='w-[50%] flex flex-col items-center text-sm md:items-start md:px-20 md:text-xl mx-4'>
      <h2 className='font-markazi text-4xl pb-2 md:text-5xl md:pb-4'>
        Book Now
      </h2>
      <form className='flex flex-col gap-2'>
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          aria-label='Choose date'
          value={bookingDate}
          className='input-ctl'
          onChange={(e) => handleDateChange(e)}
          data-testid="test-booking-date"
        />
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          className='input-ctl'
          value={bookingTime}
          onChange={(e) => handleTimeChange(e)}
          data-testid="test-booking-time"
        >
          <option value='0'>--Select Time--</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='4'
          min='0'
          max='10'
          value={guests}
          id='guests'
          aria-label='Number of guests'
          className='input-ctl'
          onChange={(e) => handleGuestsChange(e)}
          data-testid="test-booking-guests"
        />
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          className='input-ctl'
          value={occasion}
          onChange={(e) => handleOccasion(e)}
          data-testid="test-booking-occasion"
        >
          <option value='0'>--Select Occasion--</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type='submit'
          value='Make Your reservation'
          className='btn-primary w-64'
          disabled={!enableReservation}
          onClick={(e) => submitReservation(e)}
          data-testid="test-booking-reserve"
        />
      </form>
    </article>
  );
};

// BookingsForm.propTypes = {
//     bookingDate: Date,
//     bookingTime: String,
//     guests: Number,
//     occasion: String

// };

export default BookingsForm;
