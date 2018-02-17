class Post < ApplicationRecord
  belongs_to :user

  def self.timeline(user)
    where(user: user).order(created_at: :desc)
  end

  def self.create_and_share(params, user)
    user.increment!(:current_day)
    round = user.current_round
    day = user.current_day
    post = create(params.merge({user: user, day: day, round: round}))

    twitter_msg = "R#{round}D#{day} #{post.content} #100DaysOfCode"
    twitter = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV['TWITTER_KEY']
      config.consumer_secret     = ENV['TWITTER_SECRET']
      config.access_token        = user.twitter_token
      config.access_token_secret = user.twitter_token_secret
    end
    twitter.update(twitter_msg)

    github = Octokit::Client.new(access_token: user.github_token)
    repo = "#{user.github_username}/100-days-of-code"
    filename = "r#{round}-log.md"
    file = github.contents(repo, path: filename)
    current_day = "R#{round}D#{day}"
    github.update_contents(repo, filename, current_day, file.sha, Base64.decode64(file.content).force_encoding('UTF-8') + "\n\n### #{current_day}\n#{params[:content]}")

    post
  end
end