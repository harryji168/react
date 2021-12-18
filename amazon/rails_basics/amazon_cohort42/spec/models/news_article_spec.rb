require 'rails_helper'

RSpec.describe NewsArticle, type: :model do
  describe "validates" do
    describe "title" do
      it "should have a title" do
        na = FactoryBot.build(:news_article,title:nil)
        na.valid?
        expect(na.errors.messages).to(have_key(:title)) 
      end
      it "title should be unique" do
        persisted_na = NewsArticle.create(title: "AAA", description:"A")
        na = NewsArticle.new(title: persisted_na.title)
        na.valid?
        expect(na.errors.messages).to(have_key(:title)) 
      end
      
    end
    describe "description" do
      it "should have description" do
        na = NewsArticle.new(description:nil)
        na.valid?
        expect(na.errors.messages).to(have_key(:description)) 
      end
      
    end
    
    describe "published_at" do
      it "published at should later than created at" do
        na = NewsArticle.create(created_at:Time.now, published_at: Time.now - 100)
        na.valid?
        expect(na.errors.messages).to(have_key(:published_at)) 
      end
      
    end

    describe "titleized" do
      it "should save with a title in titlecase" do
        na = NewsArticle.new(title:"this is a title",description: "aa")
        na.save
        expect(na.title).to(eq "This Is A Title")
      end
      
    end
    

    describe "publish" do
      it "should use current date as published_at when calling publish method" do
        na = NewsArticle.new(title:"something",description:"description")

        na.set_publish_time

        expect(na.published_at.to_s).to(eq Time.now.utc.to_s) 

      end
      
    end
    
  end
  
end
