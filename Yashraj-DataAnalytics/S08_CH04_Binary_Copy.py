with open('image.png' , 'rb') as source:
    data = source.read()
with open('yashraj.png' , 'wb') as dest:
    dest.write(data)
print("Ho Gaya Kam.")
