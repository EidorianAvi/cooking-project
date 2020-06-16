const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('id')


fetch(`http://localhost:3000/users/${user_id}`)
    .then(response => response.json())
    .then(renderFavoriteRecipes)

const favoritesList = document.querySelector('#favorites-list')

function renderFavoriteRecipes(user){
    user.recipes.forEach(recipe => {
        let li = document.createElement('li')
        li.textContent=recipe.title
        favoritesList.append(li)
        console.log(li)
    })
}

fetch("http://localhost:3000/recipes")
    .then(response => response.json())
    .then(addFavoriteCreator)

function addFavoriteCreator(recipes){
    recipeSelection(recipes)
    userIdValue()
}

const recipeSelectBar = document.querySelector('#recipe-selection')

function recipeSelection(recipes){
    recipes.forEach(recipe =>{
        let option = document.createElement('option');
        option.name = "recipe_id";
        option.value = recipe.id;
        option.textContent = recipe.title;
        recipeSelectBar.append(option)
    })
}

const assignUserId = document.querySelector('#assign-user-id')

function userIdValue(){
    assignUserId.value = user_id
    assignUserId.name = "user_id"
}

