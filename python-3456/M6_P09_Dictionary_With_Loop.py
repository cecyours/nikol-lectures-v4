student = {
"name": "Mary",
"age": 21,
"course": "Python"
}

# get key
for key in student:
    print(key)


print("--------Keys()---------")
# 2. keys() method
for key in student.keys():
    print(key)


print("--------values()---------")
for v in student.values():
    print(v)


print("--------items()---------")
for key , value in student.items():
    print(key , value)


print("--------enumrate()---------")
for i , key in enumerate(student):
   print(i, key, ":", student[key])
