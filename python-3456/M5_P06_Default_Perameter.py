def hello(name="Guest"):
    print(f"Good Morning {name}") 

# hello()
# hello("Vishal")


def power(base=2 , expo=2):
    res = base ** expo
    return res 

pow = power(4 , 3)  #64
pow2 = power(5) # 25
pow3 = power() # 25



print("Power of 1" , pow)
print("Power of 2 " , pow2)
print("Power of 3 " , pow3)








