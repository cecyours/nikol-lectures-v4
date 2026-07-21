import random

points = 0

while True:
    a = random.randint(1, 10)
    b = random.randint(1, 10)

    result = int(input(f"What is the sum of {a} and {b}: "))

    if result == (a + b):
        points += 10
        print("Correct! +10 points")
    else:
        print("Game Over")
        break

print(f"Score is {points}")