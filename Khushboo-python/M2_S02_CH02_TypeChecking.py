# Topic: Type Checking using type()

# Variables of different types
a = 10          # integer
b = 3.14        # float
c = "Python"    # string
d = True        # boolean

# Type checking
print("Type of a:", type(a))
print("Type of b:", type(b))
print("Type of c:", type(c))
print("Type of d:", type(d))

# Implicit type conversion (type coercion)
x = 5        # int
y = 3.5      # float
result = x + y   # int is automatically converted to float
print(result, type(result))

# Explicit type conversion
p = "100"
q = "50"
sum_val = int(p) + int(q)
print("Sum:", sum_val, type(sum_val))
