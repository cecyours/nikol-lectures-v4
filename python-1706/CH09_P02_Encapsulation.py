class Account:
    def __init__(self , balance):
        self.balance = balance
    def deposite(self , amount):
        self.balance += amount
    def show_balance(self):
        print("Balance : " , self.balance)


acc = Account(2345)
acc.deposite(1000)
acc.deposite(100)
acc.deposite(800)
acc.show_balance()
    