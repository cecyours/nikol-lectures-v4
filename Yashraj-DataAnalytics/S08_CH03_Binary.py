try:
    file = open('zeta.txt' , 'r')
except FileNotFoundError:
    print("Bhai Leking File Mil hi nahi rahi")
else:
    data = file.read()
    print(data)