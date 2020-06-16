
UserRecipe.destroy_all
Recipe.destroy_all
User.destroy_all


response = Excon.get "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=40&offset=0&type=main+course&query=dinner",
    headers:{
        "X-RapidAPI-Host" => "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key" => ENV['spoonacular_api_key']
}




    json = JSON.parse(response.body)['results']
    json.each do |recipe|
        Recipe.create(title:recipe['title'], ready_in_minutes:recipe['readyInMinutes'], recipe_url:recipe['sourceUrl'], image:recipe['image'])
        
    end