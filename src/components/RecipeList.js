import React from "react";

const RecipeList = props => {
  const recipeList = props.recipes.map((recipe, index) => {
    return (
      <div id="recipe-title" key={index} onClick={props.setCurrent}>
        {recipe.recipeTitle}
      </div>
    );
  });

  return <div id="recipe-list">{recipeList}</div>;
};

export default RecipeList;
