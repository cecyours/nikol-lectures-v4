students = {
    "name" : "Vish" , 
    "age" : 47, 
    "School" : "Masai"
}

# print(students)

students["course"] = "Python"

# Method 1
# print("Name" , students["name"])
# print("Age" , students["age"])
# print("School" , students["School"])

# Method 2 (using .get())
print(students.get("age"))
print(students.get("School"))
print(students.get("course"))




students.update({"city": "Ahmedabad"})

print(students.get("city"))




