class ReposController < ApplicationController
  def has_repo
    client = Octokit::Client.new(access_token: current_user.github_token)
    has_repo = current_user.has_repo
    unless has_repo
      has_repo = client.repos.find {|repo| repo.name === '100-days-of-code'}.present?
      current_user.update_attribute(:has_repo, has_repo)
    end
    render json: {
        hasRepo: has_repo
    }
  end
end