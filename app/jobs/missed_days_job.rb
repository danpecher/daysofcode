class MissedDaysJob < ApplicationJob
  queue_as :default

  def perform
    sql = <<-SQL
      SELECT
        user_id
      FROM (
             SELECT
               count(p.id) AS cnt,
               users.id    AS user_id
             FROM users
               LEFT JOIN posts p ON users.id = p.user_id
                                    AND p.created_at BETWEEN '#{Time.zone.now.midnight}' AND '#{(Time.zone.now + 1.day).midnight}'
             GROUP BY users.id
           ) AS result
      WHERE cnt = 0
    SQL

    user_ids_who_havent_posted_today = ActiveRecord::Base.connection.execute(sql).values.flatten
    user_ids_who_havent_posted_today.each {|id| Post.create({
        user_id: id,
        missed_day: true
    })}
  end
end