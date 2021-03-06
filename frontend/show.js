const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('user_id')
const titleSearch = searchParams.get('title')
const timeSearch = searchParams.get('ready_in_minutes')

const baseUrl = "http://localhost:3000/"
let recipeUrl = `${baseUrl}/recipes`

if (titleSearch) {
    recipeUrl = `${recipeUrl}?title=${titleSearch}`
} else if (timeSearch) {
    recipeUrl = `${recipeUrl}?ready_in_minutes=${timeSearch}`
} else if (user_id) {
    recipeUrl = `${recipeUrl}?user_id=${user_id}`
}

const recipeList = document.querySelector('#recipe-list')

fetch(recipeUrl)
    .then(response => response.json())
    .then(renderPage)

function renderPage(recipes){
    renderRecipes(recipes)
    editSearchForm()
    editTimeSearch()
    backToFavorite()
}

function renderRecipes(recipes){
    recipes.forEach(recipe => {
        let li = document.createElement('li')
        li.innerHTML=
            `<div class="scene">
             <div class="card">
                <div class="card__face card__face--front">
                    <p>${recipe.title}</p> 
                    <img src="https://spoonacular.com/recipeImages/${recipe.image}" onerror="javascript:this.src='./images/food-icon.png'" alt="No Image Available"><br>
                </div>
                <div class="card__face card__face--back">
                    <p>Time to prepare: ${recipe.ready_in_minutes} minutes</p>
                    <a href=${recipe.recipe_url} target="_blank">See Recipe</a>
                    <form action="http://localhost:3000/user_recipes" method="POST">
                        <input type="hidden" name="user_id" value=${user_id}>
                        <input type="hidden" name="recipe_id" value=${recipe.id}>
                        <button type="submit"><i class="far fa-bookmark"></i></button>
                    </form>
                </div>
             </div>
             </div>
            `
        recipeList.append(li)
    })
}

const searchBar = document.querySelector('#search-bar')

function editSearchForm(){
    searchBar.innerHTML = `
        <label>Search Recipes:</label>
        <input type="text" name="title" placeholder="By Name">
        <input type="hidden" name="user_id" value=${user_id}>
        <input type="submit" value="Search">
        `
}

const timeSearchBar = document.querySelector('#select-time-bar')

function editTimeSearch(){
    const hiddenInput = document.createElement('input')
    hiddenInput.type="hidden"
    hiddenInput.name="user_id"
    hiddenInput.value=user_id
    timeSearchBar.appendChild(hiddenInput)
}

function backToFavorite(){
    const linkFavorite = document.querySelector('#favorite-link')
    linkFavorite.href = `http://localhost:3001/favorites.html?id=${user_id}`
}