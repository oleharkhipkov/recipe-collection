import React from 'react';

const RecipeList = ({ recipes, setCurrent }) => (
  <div id="recipe-list">
    {recipes.map((recipe, index) => (
      <div id="recipe-title" key={index} onClick={setCurrent}>
        {recipe.recipeTitle}
      </div>
    ))}
  </div>
);

export default RecipeList;
