class AddGithubRepoToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :has_repo, :boolean
  end
end
