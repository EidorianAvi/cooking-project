class UserRecipesController < ApplicationController
    def create
        UserRecipe.create(
            user_id: params[:user_id],
            recipe_id: params[:recipe_id]
        )
        redirect_back fallback_location: "http://localhost:3001/favorites.html"
    end
end
