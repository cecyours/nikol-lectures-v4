try:
    num1 = 10
    num2= 100
    res = num1 / num2
    print(res)
except ZeroDivisionError:
    print("Cant Divide by zero")
except ValueError:
    print("Please Enter A proper value")
