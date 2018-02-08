class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :check_login
  helper_method :current_user

  protected
  def check_login
    redirect_to :login unless session.has_key?(:user)
  end

  def current_user
    return nil unless session.has_key?(:user)
      @user ||= User.find(session[:user])
  rescue ActiveRecord::RecordNotFound
      nil
  end

  def is_authenticated
    current_user&.twitter_uid && current_user.github_uid
  end
end
