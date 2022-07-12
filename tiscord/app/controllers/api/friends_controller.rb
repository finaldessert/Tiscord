class Api::FriendsController < ApplicationController
    def index
        @friends = Friend.where(:user_id => current_user.id) #we can use this to grab all friends of current user for friends nav bar
    end

    def create
        
    end
end
