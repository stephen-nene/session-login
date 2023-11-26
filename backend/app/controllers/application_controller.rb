class ApplicationController < ActionController::API
    include ActionController::Cookies
    # skip_before_action :verify_authenticity_token
    # before_action :authorized, except: [:index, :react]
  
    def index
      render file: "public/api.html"
    end
  
    def react
      render file: "public/index.html"
    end
  
    def not_found
      render json: { message: "else" }, status: :ok
    end
end
