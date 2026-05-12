# Topic: Writing Complex Expressions

# Complex arithmetic expression
a = 5
b = 10
c = 2
d = 8

result = (a + b) * c ** 2 // d - (b % c)
# Step 1: (a + b)  = 15
# Step 2: c ** 2   = 4
# Step 3: 15 * 4   = 60
# Step 4: 60 // 8  = 7
# Step 5: b % c    = 0
# Step 6: 7 - 0    = 7
print("Result:", result)

# Combining logical and relational operators
x = 15
y = 10
z = 20
result = (x > y and x < z) or (y == z)
# Step 1: x > y       -> True
# Step 2: x < z       -> True
# Step 3: True and True -> True
# Step 4: y == z      -> False
# Step 5: True or False -> True
print("Logical result:", result)
