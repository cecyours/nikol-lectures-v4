class Student:
    def __init__(self , name="Guest" , age=17):
        self.name = name
        self.age = age
    def display(self):
        print("Name : " , self.name)
        print("Age : " , self.age)
    def __del__(self):
        print("Object destroyed")

s1 = Student("Manan"  , 20 )


s3 = Student("Vishal" , 24)


s4 = Student()


del s4

s1.display()


s3.display()
