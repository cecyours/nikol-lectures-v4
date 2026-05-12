# Topic: Simplifying Complex Expressions

a = 5
b = 10
c = 2
d = 8

# Breaking into smaller steps for clarity
step1 = (a + b)
step2 = c ** 2
step3 = step1 * step2
step4 = step3 // d
mod   = b % c
result = step4 - mod
print("Result (step-by-step):", result)

# Using a function to encapsulate the logic
def compute_expression(a, b, c, d):
    return ((a + b) * (c ** 2) // d) - (b % c)

result = compute_expression(5, 10, 2, 8)
print("Result (function):", result)

# Ternary (conditional) expression
x = 10
y = 20
max_value = x if x > y else y
print("Maximum:", max_value)

# Real-world example: discounted price with tax
price    = 1200
discount = 0.1    # 10%
tax      = 0.18   # 18%
final_price = (price - (price * discount)) * (1 + tax)
print("Final Price:", final_price)
