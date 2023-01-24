import React from 'react';
import { submitAPI } from './api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const BookingsForm = ({
  onDateChangeHandler,
  onBookingUpdateHandler,
  availableList,
}) => {
  const [bookingDate, setBookingDate] = React.useState('');
  const [bookingTime, setBookingTime] = React.useState('');
  const [occasion, setOccation] = React.useState('');
  const [guests, setGuests] = React.useState(0);
  const [enableReservation, setEnableReservation] = useState(false);
  const [dateErrors, setDateErrors] = useState('');
  const [guestErrors, setGuestErrors] = useState('');
  const [timeErrors, setTimeErrors] = useState('');
  const [occasionErrors, setOccasionErrors] = useState('');
  const [dateTouched, setDateTouched] = useState(false);
  const [timeTouched, setTimeTouched] = useState(false);
  const [occasionTouched, setOccasionTouched] = useState(false);
  const [guestTouched, setGuestTouched] = useState(false);

  function handleValidations() {
    var todayDate = new Date(); //Today Date
    todayDate.setHours(0);
    todayDate.setMinutes(0);
    todayDate.setSeconds(0);
    todayDate.setMilliseconds(0);
    const selectedDateMs = Date.parse(bookingDate);
    const selectedDate = new Date(0);
    selectedDate.setUTCMilliseconds(selectedDateMs);
    // selectedDate.setMinutes(1);
    // console.log('Today:', todayDate);
    // console.log('Selected:', selectedDate);
    if (dateTouched) {
      if (selectedDate < todayDate) {
        setDateErrors('Date should be in future');
        setEnableReservation(false);
      } else {
        setDateErrors('');
        onDateChangeHandler(bookingDate);
        setEnableReservation(true);
      }
    }

    if (timeTouched) {
      if (
        !bookingTime ||
        bookingTime === '' ||
        bookingTime === '--Select Time--' ||
        bookingTime === "0"
      ) {
        setTimeErrors('Time should be selected');
        setEnableReservation(false);
      } else {
        setTimeErrors('');
        setEnableReservation(true);
      }
    }
    if (guestTouched) {
      if (guests <= 1) {
        setGuestErrors('Guests should be more than 1');
        setEnableReservation(false);
      } else {
        setGuestErrors('');
        setEnableReservation(false);
      }
    }
    if (occasionTouched) {
      if (
        !occasion ||
        occasion === '' ||
        occasion === '--Select Occasion--' ||
        occasion === "0"
      ) {
        setOccasionErrors('Please choose occasion');
        setEnableReservation(false);
      } else {
        setOccasionErrors('');
        setEnableReservation(true);
      }
    }
  }

  function handleDateChange(e) {
    const dateValue = e.target.value;
    setBookingDate(dateValue); // state variable updated here
    setDateTouched(true);
    handleValidations();
  }

  function handleTimeChange(e) {
    const timeValue = e.target.value;
    setBookingTime(timeValue); // state variable updated here
    setTimeTouched(true);
    handleValidations();
  }

  function handleGuestsChange(e) {
    const guestsVal = e.target.value;
    setGuests(guestsVal); // state variable updated here
    setGuestTouched(true);
    handleValidations();
  }

  function handleOccasion(e) {
    const occasionValue = e.target.value;
    setOccation(occasionValue); // state variable updated here
    setOccasionTouched(true);
    handleValidations();
  }

  function submitReservation(evt) {
    evt.preventDefault();
    console.log(evt.target);
    const data = new FormData(evt.target);
    submitForm(data);
  }

  const submitForm = (formData) => {
    const result = submitAPI(formData);
    console.log('Result of submit:', result);
    if (result) {
      onBookingUpdateHandler(bookingDate, bookingTime, guests, occasion);
      setBookingDate('');
      setBookingTime('');
      setGuests(0);
      setOccation('');
    }
  };

  useEffect(() => {
    handleValidations();
    updateButton(bookingDate, bookingTime, occasion, guests);
  }, [bookingDate, bookingTime, occasion, guests]);

  function updateButton(bkdate, bktime, ocsion, gsts) {
    const foundAvailable = availableList?.indexOf(bktime) > -1;
    const enableButton = foundAvailable & (ocsion !== '') && gsts > 0;
    setEnableReservation(enableButton);
  }

  return (
    <article className='flex flex-col items-center text-sm md:items-start md:px-20 md:text-xl mx-4 pb-4'>
      <h2 className='font-markazi text-4xl pb-2 md:text-5xl md:pb-4'>
        Book Now
      </h2>
      <form className='flex flex-col gap-2' onSubmit={submitReservation}>
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          aria-label='Choose date'
          value={bookingDate}
          className='input-ctl'
          onChange={(e) => handleDateChange(e)}
          data-testid='test-booking-date'
        />
        <span style={{ color: 'red' }}>{dateErrors}</span>
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          className='input-ctl'
          value={bookingTime}
          onChange={(e) => handleTimeChange(e)}
          data-testid='test-booking-time'
        >
          <option value='0'>--Select Time--</option>
          {availableList &&
            availableList?.map((avt, i) => <option key={i}>{avt}</option>)}
        </select>
        <span style={{ color: 'red' }}>{timeErrors}</span>
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
          data-testid='test-booking-guests'
        />
        <span style={{ color: 'red' }}>{guestErrors}</span>
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          className='input-ctl'
          value={occasion}
          onChange={(e) => handleOccasion(e)}
          data-testid='test-booking-occasion'
        >
          <option value='0'>--Select Occasion--</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <span style={{ color: 'red' }}>{occasionErrors}</span>
        <input
          type='submit'
          value='Make Your reservation'
          aria-label='On Click'
          className='btn-primary w-64'
          disabled={!enableReservation}
          data-testid='test-booking-reserve'
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
