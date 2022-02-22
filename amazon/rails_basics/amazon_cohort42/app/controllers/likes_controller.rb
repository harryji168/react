class LikesController < ApplicationController
    def create
        product = Product.find(params[:product_id])
        review = Review.find(params[:review_id])
        like = Like.new(user:current_user, review: review)
        if like.save
            flash[:notice] = "Review liked"
        else
            flash[:alert] = like.errors.full_messages.join(', ')
        end
        redirect_to product_path(product)
    end
    
    def destroy
        like = Like.find(params[:id])
        if like.destroy
            flash[:notice] = "Reveiw unliked"
        else
            flash[:alert] = like.errors.full_messages.join(', ')
        end
        redirect_to product_path(like.review.product)
    end
    
end
