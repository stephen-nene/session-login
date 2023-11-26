class SessionsController < ApplicationController

    # /me
    def show
      @user = User.find_by(id: session[:user_id])
  
      if @user.present?
        render json: { user: @user }, status: :ok
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
    # /login
    def create
        @user = User.find_by_email(params[:email]) || User.find_by_phonenumber(params[:email])
      
        if @user&.authenticate(params[:password])
          if params[:rememberMe]
            session[:user_id] = @user.id
          end
          render json: { user: @user }, status: :ok
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
      end
      
  
    # /create
    def new
      @user = User.new(user_params)
  
      if @user.save
        # UserMailer.change_password(@user).deliver_later
  
        render json: { user: @user }, status: :created, location: @user
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end
  
    # /logout
    def destroy
      session.delete :user_id
      render json: { message: "Logged out successfully" }, status: :ok
    end
  
    private
  
  
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :full_name, :role, :profile_image, :email, :password)
    end
  end
  