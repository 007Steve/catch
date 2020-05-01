class CatchesController < ApplicationController
#CREATE
    #new
 get "/catches/new" do
    if logged_in?
        erb :'/catches/new'
    else
        redirect '/login'
    end
 end

    #create
    post '/catches' do
        
        new_catch = Catch.new(params)
        #*
        if new_catch.save
  
            redirect "/catches"
        else
             
              redirect "/catches/new"
        end
        
    end
 #READ
    #index
 get "/catches" do
    
    if logged_in?
        @catches = Catch.all.reverse
        erb :'catches/index'
    else
       redirect 'login'
    end
 end

    #show
    
 get "/catches/:id" do
    if logged_in?
         @catch = Catch.find(params[:id])
        
        erb :'catches/show'
    else
        redirect '/login'
    end
 end

 #UPDATE
    #edit
 get "/catches/:id/edit" do
    user = User.all
    @catch = Catch.find(params[:id])
    #if current_user.id == @catch.user.id
        
        erb :'/catches/edit'
    #else
        #redirect'/catches'
    #end
end        
    #patch
    patch '/catches/:id' do

         @catch = Catch.find(params[:id])
        
            if !params["name"].empty? && !params["image"].empty? && !params["length"].empty? && !params["weight"].empty? 
  
              @catch.update(name: params[:name],image: params[:image],length: params[:length], weight: params[:weight])
  
              redirect "/catches/#{params[:id]} "
         else
               redirect "/catches/edit"
          end
           
    end

#DESTROY
    #delete
    delete "/catches/:id" do 
        user = User.all
         @catch = Catch.find(params[:id])
         #if @catch.user.id == current_user.id
            @catch.destroy
            redirect "/catches"
       # else
           # redirect'/catches'
       # end
    end
end
