class Friend < ApplicationRecord

    validates :user_id, :buddy_id, presence: true
    belongs_to :user

end
