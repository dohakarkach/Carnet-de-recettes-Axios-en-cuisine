let recipeForm = document.getElementById("recipe-form");
let recipeName = document.getElementById("recipe-name");
let recipeCuisine = document.getElementById("recipe-cuisine");
let recipeDifficulty = document.getElementById("recipe-difficulty");
let recipeTime = document.getElementById("recipe-time"); 



let  message = document.createElement("p");
message.classList.add("text-red-600", "text-sm", "mt-1");
let messageCuisine = document.createElement("p");
messageCuisine.classList.add("text-red-600", "text-sm", "mt-1");
let messageDifficulty = document.createElement("p");
messageDifficulty.classList.add("text-red-600", "text-sm", "mt-1");
let messageTime = document.createElement("p");
messageTime.classList.add("text-red-600", "text-sm", "mt-1");
 export function checkform(){
    if(recipeName.value.trim().length < 3 || recipeName.value.trim().length >60){
       
        message.textContent = "invalide";
        recipeName.insertAdjacentElement("afterend", message);
        // insertAdjacentElement permet d'ajouter un element dan html
        // afterend place le judte apres  l'élement actuel
    }
    if(recipeCuisine.value.trim() === ""){
         messageCuisine.textContent = "Veuillez saisir la cuisine.";
recipeCuisine.insertAdjacentElement("afterend", messageCuisine);    }
    if(recipeDifficulty.value === ""){
        messageDifficulty.textContent = "Veuillez saisir la Difficulty."
recipeDifficulty.insertAdjacentElement("afterend", messageDifficulty);    }
    if(recipeTime.value === "" || recipeTime.value >300 || recipeTime.value < 1){
  messageTime.textContent = "Le temps doit être entre 1 et 300 minutes.";
recipeTime.insertAdjacentElement("afterend", messageTime);    }
}
