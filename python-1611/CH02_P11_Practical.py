numbers = [1 , 2 , 3 , 4]
print("Mutable Example")
print("List Id Before Modify"  , id(numbers))

numbers.append(5)
print("List Id After Modify"  , id(numbers))


age = 12
print("Immutable Example")
print("Int id before change" , id(age))
age+=12
print("Int id After change" , id(age))



