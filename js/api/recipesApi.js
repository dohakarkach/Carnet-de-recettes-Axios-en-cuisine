import api from "./axios.js";
 export async function getRecipes (){
    const response = await api.get ("/recipes?limit=12");
    return response.data.recipes ;
}
// searchRecipes("pizza")
export async function searchRecipes(query) {
    const result = await api.get("/recipes/search",{
params:{
    q:query
}

    });
   return result.data.recipes

}
export  async function addRecipe(recipe) {
   const resultat = await api.post("/recipes/add", recipe);
   console.log("card", resultat.data)
   return [resultat.data];
}
