import React, { useEffect, useState } from 'react';
import CardRecipe from './CardRecipe';
import Carousel from './Carousel';

const Home = () => {
  const [recipes, setRecipes] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:5000/recipes')
    .then(res => res.json())
    .then(data => setRecipes(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <div className='grid grid-cols-3 lg:w-4/5 mx-auto my-10'>
        {
          recipes.map(recipe => <CardRecipe key={recipe.id} recipe={recipe}></CardRecipe>)
        }
      </div>
      {/* <Carousel></Carousel> */}
    </div>
  );
};

export default Home;