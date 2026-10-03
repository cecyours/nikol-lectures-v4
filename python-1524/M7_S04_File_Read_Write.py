file  = open("Hardik.txt" , 'r+')

content = file.read()

print("Content"  , content)

file.write("\n'name =New line added using r+ mode',")
file.close()
