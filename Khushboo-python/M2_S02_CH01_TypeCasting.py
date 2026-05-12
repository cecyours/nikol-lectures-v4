# Topic: Type Conversion (Type Casting)

# Convert float to integer
num = 10.75
num_int = int(num)
print(num, "->", num_int)

# Convert integer to float
num2 = 5
num_float = float(num2)
print(num2, "->", num_float)

# Convert number to string
age = 20
age_str = str(age)
print(age, "->", age_str, type(age_str))

# Convert to boolean
a = 0
b = 10
c = ""
d = "Python"
print(bool(a))   # False - 0 is falsy
print(bool(b))   # True  - non-zero is truthy
print(bool(c))   # False - empty string is falsy
print(bool(d))   # True  - non-empty string is truthy
