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
}

const recipeList = document.querySelector('#recipe-list')

fetch(recipeUrl)
    .then(response => response.json())
    .then(renderPage)

function renderPage(recipes){
    renderRecipes(recipes)
    editSearchForm()
}

function renderRecipes(recipes){
    recipes.forEach(recipe => {
        let li = document.createElement('li')
        li.innerHTML=
            `<p>${recipe.title}</p>
            <p>Time to prepare: ${recipe.ready_in_minutes} minutes</p>
            <img src="./images/food_id1.jpg"><br>
            <a href=${recipe.recipe_url} target="_blank">See Recipe</a>
            <form action="http://localhost:3000/user_recipes" method="POST">
                <input type="hidden" name="user_id" value=${user_id}>
                <input type="hidden" name="recipe_id" value=${recipe.id}>
                <input type="submit" value="Add to Favorites">
            </form>
            `
        recipeList.append(li)
    })
}

const searchBar = document.querySelector('#search-bar')

function editSearchForm(){
    searchBar.innerHTML = `
        <label>Search Recipes:</label>
        <input type="text" name="title" placeholder="Name of Recipe">
        <input type="hidden" name="user_id" value=${user_id}>
        <input type="submit" value="Search">
        `
}

