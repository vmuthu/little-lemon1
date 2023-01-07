import React, { Children } from 'react';
import Delivery from './images/icons8-delivery-scooter-64.png';

const SpecialsItem = ({children, title, price, description}) => {
    return (
        <div className='flex flex-col w-full justify-end items-center pt-2 mx-2 md:w-[1/3] md:mx-4 border border-gray-300 border-1 rounded-md md:rounded-lg'>
            {children}
            <div className='flex flex-row w-full justify-between items-center px-4 py-2'>
                <h3 className='text-3xl'>{title}</h3>
                <span className='text-3xl text-orange-200'>$&nbsp;{price}</span>
            </div>
            <p className='text-lg p-4 pb-4 md:pb-8'>{description}</p>
            <div className='flex space-x-8 justify-self-end'>
                <span>Order for delivery</span>
                <img src={Delivery} alt='Delivery scooter' className='w-4 h-4' />
            </div>
        </div>
    );
};

export default SpecialsItem;