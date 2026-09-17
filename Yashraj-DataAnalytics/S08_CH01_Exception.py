try:
    file = open('zeta.txt' , 'r')
    data = file.read()
    print(data)
except FileNotFoundError:
    print("Bhai Leking File Mil hi nahi rahi")
finally:
    print("Me to kisi bhi halat me run ho jauga")


print("Hello")