class UserwordsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show]

    def index 
        render json:  Userword.all
    end


end