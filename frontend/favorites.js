const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('id')


// fetch(`http://localhost:3000/users/${user_id}`)
//     .then(response => response.json())
//     .then(renderFavoriteRecipes)




fetch("http://localhost:3000/user_recipes")
    .then(response => response.json())
    .then(renderFavoriteRecipes)


const favoritesList = document.querySelector('#favorites-list')

function renderFavoriteRecipes(UserRecipes) {
    console.log(UserRecipes)
    UserRecipes.forEach(UserRecipe => {
        if (UserRecipe.user.id == user_id){
            console.log(UserRecipe.recipe)
            let li = document.createElement('li')
            li.innerHTML = `<form action="http://localhost:3000/user_recipes/${UserRecipe.id}"  method="POST">
            ${UserRecipe.recipe.title}
            <input type="hidden" name="_method" value="delete">
            <input type="submit" value="Delete">
            </form>`
            favoritesList.append(li)
    }})
}




// const recipeSelectBar = document.querySelector('#recipe-selection')

// function recipeDeleteBar(UserRecipes){
//     console.log(UserRecipes)
//     UserRecipes.forEach(UserRecipe =>{
//         let option = document.createElement('option');
//         option.name = 'id';
//         option.value = UserRecipe.id;
//         option.textContent = UserRecipe.recipe.title;
//         recipeSelectBar.append(option)
//     })
// }


// fetch("http://localhost:3000/recipes")
//     .then(response => response.json())
//     .then(addFavoriteCreator)

// function addFavoriteCreator(recipes){
//     recipeSelection(recipes)
//     userIdValue()
// }


// const assignUserId = document.querySelector('#assign-user-id')

// function userIdValue(){
//     assignUserId.value = user_id
//     assignUserId.name = "user_id"
// }

