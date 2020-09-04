import React from 'react';
import PropTypes from 'prop-types';

function RecipeDisplay({ recipes, currentRecipe, handleForm, handleDelete }) {
  let showRecipe;
  for (var i = 0; i < recipes.length; i++) {
    if (currentRecipe === recipes[i].recipeTitle) {
      showRecipe = (
        <div className="recipeBox">
          <div className="recipeDisplay">
            <div id="show-recipe-title" className="recipe-display-pane">
              {currentRecipe}
            </div>
            <div className="recipe-display-pane">
              <i id="edit" onClick={handleForm} className="fas fa-edit"></i>

              <i onClick={handleDelete} className="fas fa-trash"></i>
              <i id="add-btn" onClick={handleForm} className="fas fa-plus"></i>
            </div>
          </div>
          <p className="ingredients-heading">Ingredients:</p>
          <ul className="show-ingredients">
            {recipes[i].recipeIngredients.map((ingredient, index) => (
              <li className="list-ingredients" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
          <p className="directions-heading">Directions:</p>
          <ol>
            {recipes[i].recipeSteps.map((step, index) => (
              <li className="list-directions" key={index}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      );
    }
  }
  if (recipes.length) {
    return <div>{showRecipe}</div>;
  } else {
    return (
      <div className="recipeBox">
        <div className="recipeDisplay">
          <div className="recipe-display-pane">
            <i id="edit" onClick={handleForm} className="fas fa-edit"></i>

            <i onClick={handleDelete} className="fas fa-trash"></i>
            <i id="add-btn" onClick={handleForm} className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    );
  }
}

RecipeDisplay.propTypes = {
  recipes: PropTypes.array.isRequired,
  currentRecipe: PropTypes.string.isRequired,
  handleForm: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default RecipeDisplay;
