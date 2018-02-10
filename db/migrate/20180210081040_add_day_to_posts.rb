class AddDayToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :day, :integer
    add_column :posts, :round, :integer
  end
end
