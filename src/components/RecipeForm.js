import React from "react";

function RecipeForm(props) {
  if (props.visibility) {
    return (
      <div className="dialog">
        <label className="input-title">
          {props.dialogMode === "add" ? "Add Recipe" : "Edit Recipe"}
          <br />
        </label>
        <textarea
          onChange={props.onChange}
          id="edit-recipe"
          placeholder="Recipe Name"
          name="recipeTitle"
          value={props.recipeTitle}
          type="text"
          rows="1"
        >
          {props.recipeTitle}
        </textarea>
        <br />
        <label className="input-title">
          Ingredients
          <br />
        </label>
        <textarea
          id="edit-ingredients"
          value={props.recipeIngredients}
          name="recipeIngredients"
          onChange={props.onChange}
          placeholder='Separate each ingredient with a "/" : Eggs / Flour / Cookie Mix'
          type="text"
        >
          {props.recipeIngredients}
        </textarea>
        <br />
        <label className="input-title">
          Directions
          <br />
        </label>
        <textarea
          id="edit-steps"
          value={props.recipeSteps}
          name="recipeSteps"
          onChange={props.onChange}
          placeholder='Seperate each direction with a "/" : Mix eggs and flour in a bowl / Add cookie mix / Cook in oven '
          type="text"
        >
          {props.recipeSteps}
        </textarea>

        <div className="form-btns">
          <button
            id="add-save-btn"
            onClick={
              props.dialogMode === "add" ? props.addRecipe : props.handleEdit
            }
          >
            {props.dialogMode === "add" ? "Add" : "Save"}
          </button>

          <button id="close-dialog-btn" onClick={props.toggleVisibility}>
            Close
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default RecipeForm;
