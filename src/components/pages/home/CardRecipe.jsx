import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardRecipe = ({recipe}) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = recipe;
  return (
    <div className="card w-80 bg-base-100 shadow-xl mb-5">
      <figure><LazyLoadImage src={chefPicture} alt="chef images" /></figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>Years of experience: {yearsOfExperience}</p>
        <p>Numbers of recipes: {numberOfRecipes}</p>
        <p>Likes: {likes.facebook}</p>
        <div className="card-actions justify-start">
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary">View Recipes Button</Link>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;