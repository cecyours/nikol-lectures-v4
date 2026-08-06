
# create a dictionary
person = {
    "name" : "Aarav" , 
    "age" : 12 , 
    "course" : "Python"
}

print("1. Add hobby ")

person['hobby'] = "Cricket"

print("2. Add city using update()")
# 
person.update({"city" : "Kampala"})

print(person)
# Accessing Dictionary Elements

print("- Accessing Dictionary Elements")
print(person['name'])
print(person['age'])
print(person['course'])
print(person['hobby'])
print(person['city'])

# Remove Dictionary Elements
print("- Remove Dictionary Elements")
print("1.Using pop() hobby")
person.pop("hobby")
print(person)
print("2.Using del kayword city")
del person['city']
print(person)
print("3. Clear() - Remove all elements")
person.clear()


print(person)






