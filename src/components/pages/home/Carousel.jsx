import React from 'react';

const Carousel = () => {
  return (
    <div className='mt-10'>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://img.delicious.com.au/ku6i2Q-s/del/2018/05/mexican-black-bean-and-corn-nachos-81127-2.jpg" className="w-full h-screen" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://www.allrecipes.com/thmb/-I7C6eORCGjCW0HfPT6L-mbXAWo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5928063-easy-mexican-casserole-Juvee336-1x1-1-bd97c7ef03ff42cbb775a9cba767bf0e.jpg" className="w-full h-screen" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://img.bestrecipes.com.au/S8iYd9_b/br/2018/10/grilled-tequila-lime-chicken-nachos-recipe-523507-1.jpg" className="w-full h-screen" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://www.eatingonadime.com/wp-content/uploads/2012/03/Easy-Mexican-Casserole_-49.jpg" className="w-full h-screen" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default Carousel; 