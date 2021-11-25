class TagsController < ApplicationController
    def index
        @tags = Tag.all.order(created_at: :desc)
    end
    
end
