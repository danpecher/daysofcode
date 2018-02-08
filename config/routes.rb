Rails.application.routes.draw do
  root 'timeline#index'
  get '/login', to: 'sessions#index', as: :login
  get '/auth/:provider/callback', to: 'sessions#create'
  resources :posts
  get 'has-repo', to: 'repos#has_repo'
end
