class Dog
    attr_accessor :bones
    def initialize()
        @bones = []
    end

    def give_bone(size)
        if @bones.length < 3
            @bones.push(size) 
        end
        @bones.length
    end
    
    def eat_bone
        if @bones.length > 0
            @bones.pop
        else
            ''
        end
    end

    def bone_count
        @bones.length
    end
end