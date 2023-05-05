import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import CardRecipe from './CardRecipe';
import Marquee from "react-fast-marquee";
import Category from './Category';

const Home = () => {
  const [recipes, setRecipes] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hungry-mexicano-server-iibrahim70.vercel.app/recipe')
    .then(res => res.json())
    .then(data => setRecipes(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <div className='flex my-10 px-5'>
        <button className="btn btn-error">Latest</button>
        <Marquee speed={60}>
          Mexican food is a blend of indigenous (Indian) and Spanish influences. At the heart of the cuisine of this beautiful country are three very important crops: corn, beans, and chilies. These native foods are cheap and widely available.
        </Marquee>
      </div>
      <Carousel></Carousel>
      <h2 className="text-2xl font-bold my-10 text-center">Meet Our Senior Cheifs</h2>
      <div className='container mx-auto flex flex-wrap'>
          {
            recipes.map(recipe => <CardRecipe key={recipe.id} recipe={recipe}></CardRecipe>)
          }
      </div>
      <Category></Category>
    </div>
  );
};

export default Home;