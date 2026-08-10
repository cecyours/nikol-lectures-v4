with open("py.jpg" , "rb") as source:
    sourceData = source.read()
with open("aarav.jpg" , "wb") as dest:
    dest.write(sourceData)
print("Mission Passed Successfully")

    