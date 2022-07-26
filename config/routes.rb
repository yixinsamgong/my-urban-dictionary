Rails.application.routes.draw do
  #login/signup
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  #User
  post "/users/:user_id/words", to: "users#words_create"
  get "/users/:user_id/words", to: "users#user_words_index"
  get "/users/:user_id/userwords", to: "users#user_userwords_index"
  

  #Words
  get "/words", to: "words#index"
  get "/words/:id", to: "words#show"

  #Userwords
  get "/userwords", to: "userwords#index"
  get "/userwords/:userword_id/tags", to:"userwords#userword_tags_index"
  post "/userwords", to: "userwords#create"
  delete "/userwords/:id", to: "userwords#destroy"

  #Tag
  get "/tags", to: "tags#index"
  
  #WordTag
  get "/wordtags", to: "word_tags#index"
  post "/wordtags/:userword_id", to: "userwords#tags_create"
  delete "/wordtags/:id", to: "word_tags#destroy"

  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
