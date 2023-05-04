import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeDetails = () => {
  const recipeDetails = useLoaderData(); 
  console.log(recipeDetails);
  return (
    <div>
      <div className='my-20 grid grid-cols-2 items-center gap-10'>
        <div>
          <LazyLoadImage src={recipeDetails.chefPicture} alt="chef images" />
        </div>
        <div>
          <h2 className='text-2xl font-bold py-2'>Name: {recipeDetails.chefName}</h2>
          <p className='text-xl font-semibold py-2'>Years of experience: {recipeDetails.yearsOfExperience}</p>
          <p className='text-xl font-semibold py-2'>Numbers of recipes: {recipeDetails.numberOfRecipes}</p>
          <p className='text-xl font-semibold py-2'>Likes: {recipeDetails.likes.facebook}</p>
        </div>
      </div>
      <div className='grid grid-cols-3 lg:w-4/5 mx-auto my-10'>
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2>{recipeDetails.recipe_one.recipe_name1}</h2>
            <p>Years of experience: {}</p>
            <p>Cooking Method: {recipeDetails.recipe_one.cooking_method1}</p>
            <p>Ratings: {recipeDetails.recipe_one.rating1}</p>
            <button className="btn btn-primary">Favourite</button>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2>{recipeDetails.recipe_two.recipe_name2}</h2>
            <p>Years of experience: { }</p>
            <p>Cooking Method: {recipeDetails.recipe_two.cooking_method2}</p>
            <p>Ratings: {recipeDetails.recipe_two.rating2}</p>
            <button className="btn btn-primary">Favourite</button>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2>{recipeDetails.recipe_three.recipe_name3}</h2>
            <p>Years of experience: { }</p>
            <p>Cooking Method: {recipeDetails.recipe_three.cooking_method3}</p>
            <p>Ratings: {recipeDetails.recipe_three.rating3}</p>
            <button className="btn btn-primary">Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;