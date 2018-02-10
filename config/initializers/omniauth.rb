Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['twitter_key'], ENV['twitter_secret'], {x_auth_access_type: 'write'}
  provider :github, ENV['github_key'], ENV['github_secret'], scope: 'user,repo'
end