import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import CardRecipe from './CardRecipe';

const Home = () => {
  const [recipes, setRecipes] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:5000/recipe')
    .then(res => res.json())
    .then(data => setRecipes(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <Carousel></Carousel>
        <div className='grid grid-cols-3 lg:w-4/5 mx-auto my-10'>
          {
            recipes.map(recipe => <CardRecipe key={recipe.id} recipe={recipe}></CardRecipe>)
          }
        </div>
    </div>
  );
};

export default Home;