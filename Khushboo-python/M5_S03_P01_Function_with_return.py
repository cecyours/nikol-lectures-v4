def add(a , b):
    sum = a +b
    product = a * b
    return sum  , product

s , p = add(2 , 5)
print("The Total is " , s)
print("The Product is " , p)



def square(n):
    print("I am here")
    return n * n

sq = square(4)

print("The Square is" , sq)



def calc_avg(a , b, c):
    total  = a + b +c
    avg = total / 3
    return avg

result = calc_avg(80, 90, 85)
print("Average =", result)
