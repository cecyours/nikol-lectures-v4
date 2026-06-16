# Keyword Argument

def power(base, exp=2):
    res = base ** exp
    print("Result =", res)

# Calling function using keyword arguments
power(base=5)            # exp uses default value 2
power(base=2, exp=4)     # both arguments passed by keyword
power(exp=3, base=2)     # order doesn't matter with keyword arguments