class CreateFriendLists < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_lists do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.timestamps
    end
    add_index :friend_lists, :user_id
    add_index :friend_lists, :friend_id
  end
end
