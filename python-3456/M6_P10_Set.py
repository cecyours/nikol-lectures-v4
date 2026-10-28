# numbers = {1 ,2 , 3 , 4 , 5}



# print(type(numbers))
# print(numbers)


set1 = {1 , 2 ,3 ,4 , 5}
set2 = {3 , 4 , 5 , 6 , 7}

res = set1.union(set2)

print(res)

inter = set1.intersection(set2)
print(inter)


diff = set2.difference(set1)
print(diff)

person1 = {"Priyank" , 21 }

person2 = {"Vishal" , 21 }


resp = person1.difference(person2)

print(resp)


numbers = [10, 20, 30, 20, 40, 10, 50]
unique_numbers = list(set(numbers))
print("Original List:", numbers)
print("After Removing Duplicates:", unique_numbers)

text = "111111222333444"

uc = set(text)

print(uc)