import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = () => {
  const recipeDetails = useLoaderData(); 
  
  const [isFavorited1, setIsFavorited1] = useState(false);
  const [isFavorited2, setIsFavorited2] = useState(false);
  const [isFavorited3, setIsFavorited3] = useState(false);

  const handleFavoriteClick1 = () => {
    setIsFavorited1(true);
    toast.error('This recipe is now your favorite!');
  };
  const handleFavoriteClick2 = () => {
    setIsFavorited2(true);
    toast.success('This recipe is now your favorite!');
  };
  const handleFavoriteClick3 = () => {
    setIsFavorited3(true);
    toast.warning('This recipe is now your favorite!');
  };

  return (
    <div>
      <ToastContainer />
      <div className='mx-5 my-20 grid grid-cols-2 items-center gap-10'>
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
      <div className='flex justify-evenly mx-5 my-10'>
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2 className='text-2xl font-bold'>{recipeDetails.recipe_one.recipe_name1}</h2>
            <p className='text-base font-semibold'>Ingredients -</p>
            {recipeDetails?.recipe_one?.ingredients?.map((item, index) => <li key={index}>{item}</li>)}
            <p><span className='text-base font-semibold'>Cooking Method: </span>{recipeDetails.recipe_one.cooking_method1}</p>
            <p><span className='text-base font-semibold'>Ratings: </span>{recipeDetails.recipe_one.rating1}</p>
            <button onClick={handleFavoriteClick1} disabled={isFavorited1} className="btn btn-primary">Favourite</button>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2 className='text-2xl font-bold'>{recipeDetails.recipe_two.recipe_name2}</h2>
            <p className='text-base font-semibold'>Ingredients -</p>
            {recipeDetails?.recipe_two?.ingredients?.map((item, index) => <li key={index}>{item}</li>)}
            <p><span className='text-base font-semibold'>Cooking Method: </span>{recipeDetails.recipe_two.cooking_method2}</p>
            <p><span className='text-base font-semibold'>Ratings: </span>{recipeDetails.recipe_two.rating2}</p>
            <button onClick={handleFavoriteClick2} disabled={isFavorited2} className="btn btn-primary">Favourite</button>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <h2 className='text-2xl font-bold'>{recipeDetails.recipe_three.recipe_name3}</h2>
            <p className='text-base font-semibold'>Ingredients -</p>
            {recipeDetails?.recipe_three?.ingredients?.map((item, index) => <li key={index}>{item}</li>)}
            <p><span className='text-base font-semibold'>Cooking Method: </span>{recipeDetails.recipe_three.cooking_method3}</p>
            <p><span className='text-base font-semibold'>Ratings: </span>{recipeDetails.recipe_three.rating3}</p>
            <button onClick={handleFavoriteClick3} disabled={isFavorited3} className="btn btn-primary">Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;