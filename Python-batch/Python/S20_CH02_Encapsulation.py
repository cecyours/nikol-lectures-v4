class Account:
    def __init__(self , balance):
        self.balance = balance
    def deposite(self , amount):
        self.balance += amount
    def withdrawl(self , amount):
        self.balance-= amount
    def show_balance(self):
        print("balance : "  , self.balance)

    

a1 = Account(5000)

a1.deposite(2000)
a1.deposite(2000)
a1.withdrawl(2000)
a1.deposite(2000)
a1.withdrawl(2000)



a1.show_balance()