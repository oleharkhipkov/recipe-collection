import React from 'react';
import PropTypes from 'prop-types';

function RecipeForm({
  visibility,
  dialogMode,
  onChange,
  recipeTitle,
  recipeIngredients,
  recipeSteps,
  addRecipe,
  handleEdit,
  toggleVisibility,
}) {
  return (
    visibility && (
      <div className="dialog">
        <label className="input-title">
          {dialogMode === 'add' ? 'Add Recipe' : 'Edit Recipe'}
          <br />
        </label>
        <textarea
          onChange={onChange}
          id="edit-recipe"
          placeholder="Recipe Name"
          name="recipeTitle"
          value={recipeTitle}
          type="text"
          rows="1"
        >
          {recipeTitle}
        </textarea>
        <br />
        <label className="input-title">
          Ingredients
          <br />
        </label>
        <textarea
          id="edit-ingredients"
          value={recipeIngredients}
          name="recipeIngredients"
          onChange={onChange}
          placeholder='Separate each ingredient with a "/" : Eggs / Flour / Cookie Mix'
          type="text"
        >
          {recipeIngredients}
        </textarea>
        <br />
        <label className="input-title">
          Directions
          <br />
        </label>
        <textarea
          id="edit-steps"
          value={recipeSteps}
          name="recipeSteps"
          onChange={onChange}
          placeholder='Seperate each direction with a "/" : Mix eggs and flour in a bowl / Add cookie mix / Cook in oven '
          type="text"
        >
          {recipeSteps}
        </textarea>

        <div className="form-btns">
          <button
            id="add-save-btn"
            onClick={dialogMode === 'add' ? addRecipe : handleEdit}
          >
            {dialogMode === 'add' ? 'Add' : 'Save'}
          </button>

          <button id="close-dialog-btn" onClick={toggleVisibility}>
            Close
          </button>
        </div>
      </div>
    )
  );
}

RecipeForm.propTypes = {
  visibility: PropTypes.bool.isRequired,
  dialogMode: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  recipeIngredients: PropTypes.string.isRequired,
  recipeSteps: PropTypes.string.isRequired,
  addRecipe: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

export default RecipeForm;
