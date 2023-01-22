import * as React from 'react';
import BookingsForm from './BookingsForm';
import BookingsList from './BookingsList';
import Header from './Header';

const bookingStateReducer = (state, action) => {
  if (!action.booking.bookingDate || !action.booking.bookingTime) {
    console.log('No change as no date and time found');
    return state;
  }
  if (action.type === 'reserve_slot') {
    // console.log(action.booking);
    let available = [...state.available];
    // console.log(bookings);
    let foundAvailable = available.filter(
      (bk) =>
        bk.bookingDate === action.booking.bookingDate &&
        bk.bookingTime.indexOf(action.booking.bookingTime) > -1
    );
    if (foundAvailable && foundAvailable.length > 0) {
      console.log(
        'Available  ' +
          action.booking.bookingDate +
          ' ' +
          action.booking.bookingTime
      );
      const bookingObject = available.filter(
        (bk) => bk.bookingDate === action.booking.bookingDate
      ).at[0];
      console.log(bookingObject);
      const arrayPos = bookingObject.bookingTime.indexOf(
        action.booking.bookingTime
      );
      if (arrayPos > -1) {
      }
    } else {
      foundAvailable.guests = action.booking.guests;
      foundAvailable.occasion = action.booking.occasion;
    }
    return { booked: available };
  }
  return state;
};

const BookingsMain = () => {
  const initialAvailableTimes = {
    available: [
      {
        bookingDate: '2023-01-23',
        bookingTimes: [
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
        ],
      },
      {
        bookingDate: '2023-01-24',
        bookingTimes: [
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
        ],
      },
      {
        bookingDate: '2023-01-25',
        bookingTimes: [
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
        ],
      },
    ],
  };
  const [availableTimes, dispatch] = React.useReducer(
    bookingStateReducer,
    initialAvailableTimes
  );

  const [booking, setBooking] = React.useState({
    bookingDate: null,
    bookingTime: '',
    occasion: '',
    guests: 0,
  });

  const bookingDetailChangeHandler = (
    bookingDateVal,
    bookingTimeVal,
    guestsVal,
    occasionVal
  ) => {
    const updatedBooking = { ...booking };
    updatedBooking.bookingDate = bookingDateVal;
    updatedBooking.bookingTime = bookingTimeVal;
    updatedBooking.guests = guestsVal;
    updatedBooking.occasion = occasionVal;

    setBooking(updatedBooking);
    // dispatch({type: 'reserve_slot'});
    dispatch({ type: 'reserve_slot', booking: updatedBooking });
  };

  return (
    <div className='min-w-min-360 w-full flex flex-col align-center font-markazi mx-4'>
      <Header />
      <article className='w-full flex flex-col md:flex-row'>
        <BookingsForm
          onBookingChangeHandler={(
            bookingDate,
            bookingTime,
            guests,
            occasion
          ) =>
            bookingDetailChangeHandler(
              bookingDate,
              bookingTime,
              guests,
              occasion
            )
          }
          availableList={availableTimes.available}
        />
        <BookingsList bookings={[]} />
      </article>
    </div>
  );
};

export default BookingsMain;
