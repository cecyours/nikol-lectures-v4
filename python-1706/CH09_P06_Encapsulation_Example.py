class BankAccount:
    def __init__(self , balance):
        self.__balance = balance  # Private Attribute

    def deposite(self, amount):
        self.__balance += amount
    def withdraw(self , amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient Balance")
    def get_balance(self):
        return self.__balance

account = BankAccount(2000)

print("balance  : " ,account.get_balance())


account.deposite(2000)
print("balance  : " ,account.get_balance())


account.withdraw(1500)

print("balance  : " ,account.get_balance())


    