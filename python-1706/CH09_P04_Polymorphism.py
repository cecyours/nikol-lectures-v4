class Bird:
    def sound(self):
        print("Bird Makes a sound")
class Sparrow(Bird):
    def sound(self):
        print("Sparrow chirps")
class Crow(Bird):
    def sound(self):
        print("Crow caws")

s = Sparrow()

b =Bird()

c = Crow()

b.sound()
s.sound()
c.sound()
