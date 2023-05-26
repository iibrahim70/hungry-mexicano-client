import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const RecipeDetailsCard = ({ recipe }) => {
  const {recipe_name, cooking_method, rating} = recipe;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(true);
    toast.success('This recipe is now your favorite!');
  };

  return (
    <div className='px-5 space-y-2 shadow-2xl flex flex-col'>
      <ToastContainer />
      <div className='flex-1'>
        <h2 className='text-base font-semibold pt-2'>{recipe_name}</h2>
        <p className='text-base font-semibold'>Ingredients -</p>
        {recipe.ingredients?.map((item, index) => <li className='capitalize ps-3' key={index}>{item}</li>)}
        <p className='text-justify'><span className='text-base font-semibold'>Cooking Method: </span>{cooking_method}</p>
        <p><span className='text-base font-semibold'>Rating: </span>{rating}</p>
      </div>
      <button onClick={handleFavoriteClick} disabled={isFavorited} className="inline-flex items-center justify-center capitalize text-sm px-3 py-2 font-normal text-white transition hover:drop-shadow-2xl rounded border-none shadow-xl md:mb-0 bg-blue-600 hover:bg-blue-800 duration-700 disabled:cursor-not-allowed disabled:bg-slate-400">Favourite</button>
    </div>
  );
};

export default RecipeDetailsCard;