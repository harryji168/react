class Student
    def initialize(first_name = nil, last_name = nil, score = nil)
        if first_name == nil || first_name == nil || score == nil
            raise ArgumentError.new("You should pass all arguments")
        end
        @first_name = first_name
        @last_name = last_name
        @score = score
    end

    def full_name
        "#{@first_name} #{@last_name}"
    end
    
    def grade
        case @score
        when 90..100
           'A'
        when 80...90
           'B'
        when 70...80
            'C'
        when 60...70
            'D'
        else
           'F'
        end
    end
    
end