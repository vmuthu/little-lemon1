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
    let bookings = [...state.booked];
    // console.log(bookings);
    let foundBooking = bookings.filter(
      (bk) =>
        bk.bookingDate === action.booking.bookingDate &&
        bk.bookingTime === action.booking.bookingTime
    );
    if (!foundBooking || foundBooking.length <= 0) {
      console.log(
        'Added ' + action.booking.bookingDate + ' ' + action.booking.bookingTime
      );
      bookings.push(action.booking);
    } else {
      foundBooking.guests = action.booking.guests;
      foundBooking.occasion = action.booking.occasion;
    }
    return { booked: bookings };
  }
  return state;
};

const BookingsMain = () => {
  const initialBookedList = { booked: [] };
  const [bookingsList, dispatch] = React.useReducer(
    bookingStateReducer,
    initialBookedList
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
          bookingList={bookingsList.booked}
        />
        <BookingsList bookings={bookingsList} />
      </article>
    </div>
  );
};

export default BookingsMain;
