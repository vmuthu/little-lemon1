import React from 'react';
import GreekSalad from './images/greek-salad.jpg';
import LemonDessert from './images/lemon-dessert.jpg';
import Bruchetta from './images/bruchetta.svg';
import SpecialsItem from './SpecialsItem';

const WeekSpecials = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex justify-between items-center px-1 py-2 md:px-4 md:py-4'>
          <h2 className='font-markazi text-4xl pb-2 md:text-5xl md:pb-4'>This Week's Specials!</h2>
          <input type='button' value='Online Menu' className='btn-primary' />
      </div>
      <div className='flex flex-col mx-2 md:flex-row md:mx-6 mb-2 md:mb-6'>
        <SpecialsItem>
          <img src={GreekSalad} alt='Specials item' className='w-[95%] rounded-md md:rounded-lg' />
        </SpecialsItem>
        <SpecialsItem>
          <img src={LemonDessert} alt='Specials item'  className='w-[95%] rounded-md md:rounded-lg' />
        </SpecialsItem>
        <SpecialsItem>
          <img src={Bruchetta} alt='Specials item'  className='w-[95%] rounded-md md:rounded-lg' />
        </SpecialsItem>
      </div>
    </section>
  );
};

export default WeekSpecials;
