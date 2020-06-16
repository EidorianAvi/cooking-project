const searchParams = new URLSearchParams(window.location.search)
const user_id = searchParams.get('user_id')
console.log(user_id)

const recipeList = document.querySelector('#recipe-list')

fetch("http://localhost:3000/recipes")
    .then(response => response.json())
    .then(renderRecipes)

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

