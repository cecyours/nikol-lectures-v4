class Student:
    def __init__(self , name, age) :
        self.name = name
        self.age = age
        print("Object Created")
    def display(self):
        print("Name : " ,self.name)
        print("Age : " ,self.age)
    def __del__(self):
        print("Object destroyed")

s1 = Student("CEC" , 10)

s1.display()




del s1