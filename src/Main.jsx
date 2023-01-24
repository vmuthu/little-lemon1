import React from 'react';
import HeroShot from './HeroShot';
import WeekSpecials from './WeekSpecials';

const Main = (props) => {
  return (
    <main>
      <HeroShot />
      <WeekSpecials />
    </main>
  );
};

Main.propTypes = {};

export default Main;
