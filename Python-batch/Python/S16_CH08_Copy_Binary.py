with open('source.png' , 'rb') as source:
    data = source.read()
with open('manan.png' , 'wb') as dest:
    dest.write(data)
print("File Copied Successfully")