class Car:
    # constructure method
    def __init__(self , color , brand , model):
        self.color = color 
        self.brand = brand
        self.model = model
    def display(self):
        print("Color" , self.color)
        print("Brand" , self.brand)
        print("Model" , self.model)

c1= Car("red" , "mercy" , "m1")
c1.display()

