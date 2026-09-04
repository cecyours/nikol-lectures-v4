num = int(input("Please enter a number : "))

if num <= 1:
    print("It is not a prime numbers")
else:
    for i in range(2 , int(num ** 0.5) + 1):
        if num % i == 0:
            print("Not A prime Number")
            break
    else:
        print("prime number")