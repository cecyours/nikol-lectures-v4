file = open("zapvi.txt", 'r')

for line in file:
    data = line.strip().split("*")
    name = data[0]
    age = data[1]
    product =data[2]

    print("Name : " , name)
    print("Age : " , age)
    print("Product : " , product)


