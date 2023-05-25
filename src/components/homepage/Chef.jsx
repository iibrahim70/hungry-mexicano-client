import React from 'react';
import ChefCard from './ChefCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Chef = () => {
  const [recipes, setRecipes] = useState([]); 

  useEffect(() => {
    fetch('https://hungry-mexicano-server-iibrahim70.vercel.app/recipe')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='min-h-screen space-y-5 mt-10'>
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold md:font-medium text-center">Meet Our Senior Cheifs</h2>
      <p className='md:w-[50%] text-center mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aperiam placeat quod voluptates, consequatur rerum ipsam fugit nesciunt unde dolores!</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 md:gap-10'>
        {
          recipes.map(recipe => <ChefCard key={recipe.id} recipe={recipe}/>)
        }
      </div>
    </div>
  );
};

export default Chef;