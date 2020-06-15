const recipeList = document.querySelector('#recipe-list')

fetch("http://localhost:3000/recipes")
    .then(response => response.json())
    .then(console.log)

function renderRecipe(recipes){
    recipes.forEach(recipe => {
        let li = document.createElement('li')
        li.textContent=recipe.title
        recipeList.append(li)
    })
}

