class RecipesController < ApplicationController
    def index
        @recipes = Recipe.all
        render json: @recipes, include: [:users]
    end
    def show
        @recipe = Recipe.find params[:id]
        render json: @recipe 
    end    
end
