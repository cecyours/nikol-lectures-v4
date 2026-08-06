choice = 0
name = ""
age = 0
pin =0
balance = 0

def createAccount():
    global name , age , pin , balance
    name = input("Please Enter Your Name : ")

    uage = int(input("Enter Your age : "))

    if uage < 18:
        print("You are minor")
        return
    age = uage


    upin = int(input("Enter Your pin : "))

    pin = int(input("Confirm Your pin : "))

    if upin != pin:
        print("Incorrect Pin")
        return
    ubalance = int(input("Enter Initial Amount for create account : "))

    if ubalance < 5000:
        print("Minimun 5000 balance Required to Open AC")
        return
    balance = ubalance

    print("**** Account Create Successfully **** ✅")
    

def deposite():
    global balance
    upin = int(input("Enter Your Pin : "))

    if upin != pin:
        print("incorrect Pin")
        return

    ubalance = int(input("Enter Amount You want to deposite : "))

    if ubalance < 0:
        print("Incorrect Amount")
        return

    balance+=ubalance



    print(f"**** Amount Deposited Successfully , Balance is {balance} **** ✅")

    


def withdrawal():
    global balance
    upin = int(input("Enter Your Pin : "))
    
    if upin != pin:
        print("incorrect Pin")
        return

    uamount = int(input("Enter Amount You want to withdrawl : "))

    if uamount > balance:
        print("Insufficent Balance ! 🥲")
        return

    balance-=uamount

    print(f"**** Amount Withdrawal Successfully **** ,  Balance is {balance} ✅")

def display():
    print("Name" , name)
    print("Age" ,age)
    print("Balance" , balance)

def menu():
    global choice
    while choice != 5:
        print("1.Create Account")
        print("2.Deposite")
        print("3.Withdrawal")
        print("4.Display Balance")
        print("5.Exit")
    
        choice  = int(input("Please Enter Your Choice : "))
    
        if choice == 1:
            createAccount()
        elif choice == 2:
            deposite()
        elif choice ==3:
            withdrawal()
        elif choice == 4:
            display()
        elif choice == 5:
            print("Thank You For Using CEC's ATM")
            exit()
        else:
            print("Invalid Choice")

menu()
    




