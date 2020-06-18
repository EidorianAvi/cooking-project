
# Recipe Rolodex
Your personal tool in finding and storing your favorite recipes.


## Table of Contents
* [General Info](#general-info)
* [Inspiration](#inspiration)
* [Demonstration Video](#demonstration-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Example Code](#example-code)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)
* [License](#license)


## General Info
Recipe Rolodex is an online resource for browsing new and delicious recipes. It's also able to store your personal favorites for later cookin.

## Inspiration 
We were inspired by our love for cooking and the desire for ease of access to new and exciting recipes.

## Demonstration Video
[Recipe Rolodex Youtube Demonstation](https://youtu.be/MuA3Xw_02P4)

## Technologies 
* Ruby - version 2.6.1
* Rails - version 6.0.3, >= 6.0.3.1
* HTML5
* CSS3 
* Javascript - version 1.8.5


## Setup 
To get Recipe Rolodex installed and running clone the Github Repository into your directory and input into your terminal:
```ruby
cd cooking-backend
```
Followed by:
```ruby
bundle install
```
After that make sure to migrate and seed your database:
```ruby
rails db:migrate
rails db:seed
```
And to get the program running execute in backend:
```ruby
rails s
```
And in frontend:
```ruby
lite-server
```
## Example Code
```ruby
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


    def self.except_favorites user_id
        favorites = UserRecipe.where("user_id = #{user_id}")
        favorite_recipe_ids = favorites.map(&:recipe_id)
        not_favorites = Recipe.all.select do |recipe|
            !favorite_recipe_ids.include?(recipe.id)
        end
        not_favorites
    end
```

## Features
Current Features:
* Create and select a user
* View recipes and add favorites from selection 
* View and delete from favorites
* Filter all recipes by name or cook time
* Database seeded from spoonacular API

Future Features:
* Create live integration with API for larger selection
* More intricate search features to accommodate different dietary needs
* Add login authentication
* Ability to add personal recipes

## Status
The application is fully functional and ready to be enjoyed at current status. Future updates and improvements are still a possibility for future renditions.

## Contact
Created by [Haley Kelling](https://www.linkedin.com/in/haley-kelling/) and [Adrian Avila](reneavila1993@gmail.com).

If you have any questions or comments feel free to reach out to us and thank you for your time.

## License 
[Click to view](https://github.com/EidorianAvi/cooking-project/blob/master/LICENSE)

