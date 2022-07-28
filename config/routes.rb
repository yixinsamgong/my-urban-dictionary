Rails.application.routes.draw do
  #login/signup
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #User
  post "users/:user_id/words", to: "users#words_create"
  get "users/:user_id/words", to: "users#user_words_index"

  #Words
  get "/words", to: "words#index"
  get "/words/:id", to: "words#show"

  #Userwords
  get "/userwords", to: "userwords#index"
  post "/userwords", to: "userwords#create"
  delete "/userwords/:id", to: "userwords#destroy"

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
