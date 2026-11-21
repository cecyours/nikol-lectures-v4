class Account:
    def __init__(self , balance):
        self.balance=balance
    def deposite(self , amount): 
        self.balance+=amount
    def withdrawl(self , amount):
        self.balance-=amount
    def show_balance(self):
        print("Balance : " , self.balance)


a1 = Account(2000)
a2 = Account(5000)

a1.deposite(3000)
a2.withdrawl(1900)

a1.withdrawl(2500)
a2.deposite(1100)
a1.show_balance()

a2.show_balance()




    