try:
    num = int(input("Enter a number: "))
    result = 20 / num
except ZeroDivisionError:
    print("Can not divide by zero")
except ValueError:
    print("Invalid Error")
else:
    print(result)
finally:
    print("Program Executed")
