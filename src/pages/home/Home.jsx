import React from 'react';
import Category from '../../components/category/Category';
import Chef from '../../components/chef/Chef';
import Banner from '../../components/banner/Banner';

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