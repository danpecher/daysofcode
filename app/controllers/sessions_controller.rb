class SessionsController < ActionController::Base
  def create
    uid = request.env['omniauth.auth'].uid
    provider = request.env['omniauth.auth'].provider
    column = "#{provider}_uid"
    user = User.find_or_create_by("#{column}": uid)
    session[:user] = user.id
    render html: '<script>window.close()</script>'.html_safe
  end
end