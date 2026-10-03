file = open("zapvi.csv", 'r')

for line in file:
    data = line.strip().split(",")
    print(data)
    name = data[0]
    age = data[1]
    product =data[2]

    print("Name : " , name)
    print("Age : " , age)
    print("Product : " , product)


