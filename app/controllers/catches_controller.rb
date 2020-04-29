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


#DESTROY
    #delete

end