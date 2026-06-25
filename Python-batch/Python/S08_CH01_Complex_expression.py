x = 15
y = 10
z =20

result = ( x > y and x < z) or (y == z)



print(result)


a = 5
b = 10
c = 2
d = 8
step1 = (a + b) # 15
step2 = c ** 2 # 4
step3 = step1 * step2 #60
step4 = step3 // d # 7
mod = b % c # 0
result = step4 - mod
print("Result:", result)


# True or False => True
# False or False => False
# True or True => True

# True and False => False
# False and False => False
# True and True => True




# def compute_expression(a, b, c, d):
#     return ((a + b) * (c ** 2) // d) - (b % c)
# result = compute_expression(5, 10, 2, 8)
# result2 = compute_expression(10, 12, 16, 28)
# result2 = compute_expression(10, 12, 16, 28)


# print("Result:", result)
# print("Result  2:", result2)