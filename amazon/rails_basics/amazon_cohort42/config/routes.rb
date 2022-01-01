Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get('/',{to: "welcome#home", as: :root})
  get('/about',{to: "welcome#about"})
  get('/contact',{to: "welcome#contact"})
  post("/contact_submit",{to:"welcome#thankyou",as: :contact_submit})
  get("/new_bill",{to:"bills#new_bill"})
  get("/bill", {to: 'bills#result', as: :bill})
  get("/admin/panel", {to: 'welcome#admin'})
  # Labs for rails CRUD
  # get("/products",to:"products#index")
  # get("/products/new",to:"products#new",as: :new_product)
  # post("/products",to:"products#create")

  # get("/products/:id",to:"products#show",as: :product)
  # delete("/products/:id",to:"products#destroy")

  # get("/products/:id/edit",to:"products#edit",as: :edit_product)
  # patch("/products/:id",to:"products#update")

  resources :products do
    resources :reviews, only: [:create, :destroy] do
      resources :likes, shallow: true, only: [:create, :destroy]
      resources :votes, shallow: true, only: [:create, :destroy]
    end
    resources :favourites, shallow: true, only: [:create, :destroy]
  end
  resources :tags, only:[:index]
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]
  resources :news_articles

  match(
    "/delayed_job",
    to: DelayedJobWeb,
    anchor: false,
    via: [:get, :post]
  )

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :products
      resource :session, only: [:create, :destroy]
      resources :users do
        get :current, on: :collection
      end
    end
  end
end
