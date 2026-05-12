# Topic: String Slicing - string[start:stop:step]

text = "PythonProgramming"

# Basic slicing
print(text[0:6])     # Extract "Python"
print(text[6:])      # Extract "Programming"

# Using negative index
print(text[-1])      # Last character: g
print(text[-11:])    # Last 11 characters: Programming

# Step in slicing
print(text[0:6:2])   # Every 2nd character from "Python": Pto
print(text[::-1])    # Reverse the entire string

# Accessing individual characters
print(text[0])       # First character: P
print(text[1])       # Second character: y
