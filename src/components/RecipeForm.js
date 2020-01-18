import React from "react";

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.visibility) {
      return (
        <div id="dialog">
          <div>
            <div className="input-title">
              {this.props.formText[0]}
              <br />
            </div>
            <textarea
              id="edit-recipe"
              placeholder="Recipe Name"
              type="text"
              cols="30"
              rows="1"
            />
            <br />
            <div className="input-title">
              Ingredients
              <br />
            </div>
            <textarea
              id="edit-ingredients"
              cols="30"
              rows="6"
              placeholder='Separate each ingredient with a "/" :     Eggs / Flour / Cookie Mix'
              type="text"
            />
            <br />
            <div className="input-title">
              Directions
              <br />
            </div>
            <textarea
              id="edit-steps"
              cols="30"
              rows="11"
              placeholder='Seperate each direction with a "/" :        Mix eggs and flour in a bowl / Add cookie mix / Cook in oven '
              type="text"
            />
          </div>
          <div className="form-btns">
            <button
              onClick={this.props.formFunctions}
              id={this.props.formID[0]}
            >
              {this.props.formText[1]}
            </button>

            <button onClick={this.props.closeVisibility}>Close</button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RecipeForm;
