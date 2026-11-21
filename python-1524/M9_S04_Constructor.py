class Account:
    # constructor method 
    def __init__(self , balance=5000):
        self.balance=balance
    def deposite(self , amount): 
        self.balance+=amount
    def withdrawl(self , amount):
        self.balance-=amount
    def show_balance(self):
        print("Balance : " , self.balance)
    def __del__(self):
        self.balance=0
        print("Object destroyed")



a1 = Account(2000)


a1.deposite(3000)


a1.show_balance()



