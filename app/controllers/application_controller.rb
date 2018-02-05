class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :check_login

  protected
  def check_login
    redirect_to :login unless session.has_key?(:user)
  end

  def current_user
    return nil unless session.has_key?(:user)
      @user ||= User.find(session[:user])
  end
end
