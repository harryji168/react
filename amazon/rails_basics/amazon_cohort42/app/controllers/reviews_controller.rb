class ReviewsController < ApplicationController
    before_action :authenticate_user!
    def create
        @product = Product.find params[:product_id]
        @review = Review.new(params.require(:review).permit(:rating,:body))
        @review.product = @product
        @review.user = current_user
        if @review.save
            # product_path(@product) => '/products/23'
            redirect_to product_path(@product.id)
        else
            @reviews = @product.reviews.order(created_at: :desc)
            render '/products/show'
        end
        
    end
    def destroy
        @product = Product.find params[:product_id]
        @review = Review.find params[:id]
        if can?(:crud, @review)
            if @review.destroy
                flash[:success] = "Deleted"
                redirect_to product_path(@product)
            else
                redirect_to root_path, alert: "can't delete"
            end
        else
            redirect_to root_path, alert: "Not Authorized!"
        end

        
    end
end
