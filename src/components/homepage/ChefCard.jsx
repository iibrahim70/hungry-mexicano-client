import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefCard = ({recipe}) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = recipe;
  return (
    <div className="bg-white shadow-xl rounded-md">
      <LazyLoadImage className='h-[55%] w-full' src={chefPicture} alt="chef images" />
      <div className='ms-5 space-y-2 pb-3'>
        <h2 className="text-xl font-semibold mt-2">{chefName}</h2>
        <div className='text-gray-700'>
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

