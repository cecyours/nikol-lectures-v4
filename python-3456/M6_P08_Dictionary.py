student = {
    "name":"Priyank" ,
    "age" : 21 , 
    "Course": "Python"
}


print("name : " , student['name'])
print("Course : " , student['Course'])
print("age : " , student['age'])



student['name'] = "vishal"

student.pop('Course')
print(student)





