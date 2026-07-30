def student_info(name , age):
    print("Name" , name)
    print("Age" , age)

# follow positional way which shows incorrect results
# student_info(20 , "Manan")

# Shows perfect results
student_info(age=20 , name="Manan")


