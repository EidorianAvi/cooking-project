class Recipe < ApplicationRecord
    has_many :user_recipes
    has_many :users, through: :user_recipes

    def self.except_favorites user_id
        favorites = UserRecipe.where("user_id = #{user_id}")
        favorite_recipe_ids = favorites.map(&:recipe_id)
        not_favorites = Recipe.all.select do |recipe|
            !favorite_recipe_ids.include?(recipe.id)
        end
        not_favorites
    end
    

end
