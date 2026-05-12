# Topic: Variables and Memory Allocation

# Variable assignment and memory address
x = 10
y = 10
print("id(x):", id(x))
print("id(y):", id(y))   # Same address - Python reuses small integers

# Objects and References
a = 100
b = a    # b references the same object as a
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))

# After modifying a - a points to a new object, b still points to old one
a += 10
print("After changing a:")
print("a =", a, "id(a):", id(a))
print("b =", b, "id(b):", id(b))

# Dynamic typing - variable can change its type
var = 10          # var is an integer
print(var, type(var))
var = "Hello"     # now var is a string
print(var, type(var))

# Deleting a variable
x = 100
print(x)
del x
# print(x)  # would raise NameError: name 'x' is not defined
