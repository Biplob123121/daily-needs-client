import React from 'react';
import AskQuestion from './AskQuestion';
import Banner from './Banner';
import Category from './Category';
import Reviews from './Reviews';

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Reviews />
      <AskQuestion />
    </div>
  )
}

export default Home