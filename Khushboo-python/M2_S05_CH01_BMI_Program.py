# Topic: Using Variables and Data Types in a Real Program - BMI Calculator

name   = input("Enter your name: ")
weight = float(input("Enter your weight in kg: "))
height = float(input("Enter your height in meters: "))

# BMI calculation
bmi = weight / (height ** 2)
print(f"{name}, your BMI is {bmi:.2f}")

# Check BMI category using boolean conditions
if bmi < 18.5:
    print("You are underweight.")
elif 18.5 <= bmi < 25:
    print("You have a normal weight.")
else:
    print("You are overweight.")
