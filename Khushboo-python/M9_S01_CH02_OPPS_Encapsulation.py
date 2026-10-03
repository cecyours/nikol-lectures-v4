class Account:
    def __init__(self , balance):
        self.balance = balance
    def deposite(self , amount):
        self.balance+=amount
    def show_balance(self):
        print("Balance:", self.balance)

acc = Account(1000)

acc.deposite(2400)

print("Balance:", acc.balance)

        