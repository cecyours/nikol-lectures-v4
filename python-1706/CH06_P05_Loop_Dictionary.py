
# create a dictionary
person = {
    "name" : "Aarav" , 
    "age" : 12 , 
    "course" : "Python"
}
print("1.Iterating Through Dictionary Keys")
for item in person:
    print(item)

print("2.Iterating Through Dictionary Values")
for v in person.values():
    print(v)

print("3. Iterating Through Key-Value Pairs")
for k , v in person.items():
    print(k , " : " , v)


print("4. Iterating with Index Using enumerate()")
for index, key in enumerate(person):
    print(index, key, ":", person[key])