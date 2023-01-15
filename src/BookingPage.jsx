import * as React from 'react';
import BookingsForm from './BookingsForm';
import Header from './Header';

const BookingPage = () => {
    return (
        <div className='min-w-min-360 w-full flex flex-col align-center font-markazi'>
            <Header />
            <BookingsForm />
        </div>
    );
};

export default BookingPage;
