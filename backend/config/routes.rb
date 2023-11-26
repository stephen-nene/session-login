Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  scope "/api" do
        
    resources :users


    get "/me", to: "sessions#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post '/create', to: 'sessions#new'

    root "application#index"

    # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
    # Can be used by load balancers and uptime monitors to verify that the app is live.
    get "up" => "rails/health#show", as: :rails_health_check


  end

  get '*path', to: 'application#index', constraints: -> (req) { !req.xhr? && req.format.html? }


end
