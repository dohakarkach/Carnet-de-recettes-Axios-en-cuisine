
// point d'entrée

import { getRecipes } from "./api/recipesApi.js";
import { recipesCard } from "./affichage/recipesUI.js";
import {searchRecipes} from "./api/recipesApi.js"
import { checkform } from "./validation/recipeValidation.js";
import { addRecipe } from "./api/recipesApi.js";
let recipesList = [];
async function init() {
     recipesList = await getRecipes ();
    recipesCard(recipesList);
}
init()


const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", async (event)=>{
event.preventDefault();
let query = searchInput.value;
const recipes = await searchRecipes(query);
   recipesCard(recipes);
})
const recipeName = document.getElementById("recipe-name");
const recipeCuisine = document.getElementById("recipe-cuisine");
const recipeDifficulty = document.getElementById("recipe-difficulty");
const recipeTime = document.getElementById("recipe-time");
const test = document.getElementById("recipes-container")
let form = document.getElementById("recipe-form");
let  button = form.querySelector('button[type ="submit"]');
form.addEventListener("submit",async(event)=>{
 event.preventDefault();

 
 if(!checkform()){
    return;

}
button.disabled = true;

 let recette = {
 name : recipeName.value,
cuisine : recipeCuisine.value,
difficulty : recipeDifficulty.value,
prepTimeMinutes : Number(recipeTime.value),

 } 


 const result = await addRecipe(recette)
 form.reset();
recipesCard(result)
 button.disabled = false;
//recipesList.unshift(result);
// recipesCard(recipesList);
let recipesCount = document.getElementById("recipes-count");
recipesCount.textContent = Number(recipesCount.textContent) + 1
})
