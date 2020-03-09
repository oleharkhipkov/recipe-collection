import React from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDisplay from "./components/RecipeDisplay";
import RecipeForm from "./components/RecipeForm";

let starter = [
  {
    recipeTitle: "Cookies",
    recipeIngredients: ["Eggs", "Flour", "Cookie mix"],
    recipeSteps: [
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
      recipes: JSON.parse(localStorage.getItem("_bschade18_recipes")),
      currentRecipe: "",
      recipeTitle: "",
      recipeIngredients: "",
      recipeSteps: "",
      visibility: false,
      dialogMode: ""
    };
  }

  componentDidMount() {
    let recipes = JSON.parse(localStorage.getItem("_bschade18_recipes"));

    if (recipes.length > 0) {
      let recipe = recipes[0].recipeTitle;

      this.setState({
        currentRecipe: recipe
      });
    }
  }

  addRecipe = () => {
    const recipeList = this.state.recipes;
    for (var i = 0; i < recipeList.length; i++) {
      if (
        recipeList[i].recipeTitle.toLowerCase() ===
        this.state.recipeTitle.toLowerCase()
      ) {
        alert("That recipe already exists");
        return;
      } else if (this.state.recipeTitle === "") {
        alert("Enter a recipe name");
        return;
      }
      let updatedRecipes = recipeList.concat({
        recipeTitle: this.state.recipeTitle,
        recipeIngredients: this.state.recipeIngredients.split("/"),
        recipeSteps: this.state.recipeSteps.split("/")
      });
      localStorage.setItem(
        "_bschade18_recipes",
        JSON.stringify(updatedRecipes)
      );
      this.setState({
        visibility: false,
        recipes: updatedRecipes,
        currentRecipe: this.state.recipeTitle,
        recipeTitle: "",
        recipeIngredients: "",
        recipeSteps: ""
      });
    }
  };

  handleEdit = () => {
    const recipeList = this.state.recipes.filter(recipe => {
      return this.state.currentRecipe !== recipe.recipeTitle;
    });
    const updatedList = recipeList.concat({
      recipeTitle: this.state.recipeTitle,
      recipeIngredients: this.state.recipeIngredients.split("/"),
      recipeSteps: this.state.recipeSteps.split("/")
    });

    localStorage.setItem("_bschade18_recipes", JSON.stringify(updatedList));
    this.setState({
      recipes: updatedList,
      visibility: false,
      recipeTitle: "",
      recipeIngredients: "",
      recipeSteps: ""
    });
  };

  handleDelete = () => {
    const recipes = this.state.recipes;
    let newIndex;

    for (var i = 0; i < recipes.length; i++) {
      if (recipes[i].recipeTitle === this.state.currentRecipe) {
        newIndex = i;
      }
    }
    let confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    let filter = recipes.filter(recipe => {
      return recipe.recipeTitle !== this.state.currentRecipe;
    });

    newIndex = newIndex === 0 ? 1 : newIndex - 1;

    if (confirmDelete === true) {
      if (recipes.length === 0) {
        localStorage.setItem("_bschade18_recipes", JSON.stringify(filter));
        this.setState({
          currentRecipe: ""
        });
      }
      localStorage.setItem("_bschade18_recipes", JSON.stringify(filter));
      this.setState({
        recipes: filter,
        currentRecipe: recipes[newIndex].recipeTitle
      });
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  fillForm = () => {
    const formRecipe = this.state.recipes.filter(recipe => {
      return recipe.recipeTitle === this.state.currentRecipe;
    });

    this.setState({
      recipeTitle: formRecipe[0].recipeTitle,
      recipeIngredients: formRecipe[0].recipeIngredients.join(" / "),
      recipeSteps: formRecipe[0].recipeSteps.join(" / ")
    });
  };

  handleFormType = e => {
    if (e.target.id === "edit") {
      this.setState({
        dialogMode: "edit",
        visibility: true
      });
      this.fillForm();
    } else {
      this.setState({
        dialogMode: "add",
        visibility: true
      });
    }
  };

  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility,
      recipeTitle: "",
      recipeIngredients: "",
      recipeSteps: ""
    });
  };

  setCurrent = e => {
    this.setState({
      currentRecipe: e.target.innerHTML
    });
  };

  render() {
    let pageMask = {
      display: "none",
      background: "rgba(0, 0, 0, 0.4)",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1
    };

    if (this.state.visibility) {
      pageMask = {
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1
      };
    }
    return (
      <div id="App">
        <h1 id="title">My Recipes</h1>
        <RecipeForm
          recipes={this.state.recipes}
          recipeTitle={this.state.recipeTitle}
          recipeIngredients={this.state.recipeIngredients}
          recipeSteps={this.state.recipeSteps}
          currentRecipe={this.state.currentRecipe}
          addRecipe={this.addRecipe}
          editRecipe={this.handleEdit}
          toggleVisibility={this.toggleVisibility}
          visibility={this.state.visibility}
          dialogMode={this.state.dialogMode}
          onChange={this.onChange}
          handleEdit={this.handleEdit}
        />
        <RecipeList recipes={this.state.recipes} setCurrent={this.setCurrent} />
        <RecipeDisplay
          recipes={this.state.recipes}
          currentRecipe={this.state.currentRecipe}
          handleDelete={this.handleDelete}
          handleForm={this.handleFormType}
        />

        <div style={pageMask}></div>
      </div>
    );
  }
}

export default App;
