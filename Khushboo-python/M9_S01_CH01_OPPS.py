class Student:
    # Constructor method
    def __init__(self , name , age):
        self.name = name
        self.age = age
        
    def display(self):
        print("Name" , self.name)
        print("Age" , self.age)

# Creating an object
s = Student("mary" , 21)

s.display()