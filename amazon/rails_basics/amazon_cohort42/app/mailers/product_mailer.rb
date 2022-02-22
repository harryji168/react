class ProductMailer < ApplicationMailer
    def new_product(product)
        @product = product
        @product_owner = @product.user
        mail(
            to: @product_owner.email,
            subject: "Created a new product"
        )
    end
    
end
