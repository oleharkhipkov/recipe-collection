import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({ recipes, setCurrent }) => (
  <div id="recipe-list">
    {recipes.map((recipe, index) => (
      <div id="recipe-title" key={index} onClick={setCurrent}>
        {recipe.recipeTitle}
      </div>
    ))}
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default RecipeList;
