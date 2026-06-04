# Immutable => Cannot be change after creation
# ex : int , float , string , tuple
print("-----immutable Objects-----")
x = 10  # 1192
print(id(x))
x += 1  #1194
print(id(x))


# Mutable Objects 
# ex : list , dict , set
print("-----Mutable Objects-----")
lst  = [1 , 2, 3]

print(id(lst))

lst.append(4)

print(id(lst))