require "minitest/autorun"
require "./circle.rb"


describe Circle do
    describe ".diameter" do
        it "return the diameter of the circle" do
            circle = Circle.new(10)
            diameter = circle.diameter
            _(diameter).must_equal(20)
        end
    end
    describe ".area" do
        it "return the area of the circle" do
            circle = Circle.new(10)
            area = circle.area
            _(area).must_equal((Math::PI * (10 ** 2)), area)
        end
    end
    describe ".perimeter" do
        it "return the perimeter of the circle" do
            circle = Circle.new(10)
            perimeter = circle.perimeter
            _(perimeter).must_equal((Math::PI * 10 * 2), perimeter)
        end
    end
end

