class Bird:
    def sound(self):
        print("Bird makes a sound")
class Sparrow(Bird):
    def sound(self):
        print("Sparrow chirps")
class Crow(Bird):
    def sound(self):
        print("Crow caws")

s = Sparrow()

c = Crow()

s.sound()

c.sound()