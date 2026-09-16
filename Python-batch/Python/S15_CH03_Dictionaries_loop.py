student  = {
    "name" : "mary", 
    "age" : 21 , 
    "course" : "Python" , 
    "city" : "Ahmedabad"
}


print(student["course"])


# get keys
for k in student:
    # print(k)
    pass



#get Values
for v in student.values():
    # print(v)
    pass



# get key-value pair
for x , y in student.items():
    print(f"{x} : {y}")



# using enumerate
for i , key in enumerate(student):
    print(i , key , ":" ,  student[key])