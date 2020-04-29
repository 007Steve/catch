require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
  set :public_folder, 'public'
    set :views, 'app/views'
    enable :sessions 
    set :sessions_secret, "bca"
end

  get "/" do
    erb :welcome
  end

end
