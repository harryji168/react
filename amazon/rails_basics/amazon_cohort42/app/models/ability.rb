class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    #
      user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities
    alias_action(:create, :read, :update, :destroy, to: :crud)

    can(:crud, Product) do |product|
      user == product.user
    end

    can(:crud, Review) do |review|
      user == review.user
    end

    can :crud, NewsArticle do |news_article|
      news_article.user == user
    end

    can :like, Review do |review|
      user.persisted? && user != review.user
    end

    can :destroy, Like do |like|
      like.user == user
    end

    can :favourite, Product do |product|
      user.persisted? && user != product.user
    end

    can :destroy, Favourite do |favourite|
      favourite.user == user
    end
    
    can :vote, Review do |review|
      user.persisted? && user != review.user
    end

    can :destroy, Vote do |vote|
      vote.user == user
    end
  end
end
