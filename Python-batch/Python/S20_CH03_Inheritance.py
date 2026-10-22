class Animal:
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def bark(self):
        print("Dog Barks")

a1 = Animal()
d1 = Dog()

a1.speak()


d1.speak()

d1.bark()
