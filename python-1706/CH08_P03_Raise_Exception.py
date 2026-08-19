# age = int(input("Enter your age: "))
# if age < 18:
#     raise ValueError("Age must be 18 or above.")
# print("You are eligible.")

# Custom Error
try:
    number = int(input("Enter a positive number: "))
    if number < 0:
        raise ValueError("Negative numbers are not allowed.")
    print("You entered:", number)
except ValueError as x:
    print("Error:", x)