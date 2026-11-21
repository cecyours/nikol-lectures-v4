try:        
    a = int(input("Enter the value of a : "))
    divide = 10 / a 
except ZeroDivisionError:
    print("Please Not Enter 0 as value of a ")
except ValueError:
    print("Error: Invalid input. Please enter a number.")
else:
    print("From Else Block " , divide)
finally:
    print("I am run always")



