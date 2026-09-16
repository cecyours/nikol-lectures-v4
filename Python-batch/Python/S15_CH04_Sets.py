numbers  = {1 ,1 , 2,2 , 3 , 3 ,  4 , 6  , 7, }


# print(numbers)


# Union of sets

set1  = {1 , 2 , 3 , 4}
set2 = {3 ,4 , 5 , 6}

res = set1.union(set2)

print(res)




# intersection of set 

res1 = set1.intersection(set2)
print(res1)


# diffrence of set 
res2 = set1.difference(set2)
print(res2)


# Removing Duplicates from a List

numbers = [10, 20, 30, 20, 40, 10, 50]


unique_list = list(set(numbers))

print("Orignel List" , numbers)

print("Unique List" , unique_list)

