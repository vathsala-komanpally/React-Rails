Rails.application.routes.draw do
  namespace :api do
    # get '/groceries', to: 'groceries#index'
    resources :items
    resources :foods
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
