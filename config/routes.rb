Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static#index'

  namespace :api, defaults: { format: 'json' } do
    get 'greeting', to: 'greetings#index'
  end

end
