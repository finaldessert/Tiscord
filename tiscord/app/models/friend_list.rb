class FriendList < ApplicationRecord

    validates :user_id, :friend_id, presence: true

    belongs_to :user
    
end
