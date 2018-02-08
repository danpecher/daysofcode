Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['twitter_key', 'twitter_secret']
  provider :github, ENV['github_key', 'github_secret']
end