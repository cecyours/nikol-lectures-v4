class Car:
    # constructure method 
    def __init__(self, brand, color, speed):
        self.brand = brand
        self.color = color
        self.speed = speed

    def start(self):
        print("Car Started")

    def stop(self):
        print("Car Stop")


car1 = Car("BMW", "Black", 150)
car2 = Car("Toyota", "White", 120)
car3 = Car("Honda", "Red", 100)


print(car1.brand)
print(car2.color)