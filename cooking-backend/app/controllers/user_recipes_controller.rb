class UserRecipesController < ApplicationController
    def create
        user_id = params[:user_id]
        UserRecipe.create(
            user_id: params[:user_id],
            recipe_id: params[:recipe_id]
        )
        redirect_back fallback_location: "http://localhost:3001/favorites.html?user_id=#{user_id}"
    end

    def destroy
        @user_recipe = UserRecipe.find params[:id]
        @user_recipe.destroy
        redirect_back fallback_location: "http://localhost:3001/user.html"
    end

    def index
        @user_recipes = UserRecipe.all
        render json: @user_recipes, include: [:user, :recipe]
    end

end
