Rails.application.routes.draw do
  namespace :api do
    post '/auth/login', to: 'auth#login'
    resources :items
    resources :users
    resources :foods
    resources :drinks
    resources :desserts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
