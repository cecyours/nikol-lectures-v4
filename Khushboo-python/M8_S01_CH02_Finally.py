try:
    print("Process Start")
    num1 = 100
    num2= 0
    res = num1 / num2
    print(res)
except ZeroDivisionError:
    print("Process Stop")
    print("Cant Divide by zero")
except ValueError:
    print("Process Stop")
    print("Please Enter A proper value")
finally:
    print("Process End")

