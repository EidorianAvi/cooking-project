const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('id')


fetch("http://localhost:3000/user_recipes")
    .then(response => response.json())
    .then(handleData)

function handleData(UserRecipes){
    renderFavoriteRecipes(UserRecipes)
    linkToUserPage()
    linkToShowPage()
}

const favoritesList = document.querySelector('#favorites-list')

function renderFavoriteRecipes(UserRecipes) {
    UserRecipes.forEach(UserRecipe => {
        if (UserRecipe.user.id == user_id) {  
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
            }
        })
        emptyFavoritesList()
    }

function emptyFavoritesList() {
    if (!document.querySelector('.scene')) {
        let h2 = document.createElement('h2')
        h2.id = 'empty-list'
        h2.textContent = "You don't currently have any favorites. Please click 'View More Recipes' below."
        document.body.appendChild(h2)
    }
}




const footer = document.querySelector('footer')

function linkToShowPage() {
    const link = document.createElement('a')
    link.id = "recipe-link"
    link.textContent = "View More Recipes"
    link.href = `show.html?user_id=${user_id}`
    footer.append(link)
}

function linkToUserPage(){
    const userLink = document.createElement('a')
    userLink.id = "user-link"
    userLink.textContent = "User Selection"
    userLink.href = `user_select.html`
    footer.append(userLink)
}



