import React from 'react';
import FoodServing from './images/restauranfood.jpg';

const HeroShot = () => {
  return (
    <section className='flex flex-col-reverse items-center md:flex-row bg-gray-600'>
      <div className='flex flex-col w-[50%] justify-center ml-2 md:ml-6 pb-2 md:pb-4'>
        <h2 className='font-markazi text-5xl md:text-6xl text-yellow-400 pb-2 md:pb-4'>Little Lemon</h2>
        <h3 className='font-karla text-3xl md:text-4xl text-white pb-2 md:pb-4'>Chicago</h3>
        <p className='font-karla text-xl md:text-2xl text-white pb-2 md:pb-4'>
          We are a family owned mediterranean restaurant focussed on traditional
          recipes served with mordern twist..
        </p>
        <input type='button' value='Reserve Table' className='btn-primary w-48 md:w-72' />
      </div>
      <div className='flex justify-center w-full md:w-[50%] ml-2 md:ml-6'>
        <img className='w-72 h-96 rounded-lg md:w-48 md:h-64 m-4' src={FoodServing} alt='Food serving' />
      </div>
    </section>
  );
};

export default HeroShot;
