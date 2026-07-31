choice = 0
name = ""
accn = 0 
pin = 0
balance= 0
def createAccount():
    global name , accn , pin , balance
    name = input("Enter Your Name : ")
    accn = int(input("Enter Account Number : "))
    pin  = int(input("ENter Your Four Digit Pin : "))
    balance = int(input("Enter a Balance Amount(Must be greater than 5000) : "))

    if balance <= 5000:
        print("Balance Amount is inValid ! 📍 ")
        balance = 0
        return
    print("Your Account is Successfully Created !")



def displayAccount():
    print("Name :" , name)
    print("Account Number" , accn)
    print("Pin" , pin)
    print("Balance" , balance)


def deposit():
    global balance
    upin = int(input("Please Enter Your Pin To deposit : "))

    if upin != pin:
        print("Incorrect Pin ")
        return

    ubalnce = int(input("Please Enter A amount for deposit : "))

    if ubalnce < 0:
        print("Invalid Amount ! ")
        return
    balance+=ubalnce
    print("Deposit Successfully")




def withdrawal():
    global balance
    upin = int(input("Please Enter Your Pin To Withdrawal : "))
    if upin != pin:
            print("Incorrect Pin ")
            return

    uwith = int(input("Please Enter A amount for Withdrawal : "))

    if uwith > balance:
        print("Insufficiant Balance ! ")
        return
    balance-=uwith
    print("Withdrawal Successfully")
    
    





def main():
    global choice
    while(choice != 5):
        print("----Aarav ATM Service----")
        print("1.Create Account")
        print("2.Display Account")
        print("3.Deposit")
        print("4.withdrawal")
        print("5.Exit")
        choice = int(input("Enter Your Choice (1 - 5): "))
        if choice == 1 :
            createAccount()
        elif choice == 2:
            displayAccount()
        elif choice == 3:
            deposit()
        elif choice == 4:
            withdrawal()
        elif choice == 5:
            print("Thanks You For Using Aarav ATM Service")
            exit()
        else:
            print("Invalid Option ! 😡")

main()




