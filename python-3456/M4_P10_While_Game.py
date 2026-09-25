import random

sys_num = random.randint(1 , 1000)

user_num  = 0


while sys_num != user_num:
    if sys_num > user_num:
        print("Please Enter Big Number  👆")
    else:
        print("Please Enter Small Number 👇 ")

    user_num = int(input("Please Enter The Number "))