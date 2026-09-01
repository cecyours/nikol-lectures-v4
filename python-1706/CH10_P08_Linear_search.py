a = [10 , 44 ,19 , 13 , 1]

target = 1

found = False

for i in range(len(a)):
    if a[i] == target:
        print("Number found at index" , i)
        found = True
        break
if not found:
    print("Not found")