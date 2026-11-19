
// point d'entrée

import { getRecipes } from "./api/recipesApi.js";
import { recipesCard } from "./affichage/recipesUI.js";
import {searchRecipes} from "./api/recipesApi.js"
import { checkform } from "./validation/recipeValidation.js";
async function init (){
    const recipes = await getRecipes();
    recipesCard(recipes);
}
init()
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", async(event)=>{
    event.preventDefault();
 const query = searchInput.value;
 const recipes = await searchRecipes(query);

recipesCard(recipes);

})
let form = document.getElementById("recipe-form");
form.addEventListener("submit",(event)=>{
      event.preventDefault();
  
    if (!checkform()) {
    return;
}
    // console.log("Submit fonctionne !");
}) 
