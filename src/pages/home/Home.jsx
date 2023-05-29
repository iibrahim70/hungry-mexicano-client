import React from 'react';
import Category from '../../components/homepage/Category';
import Chef from '../../components/homepage/Chef';
import Banner from '../../components/homepage/Banner';

const Home = () => {
  return (
    <>
      <Banner/>
      <Chef/>
      <Category/>
    </>
  );
};

export default Home;