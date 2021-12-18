require "minitest/autorun"
require "./dog.rb"

class DogTest < MiniTest::Test
    def test_give_bone
        dog = Dog.new()
        dog.give_bone('small')
        dog.give_bone('medium')
        dog.give_bone('large')
        assert_equal(3, dog.give_bone('large'))
    end
    
    def test_eat_bone
        dog = Dog.new()
        dog.give_bone('small')
        dog.give_bone('medium')
        dog.give_bone('large')
        assert_equal('large', dog.eat_bone())
        assert_equal(2, dog.bones.length)
    end
    
    def test_bone_count
        dog = Dog.new()
        dog.give_bone('small')
        assert_equal(1, dog.bone_count)
    end
end