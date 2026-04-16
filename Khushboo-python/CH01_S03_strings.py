print("CH01 - S03: Strings")
print("-" * 20)

first_name = "John"
last_name = "Doe"

# Joining strings
full_name = first_name + " " + last_name
print("full_name:", full_name)

# Length
print("length:", len(full_name))

# Case changes
print("upper:", full_name.upper())
print("lower:", full_name.lower())

# f-string (most common)
age = 20
print(f"\nMy name is {full_name} and I am {age} years old.")

# format() (still useful sometimes)
print("My name is {} and I am {} years old.".format(full_name, age))

# Indexing and slicing
word = "PYTHON"
print("\nword:", word)
print("word[0]:", word[0])
print("word[-1]:", word[-1])
print("word[1:4]:", word[1:4])

