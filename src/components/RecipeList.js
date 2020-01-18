import React from "react";

const RecipeList = props => {
  let list = props.recipes.map((recipe, index) => {
    return (
      <div id="recipe-title" key={index} onClick={props.setCurrent}>
        {recipe.recipeTitle}
      </div>
    );
  });

  return <div id="recipe-list">{list}</div>;
};

export default RecipeList;
