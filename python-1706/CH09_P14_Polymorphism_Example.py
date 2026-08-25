class Bird:
    def sound(self):
        print("Bird Makes Sound")


class Sparrow(Bird):
    def sound(self):
        print("Sparrow Chirps")

class Crow(Bird):
    def sound(self):
        print("Crow caws")

s  = Sparrow()

c = Crow()

s.sound()

c.sound()

