import React, { useEffect } from 'react';

const RecipeDetails = () => {


  useEffect(() => {
    fetch('http://localhost:5000/recipe')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }, [])
  return (
    <div>
      
    </div>
  );
};

export default RecipeDetails;