class Animal:
    def speak(self):
        print("Animal makes a sound")


# Here dog class inherit Animal Class so it can use Animal Class Methods
class Dog(Animal):
    def bark(self):
        print("Dog Barks")

a1 = Animal()
d1 = Dog()

a1.speak()


d1.speak()

d1.bark()
