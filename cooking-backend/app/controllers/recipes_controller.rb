class RecipesController < ApplicationController
    def index
        if params[:title]
            @recipes = Recipe.where("title LIKE ?", "%#{params[:title]}%")
        elsif params[:ready_in_minutes]
            if params[:ready_in_minutes] == "under_30"
                @recipes = Recipe.where("ready_in_minutes <= 30")
            elsif params[:ready_in_minutes] == "30_60"
                @recipes = Recipe.where("ready_in_minutes > 30 and ready_in_minutes <= 60")
            elsif params[:ready_in_minutes] == "over_60"
                @recipes = Recipe.where("ready_in_minutes > 60")
            end
        elsif params[:user_id]
            @recipes = Recipe.except_favorites params[:user_id]
        else
            @recipes = Recipe.all
        end
        render json: @recipes, include: [:users]
    end
    def show
        @recipe = Recipe.find params[:id]
        render json: @recipe 
    end    
end
