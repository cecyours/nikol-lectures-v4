try:
    file = open('data.txt' , 'r')

except FileNotFoundError:
    print("Error: File does not exist")
else:
    content = file.read()
    print(content)
finally:
    print("Program Excecuted !")


print("Hello World")