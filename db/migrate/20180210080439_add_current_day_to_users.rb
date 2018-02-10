class AddCurrentDayToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :current_day, :integer
    add_column :users, :current_round, :integer
  end
end
