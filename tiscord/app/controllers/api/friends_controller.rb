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

    def destroy
        @friend = current_user.friends.find_by(params[:friend][:username])
        if @friend.destroy
            flash[:success] = ["Successfully added"]
        else
            render json: ["Error, Friend not found"]
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:username, :email, :user_info)
    end
end
