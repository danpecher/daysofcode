class SessionsController < ActionController::Base
  def create
    uid = request.env['omniauth.auth'].uid
    provider = request.env['omniauth.auth'].provider
    column = "#{provider}_uid"
    current_user = begin
      session.has_key?(:user) ? User.find(session[:user]) : User.create
    rescue ActiveRecord::RecordNotFound
      User.create
    end
    current_user.update_attributes("#{column}": uid, "#{provider}_token": request.env['omniauth.auth'].credentials.token)
    current_user.update_attribute(:twitter_token_secret, request.env['omniauth.auth'].credentials.secret) if provider === 'twitter'
    session[:user] = current_user.id
    authenticated = true
    render html: "<script>window.opener.authSuccess = #{authenticated}; window.close()</script>".html_safe
  end
end