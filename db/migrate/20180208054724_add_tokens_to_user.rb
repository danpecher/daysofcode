class AddTokensToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :twitter_token, :string
    add_column :users, :twitter_token_secret, :string
    add_column :users, :github_token, :string
  end
end
