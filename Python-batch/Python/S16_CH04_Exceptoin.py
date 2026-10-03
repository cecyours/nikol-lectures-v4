try:
    file = open("jhole.py" , 'r')
    content = file.read()
    print(content)
    file.close()
except FileNotFoundError:
    print("Bhai .... File hi nahi mili ")

