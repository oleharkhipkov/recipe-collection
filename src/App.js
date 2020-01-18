import React from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDisplay from "./components/RecipeDisplay";
import RecipeForm from "./components/RecipeForm";

let starter = [
  {
    recipeTitle: "Cookies",
    ingredients: ["Eggs", "Flour", "Cookie mix"],
    steps: [
      "Mix eggs and flour in a bowl",
      "Add cookie mix",
      "Cook in oven for 12 minutes",
      "Serve and enjoy :)"
    ]
  }
];
if (!localStorage.getItem("_bschade18_recipes")) {
  localStorage.setItem("_bschade18_recipes", JSON.stringify(starter));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      currentRecipe: "",
      recipes: JSON.parse(localStorage.getItem("_bschade18_recipes")),
      dialogMode: ""
    };
    this.addRecipe = this.addRecipe.bind(this);

    this.closeVisibility = this.closeVisibility.bind(this);
    this.setCurrent = this.setCurrent.bind(this);

    this.fillForm = this.fillForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.handleFormType = this.handleFormType.bind(this);
  }
  componentDidMount() {
    let recipes = localStorage.getItem("_bschade18_recipes");
    let recipesObj = JSON.parse(recipes);

    let recipe = recipesObj[0].recipeTitle;

    this.setState({
      currentRecipe: recipe
    });
  }
  fillForm() {
    let currentRecipe = this.state.currentRecipe;
    let recipes = this.state.recipes;
    let recipe;
    for (var i = 0; i < recipes.length; i++) {
      if (currentRecipe === recipes[i].recipeTitle) {
        recipe = recipes[i];
      }
    }
    document.getElementById("edit-recipe").value = recipe.recipeTitle;
    document.getElementById("edit-ingredients").value = recipe.ingredients.join(
      " / "
    );
    document.getElementById("edit-steps").value = recipe.steps.join(" / ");
  }

  handleEdit(event) {
    let recipes = this.state.recipes;
    let currentRecipe = this.state.currentRecipe;
    let edit = recipes.filter(recipe => {
      return currentRecipe !== recipe.recipeTitle;
    });
    let updatedList = edit.concat({
      recipeTitle: document.getElementById("edit-recipe").value,
      ingredients: document.getElementById("edit-ingredients").value.split("/"),
      steps: document.getElementById("edit-steps").value.split("/")
    });

    setTimeout(() => {
      localStorage.setItem("_bschade18_recipes", JSON.stringify(updatedList));
      this.setState({
        recipes: updatedList,
        visibility: false
      });
    }, 50);
  }

  handleFormType(e) {
    if (e.target.id === "edit") {
      this.setState({
        dialogMode: "edit",
        visibility: true
      });
      setTimeout(() => this.fillForm(), 20);
    } else {
      this.setState({
        dialogMode: "add",
        visibility: true
      });
    }
  }
  addRecipe(e) {
    let recipeArray = this.state.recipes;
    let recipeList = [];
    for (var i = 0; i < recipeArray.length; i++) {
      recipeList.push(recipeArray[i].recipeTitle.toLowerCase());
    }
    if (
      recipeList.includes(
        document.getElementById("edit-recipe").value.toLowerCase()
      )
    ) {
      alert("That recipe already exists");
      return;
    } else if (
      document.getElementById("edit-recipe").value.toLowerCase() === ""
    ) {
      alert("Enter a recipe name");
      return;
    }
    let updatedRecipes = recipeArray.concat({
      recipeTitle: document.getElementById("edit-recipe").value,
      ingredients: document.getElementById("edit-ingredients").value.split("/"),
      steps: document.getElementById("edit-steps").value.split("/")
    });
    localStorage.setItem("_bschade18_recipes", JSON.stringify(updatedRecipes));
    this.setState({
      visibility: false,
      recipes: updatedRecipes,
      currentRecipe: document.getElementById("edit-recipe").value,
      recipeInput: "",
      ingredInput: "",
      stepsInput: ""
    });
  }

  closeVisibility() {
    if (this.state.visibility) {
      this.setState({
        visibility: false
      });
    } else {
      this.setState({
        visibility: true
      });
    }
  }

  setCurrent(e) {
    this.setState({
      currentRecipe: e.target.innerHTML
    });
  }

  handleDelete() {
    let recipes = this.state.recipes;
    let currentRecipe = this.state.currentRecipe;
    let newIndex;

    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].recipeTitle === currentRecipe) {
        newIndex = i - 1;
      }
    }
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    let filter = recipes.filter(recipe => {
      return recipe.recipeTitle !== currentRecipe;
    });

    if (confirmDelete === true) {
      if (newIndex < 0) {
        localStorage.setItem("_bschade18_recipes", JSON.stringify(filter));
        setTimeout(() => {
          this.setState({
            recipes: filter,
            currentRecipe: recipes[1].recipeTitle
          });
        }, 20);
      } else {
        localStorage.setItem("_bschade18_recipes", JSON.stringify(filter));
        setTimeout(() => {
          this.setState({
            recipes: filter,
            currentRecipe: recipes[newIndex].recipeTitle
          });
        }, 20);
      }
    }
  }

  render() {
    let formText =
      this.state.dialogMode === "add"
        ? ["Add Recipe", "Add"]
        : ["Edit Recipe", "Save"];
    let formID = this.state.dialogMode === "add" ? ["add"] : ["edit"];
    let formFunctions =
      this.state.dialogMode === "add" ? this.addRecipe : this.handleEdit;
    return (
      <div>
        <h1 id="title">My Recipes</h1>
        <RecipeList recipes={this.state.recipes} setCurrent={this.setCurrent} />
        <RecipeDisplay
          toggleVisibility={this.toggleVisibility}
          currentRecipe={this.state.currentRecipe}
          recipes={this.state.recipes}
          handleDelete={this.handleDelete}
          handleForm={this.handleFormType}
        />
        <RecipeForm
          addRecipe={this.addRecipe}
          closeVisibility={this.closeVisibility}
          currentRecipe={this.state.currentRecipe}
          dialogMode={this.state.dialogMode}
          editRecipe={this.handleEdit}
          formText={formText}
          formID={formID}
          formFunctions={formFunctions}
          visibility={this.state.visibility}
          recipes={this.state.recipes}
        />
      </div>
    );
  }
}

export default App;
