try:        
    a = int(input("Enter the value of a : "))
    divide = 10 / a 
    print(divide)
except ZeroDivisionError:
    print("Please Not Enter 0 as value of a ")
except ValueError:
    print("Error: Invalid input. Please enter a number.")



print("Hello world ")