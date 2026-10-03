def average(a , b , c , d , e):
    total = a + b + c + d+ e
    avg = total / 5
    return avg

avg = average(1 , 2 , 3 , 4 , 5)

print("Avrage " , avg)


def Checker(marks):
    grade = ""
    if marks > 90:
        grade = "A"
    elif marks > 80:
        grade = "b"
    elif marks > 50:
        grade = "C"
    return grade
    
x = Checker(88)

print("Grade Is" , x)
 
