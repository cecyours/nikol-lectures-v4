# Function definition
def greet():
    print("Hello")


# Function call
# greet()


def greet_me(name):
    print("Hello", name)


name = "Khush"
greet_me(name)


# Function with multiple parameters
def introduce_me(name, surname, age, city, favorite_color):
    print(
        f"Hello, my name is {name} {surname}. "
        f"My age is {age}, I live in {city}, "
        f"and my favorite color is {favorite_color}."
    )


# introduce_me("Vish", "Rabari", 22, "Ahmedabad", "Red")


def add_numbers(a, b):
    result = a + b
    print("Sum =", result)


# add_numbers(3, 4)


def fun1(number):
    return "Hello"


num3 = fun1(4)
print(num3)


def check_even_odd(num):
    if num % 2 == 0:
        print("Even Number")
    else:
        print("Odd Number")


check_even_odd(44)