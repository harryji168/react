require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validates" do
    it("should require a first name") do
      user = User.new()
      user.valid?
      expect(user.errors.messages).to(have_key(:first_name))
    end

    it("should require a last name") do
      user = User.new()
      user.valid?
      expect(user.errors.messages).to(have_key(:last_name))
    end

    it("should require a email") do
      user = User.new()
      user.valid?
      expect(user.errors.messages).to(have_key(:email))
    end

    it("should have a unique email") do
      persisted_user =  FactoryBot.create(:user)
      user = User.new(email: persisted_user.email)
      user.valid?
      expect(user.errors.messages[:email]).to(include("has already been taken"))
    end
  end
  describe "full_name" do
    it("should have #full_name that returns first_name last_name concatenated & titleized") do
      user = FactoryBot.create(:user)
      expect(user.full_name).to  eq("#{user.first_name} #{user.last_name}".titlecase)
    end
  end
end
