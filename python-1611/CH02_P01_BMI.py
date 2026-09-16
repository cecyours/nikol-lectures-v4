name   = input("Enter Your Name : ")
weight = float(input("Enter Your Weight : "))
height = float(input("Enter Your height : "))


bmi = weight / (height ** 2)

print(f"{name}, your BMI is {bmi:.1f}")


if bmi <= 18.5:
    print("You are underweight")
elif 18.5 <= bmi < 25:
    print("You have a normal weight.")
else:
    print("You are overweight.")
