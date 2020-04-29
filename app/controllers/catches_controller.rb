class CatchesController < ApplicationController
#CREATE
    #new

#READ
    #index
get "/catches" do
    @catches = Catch.all
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