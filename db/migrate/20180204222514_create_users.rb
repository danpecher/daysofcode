class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :github_uid
      t.string :twitter_uid
    end
  end
end
