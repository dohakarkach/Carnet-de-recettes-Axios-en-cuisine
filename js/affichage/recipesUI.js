let recipesContainer = document.getElementById("recipes-container");
let recipesCount = document.getElementById("recipes-count");

 export function recipesCard(recipes){
   recipesContainer.innerHTML = "";
    if(recipes.length === 0){
        let messagge = document.createElement("p");

        messagge.textContent = "Aucune recette trouvée!";
messagge.className = "text-3xl font-bold text-center text-gray-700 mt-10";
recipesContainer.appendChild(messagge);
        return;
    }
    recipesCount.textContent = `${recipes.length}`
recipesCount.className = "inline-block border border-gray-400 rounded-lg px-4 py-2 text-gray-700 font-semibold mb-6";
    recipes.forEach((recipe)=>{

let card = document.createElement("div");
card.className = "bg-white rounded-xl shadow-md p-4";


let image = document.createElement("img")
image.src = recipe.image;
image.alt = recipe.name;
image.classList.add("w-full", "h-48", "object-cover", "rounded-lg");


card.appendChild(image);
let titre = document.createElement("h2");
titre.textContent = recipe.name;
titre.classList.add ("text-xl", "font-bold", "mt-3");
card.appendChild(titre);
let cuisine = document.createElement("p");
cuisine.textContent = `cuisine : ${recipe.cuisine}`;
cuisine.classList.add("text-gray-600", "mt-2");
card.appendChild(cuisine);
let difficulty = document.createElement("p");
difficulty.textContent = `Difficulté : ${recipe.difficulty}`;
difficulty.classList.add("text-gray-600", "mt-2");

card.appendChild(difficulty);
let prepTime = document.createElement("p");
prepTime.textContent = `Temps de préparation : ${recipe.prepTimeMinutes} minutes`;
prepTime.classList.add("text-gray-600", "mt-2");

card.appendChild(prepTime);
let button = document.createElement("button");
button.textContent = "supprimer";
button.classList.add(
    "bg-red-600",
    "text-white",
    "px-2",
    "py-1",
    "text-sm",
    "rounded-lg",
    "hover:bg-red-700",
    "transition"
);
card.appendChild(button);
button.addEventListener("click",()=>{
     let reponse = confirm("Voulez-vous vraiment supprimer cette recette ?");
     if(reponse){
 let newRecipes = recipes.filter(item => item.id !== recipe.id);
   recipesCard(newRecipes);}

})


recipesContainer.appendChild(card)


    })

 }