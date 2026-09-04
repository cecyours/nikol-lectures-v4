file  = open("z_data.txt" , "r")

for line in file:
    data = line.strip().split(",")
    name = data[0]
    age = data[1]
    course = data[2]
    print("Name:", name)
    print("Age:", age)
    print("Course:", course)
    print()
file.close()


