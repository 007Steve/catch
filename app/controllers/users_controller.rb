class UsersController < ApplicationController
#SIGNUP
get "/signup" do
    erb :'users/signup'
end
post "/signup" do
    user = User.new(params)
    if user.save
     session[:user_id] = user.id
          redirect '/catches'
    else
        erb :'users/signup'
    end
end
#LOGIN
end