import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import RecipeDetailsCard from './RecipeDetailsCard';

const RecipeDetails = () => {
  const recipeDetails = useLoaderData();

  return (
    <>
      <img className='w-full pb-10' src={recipeDetails.chefPicture} alt="chef images" />
      
      <div className='space-y-2'>
        <h2 className='text-3xl font-bold'>{recipeDetails.chefName}</h2>
        <div className='text-xl opacity-60'>
          <p>Short Bio: {recipeDetails.bio}</p>
          <p>Years of experience: {recipeDetails.yearsOfExperience}</p>
          <p>Numbers of recipes: {recipeDetails.numberOfRecipes}</p>
          <p>Likes: {recipeDetails.likes.facebook}</p>
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-10'>
        {recipeDetails?.recipes.map((recipe, index) => <RecipeDetailsCard key={index} recipe={recipe} />)}
      </div>

    </>
  );
};

export default RecipeDetails;