
// point d'entrée

import { getRecipes } from "./api/recipesApi.js";
import { recipesCard } from "./affichage/recipesUI.js";
import { searchRecipes } from "./api/recipesApi.js";
import { checkform } from "./validation/recipeValidation.js";
import { addRecipe } from "./api/recipesApi.js";
import {deleteRecipe} from "./api/recipesApi.js";
let recipesList = [];
async function init() {
     recipesList = await getRecipes ();
recipesCard(recipesList, supprimerRecette);}
init()


const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", async (event)=>{
event.preventDefault();
let query = searchInput.value;
const recipes = await searchRecipes(query);
// console.log("Résultats recherche :", recipes);
recipesCard(recipes, supprimerRecette);})
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

try
{ 
    const result = await addRecipe(recette);
    console.log("Resultat API:",result);
    
      recipesList.unshift(result);
    recipesCard(recipesList , supprimerRecette);
let successMessage = document.getElementById("success-message");
 successMessage.textContent = "Recette ajoutée avec succès !";

successMessage.classList.remove("hidden");


 form.reset();
}catch(error){
console.error("Erreur :" , error);
console.log("status ; ", error.responde?.status);
console.log("Message :" , error.message);


}finally{


 button.disabled = false;

}
})
async function supprimerRecette(id) {
    await deleteRecipe(id);
    recipesList = recipesList.filter(recipe => recipe.id !== id);
recipesCard(recipesList, supprimerRecette);
}
