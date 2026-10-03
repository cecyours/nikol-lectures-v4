num1 = int(input("Enter THe number :"))
num2 = int(input("Enter THe number :"))

# Error Cause
# res = num1/ num2


try:
    res = num1/ num2
except ZeroDivisionError:
    print("Mota Bhai 0 Thi Devide Na thay")
else:
    print(res)
finally:
    print("Program Executed Successfully")

    



