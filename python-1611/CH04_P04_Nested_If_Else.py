age = int(input("Enter Your age : "))
hasLicense = True

if age >= 18:
    if hasLicense:
        print("You can drive")
    else:
        print("You can't drive")
else:
    print("You are under Age to drive.")
