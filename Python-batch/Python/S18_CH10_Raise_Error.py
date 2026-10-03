


try:
    age = int(input("Enter Your Age : "))

    if age < 18:
        raise ValueError("Age Must be 18 Or Above . ")
    print("You Are eligible")
except ValueError as e :
    print("Error"  , e)

