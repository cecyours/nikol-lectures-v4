# (a) Converting to Integer
x = 10.75
y = "20" # string 
# Convert float to int
x_int = int(x)
print("x:", x, "-> x_int:", x_int)
# Convert string to int
y_int = int(y)
print("y:", y, "-> y_int:", y_int)

#(b) Converting to Float
a = 10
b = "15.5" 
# Convert int to float
a_float = float(a)
print("a:", a, "-> a_float:", a_float)
# Convert string to float
b_float = float(b)
print("b:", b, "-> b_float:", b_float)


# (c) Converting to String
num = 50
pi = 3.1416 
flag = True # 
# Convert to string
print(str(num), type(str(num)))
print(str(pi), type(str(pi)))
print(str(flag), type(str(flag)))

# (d) Converting to Boolean
a = 0
b = 10
c = ""
d = "Python"
print(bool(a)) # False because 0 is falsy
print(bool(b)) # True because non-zero is truthy
print(bool(c)) # False because empty string is falsy
print(bool(d)) # True because non-empty string is truthy

