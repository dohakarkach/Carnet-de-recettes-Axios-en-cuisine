import api from "./axios.js";
 export async function getRecipes (){
    const response = await api.get ("/recipes?limit=12");
    return response.data.recipes ;
}
// searchRecipes("pizza")
export async function searchRecipes (query){
    const response = await api.get ("/recipes/search",{
        params:{
            q:query
        }
        
    })
    return response.data.recipes;
}
export async function addRecipe(recipe) {
    const response = await api.post("/recipes/add", recipe);
    return response.data;
}