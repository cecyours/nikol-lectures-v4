print("CH01 - S01: Data Types (Basics)")
print("-" * 35)

# String (single-line)
student_name = "John Doe"
print("student_name:", student_name, "| type:", type(student_name))

# String (multi-line)
message = """Hello,
This is a multi-line string.
Python keeps the line breaks."""
print("\nmessage:")
print(message)
print("type(message):", type(message))

# Integer
age = 25
print("\nage:", age, "| type:", type(age))

# Float
price = 99.9
print("price:", price, "| type:", type(price))

# Complex number
z = 3 + 4j
print("z:", z, "| type:", type(z))

# Boolean
is_pass = False
print("is_pass:", is_pass, "| type:", type(is_pass))

