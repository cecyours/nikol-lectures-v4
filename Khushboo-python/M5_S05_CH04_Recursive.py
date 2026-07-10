# def increase():
#     print("hello")
#     increase()

# increase()



# def fact(n):
#     if n == 1:
#         return 1 
#     else:
#         return n * fact(n - 1)
    
# res = fact(5)

# print("Factorial is " , res)




def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
for i in range(10):
    print(fibonacci(i))
