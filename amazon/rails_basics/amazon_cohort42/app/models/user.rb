class User < ApplicationRecord
    has_secure_password

    validates :email, presence: true, uniqueness: { case_sensitive: false }
    validates :first_name, presence: true
    validates :last_name, presence: true

    has_many :products, dependent: :destroy
    has_many :reviews, dependent: :destroy

    has_many :likes, dependent: :destroy
    has_many :liked_reviews, through: :likes, source: :review
    
    has_many :favourites
    has_many :favourited_products, through: :favourites, source: :product

    has_many :votes
    has_many :vote_reviews, through: :votes, source: :review

    validates :first_name, :last_name, :email, :password, presence: true
    
    def full_name
        "#{first_name} #{last_name}".strip.titlecase
    end
    
end
