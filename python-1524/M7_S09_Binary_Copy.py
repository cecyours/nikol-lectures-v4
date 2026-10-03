with open("image.png" , 'rb') as source:
    data = source.read()
with open('hardik.png' , 'wb') as dest:
    dest.write(data)
