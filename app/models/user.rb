class User < ApplicationRecord
  def has_posted_today
    Post.where("user_id = ? AND created_at >= ? AND created_at < ?", self.id, Time.now.strftime('%F 00:00:00'), (Time.now + 1.day).strftime('%F 00:00:00')).present?
  end
end