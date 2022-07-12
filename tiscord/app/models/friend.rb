class Friend < ApplicationRecord
    belongs_to :user

    validates :username, :email, presence: true, uniqueness: true
end
