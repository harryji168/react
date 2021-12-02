class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user
  validates :rating, presence: :true, numericality: {greater_than: 0, less_than: 6}
  #{greater_than: 0,lesser_than:6}

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user
  has_many :votes, dependent: :destroy
  has_many :voters, through: :votes, source: :user
end
