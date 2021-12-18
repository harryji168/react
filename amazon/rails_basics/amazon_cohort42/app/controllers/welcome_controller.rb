class WelcomeController < ApplicationController
    def home
        
    end
    def about
        
    end
    def contact
        
    end
    def thankyou
        @full_name = params[:full_name]
    end
    def admin
        if current_user&.is_admin
            @products = Product.all.count
            @reviews = Review.all.count
            @users = User.all.count
        else
            redirect_to root_path, alert: "Not Authorized!"
        end
        
    end
    
end
