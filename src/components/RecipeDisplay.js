import React from "react";

function RecipeDisplay(props) {
  let showRecipe;
  let recipes = props.recipes;
  let currentRecipe = props.currentRecipe;
  for (var i = 0; i < recipes.length; i++) {
    if (currentRecipe === recipes[i].recipeTitle) {
      showRecipe = (
        <div className="recipeBox">
          <div className="recipeDisplay">
            <div id="show-recipe-title" className="recipe-display-pane">
              {currentRecipe}
            </div>
            <div className="recipe-display-pane">
              <i
                id="edit"
                onClick={props.handleForm}
                className="fas fa-edit"
              ></i>

              <i onClick={props.handleDelete} className="fas fa-trash"></i>
              <i
                id="add-btn"
                onClick={props.handleForm}
                className="fas fa-plus"
              ></i>
            </div>
          </div>
          <p className="ingredients-heading">Ingredients:</p>
          <ul className="show-ingredients">
            {recipes[i].recipeIngredients.map((ingredient, j) => (
              <li className="list-ingredients" key={j}>
                {ingredient}
              </li>
            ))}
          </ul>
          <p className="directions-heading">Directions:</p>
          <ol>
            {recipes[i].recipeSteps.map((step, k) => (
              <li className="list-directions" key={k}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      );
    }
  }
  if (props.recipes.length > 0) {
    return <div>{showRecipe}</div>;
  } else {
    return (
      <div className="recipeBox">
        <div className="recipeDisplay">
          <div className="recipe-display-pane">
            <i id="edit" onClick={props.handleForm} className="fas fa-edit"></i>

            <i onClick={props.handleDelete} className="fas fa-trash"></i>
            <i
              id="add-btn"
              onClick={props.handleForm}
              className="fas fa-plus"
            ></i>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDisplay;
