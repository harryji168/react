class Circle
    def initialize(radius)
        if radius < 0
            raise ArgumentError.new("You can't have a negative circle")
        end
      @radius = radius
    end

    def diameter
        @radius * 2
    end
    
    def area
        Math::PI * (@radius ** 2)
    end
    
    def perimeter
        Math::PI * @radius * 2
    end
    
end