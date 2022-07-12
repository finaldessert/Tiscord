class Api::FriendsController < ApplicationController
    def index
        @friends = Friend.where(:user_id => current_user.id) #we can use this to grab all friends of current user for friends nav bar
    end

    def show
    end

    def create
        @friend = current_user.friends.build(friend_params)
        if @friend.save
            flash[:success] = ["Successfully added"]
        else
            render json: ["Error, Try again later"]
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:username, :email)
    end
end
