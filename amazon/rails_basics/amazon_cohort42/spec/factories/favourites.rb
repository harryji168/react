FactoryBot.define do
  factory :favourite do
    is_favourite { false }
    user { nil }
    product { nil }
  end
end
