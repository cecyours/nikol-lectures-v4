import json

student = {
"name": "Mary",
"age": 21,
"course": "Python"
}


print(student)

json_Data = json.dumps(student , indent=4)

print(json_Data)