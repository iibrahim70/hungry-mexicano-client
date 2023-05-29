import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import bannerOne from '../../assets/banner/01.jpg'
import bannerTwo from '../../assets/banner/02.jpg'
import bannerThree from '../../assets/banner/03.png'
import bannerFour from '../../assets/banner/04.jpg'
import bannerFive from '../../assets/banner/05.png'
import bannerSix from '../../assets/banner/06.png'

const Banner = () => {
  return (
    <div>
      <Carousel dynamicHeight>
        <div>
          <img src={bannerOne} /> 
        </div>
        <div>
          <img src={bannerTwo} />
        </div>
        <div>
          <img src={bannerThree} />
        </div>
        <div>
          <img src={bannerFour} />
        </div>
        <div>
          <img src={bannerFive} />
        </div>
        <div>
          <img src={bannerSix} />
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner; 