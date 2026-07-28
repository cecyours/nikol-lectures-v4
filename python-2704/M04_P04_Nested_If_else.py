num = int(input("Enter The NUmber  : "))


while True:
    if num > 0:
        if num % 2 == 0:
            print("Even")
            num = int(input("Enter The NUmber  : "))
            
        else:
            print("odd")
            num = int(input("Enter The NUmber  : "))

    else:
        print("Nagative Number")
        num = int(input("Enter The NUmber  : "))
