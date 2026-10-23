def hello(n):
    if n == 1:
        return 1
    else:
        print("N = " , n)
        hello(n-1)
hello(5)