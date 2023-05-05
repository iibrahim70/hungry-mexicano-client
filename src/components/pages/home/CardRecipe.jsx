import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardRecipe = ({recipe}) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = recipe;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <LazyLoadImage src={chefPicture} alt="chef images" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{chefName}</h2>
          <p className='mb-1'>Years of experience: {yearsOfExperience}</p>
          <p className='mb-1'>Numbers of recipes: {numberOfRecipes}</p>
          <p className='mb-1'>Likes: {likes.facebook}</p>
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary my-2">View Recipes Button</Link>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;

