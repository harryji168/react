class ProductsController < ApplicationController
    before_action :find_product, only: [:edit, :update, :show, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
    before_action :authorize_user!, only: [:update,:destroy]
    def index
        if params[:tag]
            @tag = Tag.find params[:tag]
            @products = @tag.products
        else
            @products = Product.all 
        end
    end

    def new
        @product = Product.new
    end

    def create
        @product = Product.new product_params
        @product.user = current_user
        if @product.save
            # ProductMailer.new_product(@product).deliver_now
            ProductMailer.new_product(@product).deliver_later
            redirect_to product_path(@product.id)
        else
            render :new
        end
    end

    def show
        @reviews = @product.reviews
        @review = Review.new
        @favourite = Favourite.find_by(product_id: @product, user_id: current_user)
    end

    def destroy
        @product.destroy
        redirect_to products_path
    end

    def edit
    end

    def update
        if @product.update product_params
            redirect_to product_path(@product.id)
        else
            render :edit
        end
    end



    private
    def product_params
        params.require(:product).permit(:title,:description,:price, {tag_ids: []})
    end

    def authorize_user!
        redirect_to root_path, alert: "Not authorized!" unless can?(:crud, @product)
    end
    def find_product
        @product =  Product.find(params[:id])
    end
    
end
