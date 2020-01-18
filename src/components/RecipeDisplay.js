import React from "react";

class RecipeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let showRecipe;
    let recipes = this.props.recipes;
    let currentRecipe = this.props.currentRecipe;
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
                  className=""
                  onClick={this.props.handleForm}
                  className="fas fa-edit"
                ></i>

                <i
                  onClick={this.props.handleDelete}
                  className="fas fa-trash"
                ></i>
                <i
                  id="add-btn"
                  onClick={this.props.handleForm}
                  className="fas fa-plus"
                ></i>
              </div>
            </div>
            <p className="ingredients-heading">Ingredients:</p>
            <ul className="show-ingredients">
              {recipes[i].ingredients.map((ingredient, j) => (
                <li className="list-ingredients" key={j}>
                  {ingredient}
                </li>
              ))}
            </ul>
            <p className="directions-heading">Directions:</p>
            <ol>
              {recipes[i].steps.map((step, k) => (
                <li className="list-directions" key={k}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        );
      }
    }

    return <div>{showRecipe}</div>;
  }
}

export default RecipeDisplay;
