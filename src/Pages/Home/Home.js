import React from 'react';
import AskQuestion from './AskQuestion';
import Banner from './Banner';
import Category from './Category';
import Reviews from './Reviews';
import SpecialCutomer from './SpecialCutomer';

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <SpecialCutomer />
      <AskQuestion />
      <Reviews />
    </div>
  )
}

export default Home