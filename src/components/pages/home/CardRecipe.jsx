import React from 'react';

const CardRecipe = (props) => {
  const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = props.recipe 
  return (
    <div className="card w-80 bg-base-100 shadow-xl mb-5">
      <figure><img src={chefPicture} alt="chef images" /></figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>Years of experience: {yearsOfExperience}</p>
        <p>Numbers of recipes: {numberOfRecipes}</p>
        <p>Likes: {likes.facebook}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">View Recipes Button</button>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;