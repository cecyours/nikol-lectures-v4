try:
    file = open('data.txt' , 'r')
    content = file.read()

    print(content)
except FileNotFoundError:
    print("Error: File does not exist")





print("Hello World")