try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(result)
except ZeroDivisionError:
    print("Can not divide by zero")
except ValueError:
    print("Invalid Error")
finally:
    print("Program Executed")
