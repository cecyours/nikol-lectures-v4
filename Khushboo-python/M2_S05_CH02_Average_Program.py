# Topic: Interactive Program with Type Casting - Average Calculator

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

average = (num1 + num2 + num3) / 3

# f-string formats result to 2 decimal places
print(f"The average of {num1}, {num2}, and {num3} is {average:.2f}")
