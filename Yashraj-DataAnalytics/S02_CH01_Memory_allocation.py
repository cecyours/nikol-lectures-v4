# ==========================================
# S02_CH01_Memory_Allocation.py
# ==========================================

print("=== Example 1: Dynamic Typing in Python ===")

# Variable initially stores an integer
var = 10
print("Value:", var)
print("Type :", type(var))

# The same variable now stores a string
var = "Hello"
print("Value:", var)
print("Type :", type(var))

print("\n" + "=" * 50)

print("=== Example 2: Object References and Memory Allocation ===")

# Creating an integer object
a = 100

# b references the same object as a
b = a

# c references a different object
c = 110

print("a =", a)
print("b =", b)
print("c =", c)

print("\nMemory IDs:")
print("ID of a:", id(a))
print("ID of b:", id(b))
print("ID of c:", id(c))

print("\nReference Check:")
print("a and b reference the same object:", id(a) == id(b))
print("a and c reference the same object:", id(a) == id(c))

print("\n" + "=" * 50)
