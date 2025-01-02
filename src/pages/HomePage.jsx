import React from 'react';
import PrayerTimes from '../components/PrayerTimes';
import ZakatCalculator from '../components/ZakatCalculator';
import DuaCards from '../components/DuaCards';



const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8">Islamic App</h1>
      <PrayerTimes />
      <ZakatCalculator />
      <DuaCards />
    </div>
  );
};

export default HomePage;