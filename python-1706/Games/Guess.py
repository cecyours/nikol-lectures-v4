import random
num = int(input("Enter Your Number : (1 To 20) :"))

sys_num = random.randint(1 , 20)

while num != sys_num:
    if num > sys_num:
        print("Choose lesser")
    else: 
        print("Choose Higher")
    num = int(input("Enter Your Number : (1 To 20) :"))
          
        
        
if num == sys_num:
        print("Yehhh ! You Win .🥁")
    
        
