import React from 'react';
import PropTypes from 'prop-types';

const BookingsForm = props => {
    const [bookingDate, setBookingDate] = React.useState(null);
    const [bookingTime, setBookingTime] = React.useState('17:00');
    const [occasion, setOccation] = React.useState(null);
    const [guests, setGuests] = React.useState(1);
    function handleDateChange(e) {
      const dateValue = e.target.value;
      console.log('dateValue', dateValue);
      setBookingDate(dateValue); // state variable updated here
    }
  
    function handleTimeChange(e) {
      const timeValue = e.target.value;
      console.log('TimeValue:', timeValue);
      setBookingTime(timeValue); // state variable updated here
    }
  
    function handleGuestsChange(e) {
      const guests = e.target.value;
      console.log('guests:', guests);
      setGuests(guests); // state variable updated here
    }
  
    function handleOccasion(e) {
      const occasionValue = e.target.value;
      console.log('occasionValue', occasionValue);
      setOccation(occasionValue); // state variable updated here
    }
  
    function submitReservation(e){
      e.preventDefault();
      console.log('submit clicked');
    }
  
  
    return (
        <div className=' flex flex-col items-center text-sm md:items-start md:px-20 md:text-xl'>
        <form className='flex flex-col gap-2'>
          <label htmlFor='res-date'>Choose date</label>
          <input
            type='date'
            id='res-date'
            className='input-ctl'
            onChange={(e) => handleDateChange(e)}
          />
          <label htmlFor='res-time'>Choose time</label>
          <select
            id='res-time '
            className='input-ctl'
            onChange={(e) => handleTimeChange(e)}
          >
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
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            className='input-ctl'
            onChange={(e) => handleGuestsChange(e)}
          />
          <label htmlFor='occasion'>Occasion</label>
          <select id='occasion' className='input-ctl' onChange={(e) => handleOccasion(e)}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input
            type='submit'
            value='Make Your reservation'
            className='btn-primary w-64'
            onClick={(e) => submitReservation(e)}
          />
        </form>
      </div>
    );
};

BookingsForm.propTypes = {
    bookingDate: Date,
    bookingTime: String,
    guests: Number,
    occasion: String

};

export default BookingsForm;