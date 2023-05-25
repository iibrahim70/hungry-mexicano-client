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
      <LazyLoadImage className='w-full h-screen object-fill px-5 py-10' src={recipeDetails.chefPicture} alt="chef images" />
      <div className='mx-5'>
          <h2 className='text-2xl font-bold pb-1'>{recipeDetails.chefName}</h2>
        <p className='text-xl pb-1'><span className='font-semibold'>Short Bio:</span> {recipeDetails.bio}</p>
        <p className='text-xl pb-1'><span className='font-semibold'>Years of experience:</span> {recipeDetails.yearsOfExperience}</p>
        <p className='text-xl pb-1'><span className='font-semibold'>Numbers of recipes:</span> {recipeDetails.numberOfRecipes}</p>
        <p className='text-xl pb-1'><span className='font-semibold'>Likes:</span> {recipeDetails.likes.facebook}</p>
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