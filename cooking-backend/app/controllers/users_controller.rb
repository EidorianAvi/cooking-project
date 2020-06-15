class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users, include:[:recipes]
    end
    def show
        @user = User.find params[:id]
        render json: @user, include:[:recipes]
    end
    def create
        @user = User.create(
            name: params[:name],
            age: params[:age]
        )
        redirect_to "http://localhost:3001/show.html"
    end
end
