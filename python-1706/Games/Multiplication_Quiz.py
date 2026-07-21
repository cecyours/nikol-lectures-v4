import random

points = 0

attempt = 1

while attempt <= 10:
    a = random.randint(1, 10)
    b = random.randint(1, 10)

    result = int(input(f"What is the times of {a} and {b}: "))

    if result == (a * b):
        points += 10
        print("Correct! +10 points")
    else:
        points -= 10

    attempt+=1

print(f"Score is {points} / 100")