import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-toastify/dist/ReactToastify.css';
import RecipeDetailsCard from './RecipeDetailsCard';

const RecipeDetails = () => {
  const recipeDetails = useLoaderData();

  return (
    <>
      <LazyLoadImage className='w-full py-10' src={recipeDetails.chefPicture} alt="chef images" />
      
      <div>
        <h2 className='text-2xl font-bold pb-1'>{recipeDetails.chefName}</h2>
        <p className='text-xl pb-1'><span className='font-semibold'>Short Bio:</span> {recipeDetails.bio}</p>
        <p className='text-xl pb-1'><span className='font-semibold'>Years of experience:</span> {recipeDetails.yearsOfExperience}</p>
        <p className='text-xl pb-1'><span className='font-semibold'>Numbers of recipes:</span> {recipeDetails.numberOfRecipes}</p>
        <p className='text-xl pb-1'><span className='font-semibold'>Likes:</span> {recipeDetails.likes.facebook}</p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-10'>
        {recipeDetails?.recipes.map((recipe, index) => <RecipeDetailsCard key={index} recipe={recipe} />)}
      </div>

    </>
  );
};

export default RecipeDetails;