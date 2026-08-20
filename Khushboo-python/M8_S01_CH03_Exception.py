class InvalidAgeError(Exception):
    pass


try:
    age = int(input("Please Enter Your age : "))
    if age < 18:
        raise InvalidAgeError("Age must be 18 or above.")
    print("You are eligible.")


    
    
except ZeroDivisionError:
    print("Process Stop")
    print("Cant Divide by zero")
except ValueError:
    print("Process Stop")
    print("Please Enter A proper value")
finally:
    print("Process End")

