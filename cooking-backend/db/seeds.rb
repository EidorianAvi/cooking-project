# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
response = Excon.get "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=40&offset=0&type=main+course&query=dinner",
    headers:{
        "X-RapidAPI-Host" => "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key" => ENV['API_KEY']
    }

    
    json = JSON.parse(response.body)['results']
    json.each do |recipe|
        Recipe.create(title:recipe['title'], ready_in_minutes:recipe['readyInMinutes'], recipe_url:recipe['sourceUrl'], image:recipe['image'])
        
    end