const recipeList = document.querySelector('#recipe-list')

fetch("http://localhost:3000/recipes")
    .then(response => response.json())
    .then(result => renderRecipe(result))

function renderRecipe(recipes){
    recipes.forEach(recipe => {
        let li = document.createElement('li')
        li.innerHTML=`<img src="./images/food_id1.jpg">`
        recipeList.append(li)
    })
}