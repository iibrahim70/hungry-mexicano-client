import React from 'react';
import Carousel from '../../components/homepage/Carousel';
import Category from '../../components/homepage/Category';
import Chef from '../../components/homepage/Chef';

const Home = () => {
  return (
    <>
      <Carousel/>
      <Chef/>
      <Category/>
    </>
  );
};

export default Home;