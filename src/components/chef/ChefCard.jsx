import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({recipe}) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = recipe;
  
  return (
    <div className="shadow-2xl rounded-md">
      <img className='w-full h-60 object-cover' src={chefPicture} alt="chef images" />
      <div className='space-y-2 p-5'>
        <h2 className="text-xl font-semibold">{chefName}</h2>
        <div className='opacity-60'>
          <p>Years of experience: {yearsOfExperience}</p>
          <p>Numbers of recipes: {numberOfRecipes}</p>
          <p>Likes: {likes.facebook}</p>
        </div>
        <Link to={`/recipe/${recipe.id}`} className="inline-flex items-center justify-center capitalize text-sm px-3 py-2 font-normal text-white transition hover:drop-shadow-2xl rounded border-none shadow-xl md:mb-0 bg-blue-600 hover:bg-blue-800 duration-700">View Recipes</Link>  
      </div>
      
    </div>
  );
};

export default ChefCard;

