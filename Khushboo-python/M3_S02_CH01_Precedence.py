# Topic: Operator Precedence and Associativity

# Without vs with parentheses
result1 = 10 + 2 * 3        # * has higher precedence than +
result2 = (10 + 2) * 3      # parentheses force addition first
print("Without parentheses:", result1)
print("With parentheses:", result2)

# Left-to-Right associativity (subtraction)
result = 10 - 3 - 2         # evaluated as (10 - 3) - 2
print("Left-to-right (10 - 3 - 2):", result)

# Right-to-Left associativity (exponentiation)
result = 2 ** 3 ** 2        # evaluated as 2 ** (3 ** 2) = 2 ** 9
print("Right-to-left (2 ** 3 ** 2):", result)

# Combining multiple operators - step-by-step
a = 5
b = 3
c = 2
d = 8
result = a + b * c ** 2 - d // 2
# Step 1: c ** 2 = 4
# Step 2: b * 4  = 12
# Step 3: d // 2 = 4
# Step 4: a + 12 - 4 = 13
print("a + b * c ** 2 - d // 2 =", result)
