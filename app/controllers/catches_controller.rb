class CatchesController < ApplicationController
#CREATE
    #new
get "/catches/new" do
        erb :'/catches/new'
    end

    #create
    post '/catches' do
        new_catch = Catch.new(params)
        #*
        if new_catch.save
  
            redirect "/catches"
        else
             # @error = "Please fill in all information."
              redirect "/catches/new"
        end
        
    end
#READ
    #index
get "/catches" do
    @catches = Catch.all.reverse
    erb :'catches/index'
end

    #show
get "/catches/:id" do
     @catch = Catch.find(params[:id])
    erb :'catches/show'
end

#UPDATE
    #edit
get "/catches/:id/edit" do
    @catch = Catch.find(params[:id])

    erb :'/catches/edit'
end
    #patch
    patch '/catches/:id' do

         @catch = Catch.find(params[:id])
        
            if !params["name"].empty? && !params["image"].empty? && !params["length"].empty? && !params["weight"].empty? 
  
              @catch.update(name: params[:name],image: params[:image],length: params[:length], weight: params[:weight])
  
              redirect "/catches/#{params[:id]} "
         else
               redirect "/users/#{current_user.id}"  
          end
           
    end

#DESTROY
    #delete

end