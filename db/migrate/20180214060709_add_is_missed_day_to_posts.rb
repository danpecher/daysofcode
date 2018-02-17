class AddIsMissedDayToPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :missed_day, :boolean
  end
end
