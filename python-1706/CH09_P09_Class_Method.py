class Student:
    city = "kampala"
    def __init__(self , name, age) :
        self.name = name
        self.age = age
        print("Object Created")
    def display(self):
        print("Name : " ,self.name)
        print("Age : " ,self.age)
    @classmethod
    def show_city(cls):
        print("City Is " , cls.city)
    def __del__(self): 
        print("Object destroyed")

# Calling instance metho
s1 = Student("CEC" , 10)


# Calling class method
Student.show_city()


s1.display()





del s1