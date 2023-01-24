import * as React from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI } from './api';
import Header from './Header';
import { useEffect } from 'react';
import { useState } from 'react';

const updateBookings = (state, action) => {
  if (action.type === 'reserve_slot') {
    if (!action.booking.bookingDate || !action.booking.bookingTime) {
      console.log('No change as no date and time found');
      return state;
    }
    let bookings = [...state.bookings];
    console.log('pushing booking:', bookings);
    bookings.push({
      bookingDate: action.booking.bookingDate,
      bookingTime: action.booking.bookingTime,
      guests: action.booking.guests,
      occasion: action.booking.occasion,
    });
    return { bookings };
  }
  return state;
};

const updateTimes = (state, action) => {
  const dtval = Date.parse(action.bookingDate);
  const dtObj = new Date(0);
  dtObj.setUTCMilliseconds(dtval);
  const availableTimes = fetchAPI(dtObj);
  return { available: availableTimes };
};

const initializeAvailableTimes = () => {
  const initAvailableTimes = fetchAPI(new Date());
  const initState = {
    available: initAvailableTimes,
  };
  return initState;
};

const getFromStorage = () => {
  const bookingsJson = localStorage.getItem('bookings');
  // console.log('get item:', bookingsJson);
  if (bookingsJson) {
    const bookingsHead = JSON.parse(bookingsJson);
    return bookingsHead.bookings;
  }
  return [];
}

const BookingsMain = () => {
  const [showConfirmed, setShowConfirmed] = useState(false);
  const initialAvailableTimes = initializeAvailableTimes();
  const [availableTimes, dispatch] = React.useReducer(
    updateTimes,
    initialAvailableTimes
  );

  const [bookedList, bookedDispatch] = React.useReducer(updateBookings, {
    bookings: getFromStorage(),
  });

  const showFormHandler = () => {
    setShowConfirmed(false);
  }
 const bookingDateChangeHandler = (bookingDate) => {
    dispatch({ type: 'reserve_slot', bookingDate });
  };

  const bookingUpdateHandler = (bookingDate, bookingTime, guests, occasion) => {
    console.log(
      'Received in booking update:',
      bookingDate,
      ',',
      bookingTime,
      ',',
      guests,
      ',',
      occasion
    );
    const booking = {
      bookingDate: bookingDate,
      bookingTime: bookingTime,
      guests: guests,
      occasion: occasion,
    };
    setShowConfirmed(true);
    bookedDispatch({ type: 'reserve_slot', booking });
  };

  useEffect(() => {
    // console.log(bookedList.bookings);
    if ((!localStorage.getItem('bookings') ||
      (localStorage.getItem('bookings')).length === 0) ||
      (bookedList && bookedList.bookings && bookedList.bookings.length > 0)) {
      const bkjson = JSON.stringify(bookedList);
      localStorage.setItem('bookings', bkjson);
      // console.log('saved localstorage:', bkjson);
    } else {
      // console.log('empty list is not saved');
    }
  }, [bookedList]);

  return (
    <div className='min-w-min-360 w-full flex flex-col align-center font-markazi mx-4'>
      <Header />
      <article className='w-full flex flex-col md:flex-row'>
        {!showConfirmed && 
        <BookingsForm
        onDateChangeHandler={(bookingDate) =>
          bookingDateChangeHandler(bookingDate)
        }
        onBookingUpdateHandler={bookingUpdateHandler}
        availableList={availableTimes.available}
      />
      }
      {
        showConfirmed && 
        <ConfirmedBooking handler={showFormHandler}/>
      }
        {/* <BookingsList bookings={bookedList.bookings} /> */}
      </article>
    </div>
  );
};

export default BookingsMain;
