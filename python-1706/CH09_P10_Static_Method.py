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

    @staticmethod
    def add(a ,  b) :
        return a + b
    
    def __del__(self): 
        print("Object destroyed")

s1 = Student("CEC" , 10)


# Calling instance method
s1.display()


# Calling class method
Student.show_city()


# Calling static method
res = Student.add(1 , 5)


print("The Result  is " , res)








del s1