import React from "react";

function RecipeForm(props) {
  if (props.visibility) {
    return (
      <div id="dialog">
        <div>
          <div className="input-title">
            {props.dialogMode === "add" ? "Add Recipe" : "Edit Recipe"}
            <br />
          </div>
          <textarea
            onChange={props.onChange}
            id="edit-recipe"
            placeholder="Recipe Name"
            name="recipeTitle"
            value={props.recipeTitle}
            type="text"
            cols="30"
            rows="1"
          >
            {props.recipeTitle}
          </textarea>
          <br />
          <div className="input-title">
            Ingredients
            <br />
          </div>
          <textarea
            id="edit-ingredients"
            value={props.recipeIngredients}
            name="recipeIngredients"
            onChange={props.onChange}
            cols="30"
            rows="6"
            placeholder='Separate each ingredient with a "/" : Eggs / Flour / Cookie Mix'
            type="text"
          >
            {props.recipeIngredients}
          </textarea>
          <br />
          <div className="input-title">
            Directions
            <br />
          </div>
          <textarea
            id="edit-steps"
            value={props.recipeSteps}
            name="recipeSteps"
            onChange={props.onChange}
            cols="30"
            rows="11"
            placeholder='Seperate each direction with a "/" : Mix eggs and flour in a bowl / Add cookie mix / Cook in oven '
            type="text"
          >
            {props.recipeSteps}
          </textarea>
        </div>
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
