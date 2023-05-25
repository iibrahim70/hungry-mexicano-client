import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <LazyLoadImage src="https://www.foodnetwork.com/content/dam/images/food/fullset/2019/10/28/0/FNK_Red-Pork-Tamales_H2_s4x3.jpg" className="w-full h-screen" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <LazyLoadImage src="https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Homemade-Vegan-Mexican-Beef-Tacos-with-Herbs.jpg" className="w-full h-screen" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <LazyLoadImage src="https://www.thespruceeats.com/thmb/-g-eTieVF44gcjxac5wyG0egAo0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-fajitas-recipe-3052908-hero-01-e4dc09dd6b28488191a9ddf700c7441b.jpg" className="w-full h-screen" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <LazyLoadImage src="https://www.seriouseats.com/thmb/2qh8uyOJMFWewNqgJbzJ8gvO1Dc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__01__20170131-quesadillas-three-variations-7-1c3c71a59e9245f380fce6a6d70d3c5b.jpg" className="w-full h-screen" />
        </div>
      </div>
      <div className="flex justify-center w-full pt-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </>
  );
};

export default Carousel; 