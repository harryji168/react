require "minitest/autorun"
require "./student.rb"

describe Student do
    describe ".full_name" do
        it "return the full name of the student" do
            student = Student.new('Admin', 'User', 90)
            full_name = student.full_name
            _(full_name).must_equal('Admin User')
        end
    end
    describe ".grade" do
        it "return the grade of the student" do
            student = Student.new('Admin', 'User', 90)
            grade = student.grade
            _(grade).must_equal('A')
        end
    end
end
