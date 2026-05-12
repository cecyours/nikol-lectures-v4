# Topic: String Formatting - f-strings, .format(), % operator

name = "Mary"
age = 20

# (a) f-string (Python 3.6+) - modern and concise
print(f"My name is {name} and I am {age} years old.")

# (b) .format() method - versatile
print("My name is {} and I am {} years old.".format(name, age))

# (c) % operator - traditional method
print("My name is %s and I am %d years old." % (name, age))

# Combining Concatenation, Slicing, and Formatting
full_name = "Mary Doe"
first_name = full_name[:4]   # "Mary"
last_name  = full_name[5:]   # "Doe"

greeting = "Hello, " + first_name + "! Welcome to " + f"{last_name}'s Python tutorial."
print(greeting)

# f-string with decimal formatting
bmi = 21.484375
print(f"Your BMI is {bmi:.2f}")   # 2 decimal places
