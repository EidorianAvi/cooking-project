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
            <a href=${recipe.recipe_url} target="_blank">See Recipe</a>`
        recipeList.append(li)
    })
}

