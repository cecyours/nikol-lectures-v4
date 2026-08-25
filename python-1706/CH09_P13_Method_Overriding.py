class Animal:
    def sound(self):
        print("Animal Makes a Sound")
class Cat(Animal):
    def sound(self):
        print("Cat Meows")

c = Cat()
a = Animal()


a.sound()

c.sound()

