import React from 'react';
import GreekSalad from './images/greek-salad.jpg';
import LemonDessert from './images/lemon-dessert.jpg';
import Bruchetta from './images/bruchetta.png';
import SpecialsItem from './SpecialsItem';

const WeekSpecials = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex justify-between items-center px-1 py-2 md:px-4 md:py-4'>
          <h2 className='font-markazi text-4xl pb-2 md:text-5xl md:pb-4'>This Week's Specials!</h2>
          <input type='button' value='Online Menu' className='btn-primary' onClick={()=> alert('Upcoming feature')} />
      </div>
      <div className='flex flex-col mx-2 md:flex-row md:mx-6 mb-2 md:mb-6'>
        <SpecialsItem title="Greek Salad" price="12.99" description="The famous is a traditional salad originating from Greece. This simple salad is usually made with a combination of romaine lettuce, scallions, dill, olive oil, red wine vinegar, salt, black pepper, and often oregano. The lettuce is washed, rinsed, and cut into thin slices.">
          <img src={GreekSalad} alt='Specials item' className='w-[90%] rounded-md md:rounded-lg' />
        </SpecialsItem>
        <SpecialsItem title="Bruchetta" price="5.99" description="Bruschetta originated in Italy during the 15th century. However, the dish can be traced back to Ancient Rome, when olive growers would bring their olives to a local olive press and taste a sample of their freshly pressed oil using a slice of bread.">
          <img src={LemonDessert} alt='Specials item'  className='w-[90%] rounded-md md:rounded-lg' />
        </SpecialsItem>
        <SpecialsItem title="Lemon Dessert" price="5.00" description="Lemon Delight, or Delizia al Limone, is synonymous with the Amalfi Coast. These mini sponge cakes filled and coated with lemon custard were created in 1978.Lemon Delight, or Delizia al Limone, is synonymous with the Amalfi Coast. Lemon Delight, or Delizia al Limone,">
          <img src={Bruchetta} alt='Specials item'  className='w-[90%] rounded-md md:rounded-lg' />
        </SpecialsItem>
      </div>
    </section>
  );
};

export default WeekSpecials;
