const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('id')


fetch("http://localhost:3000/user_recipes")
    .then(response => response.json())
    .then(handleData)

function handleData(UserRecipes){
    renderFavoriteRecipes(UserRecipes)
    linkToShowPage()
}

const favoritesList = document.querySelector('#favorites-list')

function renderFavoriteRecipes(UserRecipes) {
    UserRecipes.forEach(UserRecipe => {
        if (UserRecipe.user.id == user_id){
            let li = document.createElement('li')
            li.innerHTML = `
                <div class="scene">
                <div class="card">
                    <div class="card__face card__face--front">
                        <p>${UserRecipe.recipe.title}</p>
                        <img src="https://spoonacular.com/recipeImages/${UserRecipe.recipe.image}" onerror="javascript:this.src='./images/top-view-of-food.jpg'" alt="No Image Available"><br>
                    </div>
                     <div class="card__face card__face--back">
                            <p>Time to prepare: ${UserRecipe.recipe.ready_in_minutes} minutes</p>
                            <a href=${UserRecipe.recipe.recipe_url} target="_blank">See Recipe</a>
                            
                            <form action="http://localhost:3000/user_recipes/${UserRecipe.id}"  method="POST">
                                <input type="hidden" name="_method" value="delete">
                                <button type="submit"><i class="fas fa-bookmark"></i></button>
                            </form>
                     </div>
                </div>
                </div>`
            favoritesList.append(li)
    }})
}



const footer = document.querySelector('footer')

function linkToShowPage() {
    const link = document.createElement('a')
    link.id = "recipe-link"
    link.textContent = "View More Recipes"
    link.href = `show.html?user_id=${user_id}`
    footer.append(link)
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

