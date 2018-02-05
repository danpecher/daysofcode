Rails.application.routes.draw do
  root 'timeline#index'
  get '/login', to: 'sessions#index', as: :login
  get '/auth/:provider/callback', to: 'sessions#create'
  resources :posts
end
